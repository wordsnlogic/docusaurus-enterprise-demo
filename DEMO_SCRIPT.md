# Demo recording script (~6-8 minutes)

Talking points map directly to the four audience questions from the last event. Record with the deployed
Vercel URL once live, or `npm run build && npm run serve` locally.

## 1. Cold open (30s)

> "At the last event, someone asked me: can Docusaurus handle docs for a company with 100 different
> products? Does it version well? Does it localize into 8-10 languages without falling over? Instead of
> answering with slides, I built the thing."

Show the homepage. Point out the stat cards: 15 product lines, 9 locales, 2 versioned products.

## 2. The scale question — Products catalog (60-90s)

- Click **"Browse all products"** → `/products`
- "Each of these 15 cards is backed by its own Docusaurus docs plugin instance — its own folder, its own
  sidebar, its own version history if it needs one."
- Click into **Atlas** → show intro/getting-started/API reference.
- Say the line: "Going from 15 products to 100 isn't a redesign — it's 85 more rows in a JSON file." →
  briefly show `data/products.json` in an editor if screen-sharing code, or just describe it.

## 3. The versioning question — Atlas version dropdown (60-90s)

- On the Atlas docs page, click the **version dropdown** in the navbar.
- Switch from the default (1.0.0) to **Next/Unreleased** → sidebar gains a **"Migrating from 1.0.0"** page
  that literally does not exist in 1.0.0.
- "That's the point — each version is a real historical snapshot, including which pages existed. And
  versioning is per-product: Beacon versions independently of Atlas, and the other 13 products aren't
  versioned at all because they don't need to be yet."

## 4. The localization question — language switcher (60-90s)

- Use the **language dropdown** in the navbar (top right) → switch to **한국어** (Korean) or **Deutsch**.
- Navigate to the same Atlas intro page in the new locale — show it's a fully separate, real translation,
  not a machine-translated banner bolted onto the English page.
- "Docusaurus does NOT auto-fall-back missing translations to English — a missing page is a missing page.
  That's a real constraint worth planning around, not a footgun to discover in production."
- Try the **search box** — search for a term and show results across products.

## 5. The performance question — the receipts (90s)

- Cut to `/docs/performance` (or `BUILD_STATS.md` on screen).
- "Here's what actually happened when I built this for real: 15 products times 9 locales times versioning
  is 153 build combinations. Full production build: **17.4 seconds**, 675 pages, on a laptop."
- "The single biggest lever is `@docusaurus/faster` — Rspack instead of Webpack. It's a config flag, not an
  architecture change."
- Mention the ceiling: cite the 28-plugin/2-locale example (20+ min without it) from the Docusaurus
  maintainers' own discussion, and the "shard past a certain size" guidance.

## 6. Close (30s)

> "So: yes to 100 products, yes to per-product versioning, yes to a dozen languages — with real caveats
> around missing-translation fallback and knowing when to shard. Everything you just saw is open source,
> linked below, README included if you want to run it yourself."

Show the GitHub repo URL and the live Vercel URL on the closing slide.

## Recording notes

- Record in 1080p+, browser zoomed to ~110% so text is legible in a recording.
- Do a dry run of the version-dropdown and language-dropdown clicks before recording — they're the two
  "wow" moments and are easy to fumble live.
- If demoing locally instead of the deployed URL, run `npm run serve` (not `npm start`) so it's the real
  production build, not the dev server.
