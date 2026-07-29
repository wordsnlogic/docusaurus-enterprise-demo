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
