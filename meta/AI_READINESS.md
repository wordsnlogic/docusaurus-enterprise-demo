# Making the docs AI-ready — what we did, and how we verified it

## The question

*"What can we do to make the docs AI-ready? How do we confirm/verify that it's optimized for both humans
and AI agents? What data should we use?"*

## What "AI-ready" actually means for a docs site

Two separate audiences, two separate mechanisms:

1. **AI coding assistants and agents** (Claude Code, Cursor, ChatGPT with browsing, etc.) that fetch pages
   on demand while helping a developer integrate your API. They need clean, complete, machine-parseable
   markdown — not JS-rendered HTML with nav chrome stripped out badly.
2. **AI crawlers that pre-train or index for later retrieval** (GPTBot, ClaudeBot, PerplexityBot,
   Google-Extended, CCBot). They need to be allowed to crawl at all, and to find a curated entry point
   instead of guessing which of hundreds of pages matter.

Docusaurus is already a strong starting point for both: it's fully server-rendered static HTML (no
JS-execution requirement to read content, unlike client-only SPA doc tools), with clean semantic markup.
The gaps are the same ones that matter for humans skimming vs. deep-reading: a curated index, and raw
content without UI chrome.

## What we implemented

1. **[`llms.txt` and `llms-full.txt`](https://llmstxt.org)** via
   [`docusaurus-plugin-llms`](https://github.com/rachfop/docusaurus-plugin-llms) — the closest thing to a
   standard right now (same idea as `robots.txt`/`sitemap.xml`, but a curated markdown index for LLMs).
   `llms.txt` lists every product's docs with one-line descriptions; `llms-full.txt` concatenates the full
   content of all 50 English-source pages into one fetchable file.
2. **Per-page raw markdown** (`generateMarkdownFiles: true`) — every rendered HTML page has a `.md` sibling
   with the clean source content, so an agent fetching `/docs/atlas/intro.md` gets exactly the markdown, no
   HTML/nav/footer noise to strip.
3. **`robots.txt`** explicitly allowing `GPTBot`, `ClaudeBot`, `anthropic-ai`, `PerplexityBot`,
   `Google-Extended`, and `CCBot` — this is a real, current policy decision (some sites now explicitly
   *block* AI crawlers instead), and it should be a deliberate choice, not an accident of an unconfigured
   default.
4. **English-source-only generation** — `llms.txt`/`llms-full.txt` are built once from the English source
   docs, not once per locale. Generating 9 near-identical corpora would multiply token cost for agents with
   no real benefit; this mirrors the same "translate what's read" reasoning as
   [`I18N_STRATEGY.md`](./I18N_STRATEGY.md).

## Should you add a chatbot?

Not yet, for this docs corpus specifically — and the reasoning is worth stating explicitly rather than
just asserting it, since "add an AI chatbot" is the default reflex right now.

The entire English content of this site — 15 products, 4 pages each — is **~29KB** as a single
`llms-full.txt` (see [Verification checklist](#verification-checklist-what-wed-run-in-ci-for-a-real-company)
below). That fits in a single prompt to any current model with room to spare. A RAG chatbot exists to
solve one problem: *the corpus is too large to fit in context, so you need to retrieve the relevant slice
of it first.* At this size, that problem doesn't exist yet — retrieval only adds a new failure mode
(fetching the wrong chunk) without solving anything a full-context prompt doesn't already solve for free.

Concretely, the tradeoff:

| | Full-context prompt (current approach) | RAG chatbot |
| --- | --- | --- |
| Infrastructure | None — a static file | Vector DB, embedding pipeline, hosting, ongoing cost |
| Failure mode | Model misreads content it definitely has | Retrieval fetches the *wrong* content, model answers confidently anyway |
| Maintenance | Regenerate on doc change (already automated at build time) | Re-index on doc change, monitor retrieval quality drift |
| Right for | A corpus that fits in one context window | A corpus that doesn't (hundreds of products, not 15) |

**When this flips**: once the product catalog is large enough that `llms-full.txt` exceeds a practical
prompt budget — realistically, once you're deep into the "~100 products" scale from the original
question — retrieval becomes necessary, not optional. That's the point to revisit this, using the
`llms-full.txt` growth curve itself as the trigger metric rather than a calendar date.

Further reading if/when that point arrives: [Anthropic's guide to building effective
agents](https://www.anthropic.com/engineering/building-effective-agents) and [Anthropic's contextual
retrieval writeup](https://www.anthropic.com/news/contextual-retrieval) both cover when retrieval earns
its complexity, and what breaks if you reach for it too early.

## AI optimization beyond a chatbot

`llms.txt` and `robots.txt` are the two we implemented, but they're not the whole toolkit. Roughly in
order of effort-to-impact for an API-docs site like this one:

1. **Publish an [OpenAPI](https://www.openapis.org/) spec** (JSON/YAML) per product. This is arguably
   higher-leverage than `llms.txt` for *coding* agents specifically (Cursor, Copilot, Claude Code): a
   structured spec gives exact parameter names, types, and required fields without the model inferring
   them from prose, which is where hallucinated parameters usually come from. Not implemented in this demo
   — the endpoint tables in each product's API reference are the prose equivalent of what an OpenAPI spec
   would formalize.
2. **An [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) server.** Rather than an agent
   fetching and parsing markdown pages, it calls structured tools directly (`get_endpoint_schema("ion",
   "charges.create")`). This is the more capable sibling of publishing an OpenAPI spec — worth it once
   there's real usage to justify hosting a server, not a first move.
3. **[schema.org](https://schema.org/TechArticle) structured data** (`TechArticle`, `FAQPage`, `SoftwareApplication`
   JSON-LD). Helps both traditional search and the newer generative-search surfaces understand page intent
   without parsing prose. Cheap to add, not implemented here since this demo prioritized `llms.txt` first.
4. **Consistent terminology and one canonical name per concept** — we did this by convention already (the
   [`I18N_STRATEGY.md`](./I18N_STRATEGY.md) phrase-consistency point applies just as much to English: e.g.
   this site never calls the same concept an "event" in one page and an "activity" in another). Any
   external system indexing or embedding this content — RAG pipelines, search engines, other AI crawlers —
   benefits from that consistency exactly the way a human skimming does.
5. **Explicit staleness signals.** The version banner (see the versioning discussion above) is a
   machine-parseable "this page is not current" signal, not just a human-readable one — an agent that
   respects it won't cite a deprecated endpoint as current.

## How we verified it — and what that verification actually caught

**We did not just install the plugin and assume it worked.** We ran a real build and read the generated
output, and that caught two genuine bugs:

1. **Doubled path segments.** The plugin's default URL construction produced broken links like
   `/docs/beacon/docs-beacon/api-reference.md` (the source folder name leaking into the route). Fixed via
   the `pathTransformation.ignorePaths` option once we could see the bad output.
2. **Versioned-docs route mismatches.** For Atlas and Beacon specifically (the two versioned products),
   generated links do not correctly resolve to the `/next/` route for current/unreleased content — and for
   Atlas, some links resolve to an entirely unrelated product (`/docs/ion/...`) instead. This appears to be
   an upstream limitation in how the plugin's route-matching handles Docusaurus's versioned-docs routing
   combined with multi-instance plugins — a combination that's plausibly never been tested together before,
   since each piece (multi-instance, versioning, llms.txt generation) is a relatively niche feature on its
   own. **We're documenting this rather than silently shipping it**, and it did not block deploying — 13 of
   15 products resolve correctly, and this is exactly the kind of thing you only find by actually generating
   the output and reading it, not by reading the plugin's README and assuming it works.

That's the core lesson for verification: **read the generated `llms.txt`/`llms-full.txt` by hand after every
change that touches routing.** An automated check can confirm the files exist and are non-empty; it won't
catch "this link points to the wrong product."

## Verification checklist (what we'd run in CI for a real company)

- [ ] `curl https://<site>/llms.txt` returns 200 and is non-empty.
- [ ] Every link in `llms.txt` resolves with a `curl -o /dev/null -w '%{http_code}'` check returning 200 —
      this alone would have caught bug #2 above automatically, and is worth adding here as a follow-up.
- [ ] `robots.txt` is reachable and explicitly lists intended crawler policy (don't rely on the default
      `Allow: /` alone — be explicit about which bots you mean to include).
- [ ] Spot-check `llms-full.txt` size against a target LLM's typical context budget — ours is ~29KB / ~1,150
      lines for 50 pages, comfortably within any modern context window as a single fetch.
- [ ] **Manually sample 3-5 entries per product/section** and open the linked `.md` file — this is the step
      that actually catches routing bugs; there's no substitute for reading the output.

## What data to use to confirm it's *working*, not just present

Generating the files proves they exist; it doesn't prove anyone's using them. The real signal is traffic:

- **Server/edge logs filtered by user-agent** (`GPTBot`, `ClaudeBot`, `PerplexityBot`, etc.) — Vercel's
  deployment logs (or Cloudflare, if fronting the site) show this directly. A spike in `GPTBot` hits to
  `/llms.txt` after publishing it is the clearest confirmation available today.
- **Direct hits to `/llms.txt` and `/llms-full.txt` themselves** in analytics — most human visitors never
  request these paths, so nonzero traffic to them is a reasonably clean AI-agent signal.
- **Referral/citation tracking is currently the weak link industry-wide.** Unlike search engines, most AI
  answer surfaces don't reliably report back "we used your docs to answer this" — so as of today, crawler
  *access* (logs) is a far more reliable data source than citation/referral tracking, which mostly doesn't
  exist yet in a usable form.
- **The most direct test available right now: ask an actual agent.** Point Claude, ChatGPT, or Cursor's
  agent mode at a real integration task using only this site's `llms.txt` as context, and see whether it
  produces correct, current API calls — that's a truer test than any automated metric.
- **This demo has an unusually clean version of that test available.** Northwind Cloud, Atlas, Ion, and
  Genesis are all invented for this project — no model has them in its pretraining data. That means if you
  ask an AI assistant a question like *"what's the idempotency key format for Ion's charges endpoint"* and
  it answers correctly, it can **only** be because it actually retrieved and read the docs — there's no
  pretraining knowledge it could be pattern-matching against instead. A real company's docs can't isolate
  this as cleanly, since a popular product's API may already be partially known to the model from training
  data, muddying whether a correct answer came from retrieval or from memory.
- **For tracking citation/mention rate over time** (rather than one-off manual tests), the emerging
  category is "generative engine optimization" (GEO) monitoring tools — e.g.
  [Profound](https://www.tryprofound.com/) or [Otterly](https://otterly.ai/) — which periodically query AI
  answer engines and track whether/how a brand is cited. Worth knowing the category exists; not evaluated
  or implemented for this demo.
