# Performance & information architecture

## The question

*"How should we organize the site so Docusaurus renders quickly? Anything else we can do — plugins,
config — to optimize efficiency?"*

## What this build actually measured

This site is deliberately over-provisioned relative to what most teams need on day one — **15 products ×
9 locales, with 2 products versioned** — specifically so the build numbers below are real, not projected.
See [`BUILD_STATS.md`](https://github.com/wordsnlogic/docusaurus-enterprise-demo/blob/main/BUILD_STATS.md)
for the exact numbers from the last full build in this repo, along with hardware/Node version context.

The short version: this scale is comfortably within reach of a single Docusaurus build **because of two
levers**, both on by default in this repo:

1. **[`@docusaurus/faster`](https://docusaurus.io/docs/api/docusaurus-config#future)** (`future.faster:
   true`) — swaps the default Webpack/Terser/PostCSS toolchain for Rspack, SWC, and Lightning CSS. This is
   the single biggest lever available and requires no architectural change, just a config flag.
2. **Multi-instance isolation** — because every product is its own plugin instance, a change to Atlas's
   docs doesn't force Beacon, Cascade, or the other 12 products to rebuild in an incremental/CI context
   (see [selective builds, discussion #11848](https://github.com/facebook/docusaurus/discussions/11848)).

## What we'd do differently past ~30-40 products

The [28-plugin × 2-locale production example](https://github.com/facebook/docusaurus/discussions/11171)
(20+ min / 10GB+ RAM full build vs. ~2 min / ~2GB selective build) is the ceiling to design around. Past
that scale:

- **Scope CI builds to what changed.** Full multi-locale builds belong in a release pipeline, not every PR.
- **Shard oversized products into their own Docusaurus deployment**, cross-linked from this hub, rather
  than adding them as one more plugin instance here.
- **Cache the toolchain.** `@docusaurus/faster`'s Rspack persistent cache (and webpack's, if you're not on
  `faster` yet) turns a cold multi-minute build into a warm incremental one in CI when `node_modules/.cache`
  is preserved between runs.

## Information architecture

The core IA decision this site makes: **the navbar stays flat and small regardless of product count.**

```
Navbar:  Products | Release Notes | [language ▾] | GitHub
              │
              ▼
      /products  (generated catalog page, one card per product)
              │
              ▼
   /docs/<product>/intro  (that product's own docs, own sidebar)
```

A navbar dropdown with 15 (or 100) entries is a bad IA decision independent of Docusaurus — it doesn't
scale for humans, regardless of whether it scales for the build. Two levels of navigation (`/products` →
`/docs/<product>`) plus [full-text local search](https://github.com/easyops-cn/docusaurus-search-local)
across every product, version, and locale is what actually stays usable at 15 or 100 products. See the live
site's [`/products`](https://docusaurus-enterprise-demo.vercel.app/products) and try the search box in the
navbar. Notice there's no "meta docs about the architecture" link in that navbar at all — this reasoning
lives in the repo's `meta/` folder, not on the product site itself, because a real product site shouldn't
expose its own architecture writeup to end users.

## Plugins used in this repo

| Plugin | Why |
| --- | --- |
| `@docusaurus/faster` | Rspack/SWC/Lightning CSS build pipeline — the default in this repo |
| `@docusaurus/plugin-content-docs` ×15 | One instance per product line |
| `@easyops-cn/docusaurus-search-local` | Offline full-text search across all products/versions/locales, no external service or approval process (unlike Algolia DocSearch) |
| `@docusaurus/plugin-sitemap` (via preset) | SEO — sitemap covers every locale/version combination automatically |

**Recommended but not wired into this demo** (no real images/PWA requirement here, so adding them would
just be build overhead without a payoff to measure): `@docusaurus/plugin-ideal-image` for responsive image
optimization if a product's docs are image-heavy, and `@docusaurus/plugin-pwa` for offline support if the
audience needs docs available without connectivity.
