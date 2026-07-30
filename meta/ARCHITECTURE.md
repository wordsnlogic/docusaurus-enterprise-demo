# Architecture: one site, many products

## The question

*"Can Docusaurus handle documentation for a company with ~100 product lines and build efficiently
without degrading performance? What's a good strategy?"*

## The mechanism: multi-instance docs plugin

Docusaurus's `@docusaurus/preset-classic` gives you one `@docusaurus/plugin-content-docs` instance for
free. What's less well known is that you can register **additional, independent instances** of that same
plugin, each with its own:

- source folder (`path`)
- URL namespace (`routeBasePath`)
- sidebar
- version history (`versions.json`, `versioned_docs/`)
- `id` (required for every instance except the default one)

This site registers one plugin instance per product line, generated from a single data file
([`data/products.json`](https://github.com/wordsnlogic/docusaurus-enterprise-demo/blob/main/data/products.json))
instead of hand-writing 15 (or 100) near-identical config blocks:

```ts title="docusaurus.config.ts (excerpt)"
const productDocsPlugins = products.map((product) => [
  '@docusaurus/plugin-content-docs',
  {
    id: product.id,
    path: `docs-${product.id}`,
    routeBasePath: `docs/${product.id}`,
    sidebarPath: './sidebars-product.js',
  },
]);
```

Going from 15 products to 100 is **not** a redesign — it's 85 more rows in `products.json`. That's the
strategy: model products as data, generate plugin config from that data, and let every product's docs live
in an isolated folder tree (`docs-atlas/`, `docs-beacon/`, …) so teams can own their own product's docs
without touching anyone else's.

## Where it stops being "just add more instances"

The Docusaurus maintainers are explicit about the ceiling on this pattern (see the
[official multi-instance guide](https://docusaurus.io/docs/next/docs-multi-instance) and
[maintainer discussion #11171](https://github.com/facebook/docusaurus/discussions/11171)):

> If each documentation instance is very large, you should rather create 2 distinct Docusaurus sites.

One real-world data point from that discussion: a production site running **28 doc plugins × 2 locales
(56 plugin:locale combinations)** saw full builds take **20+ minutes and 10GB+ RAM** — versus **~2 minutes
and ~2GB RAM** for a *selective* build of a single plugin:locale pair, using
[`DOCUSAURUS_CURRENT_LOCALE`](https://github.com/facebook/docusaurus/discussions/11848) and per-plugin
build scoping.

This demo intentionally leans into that ceiling: **15 products × 9 locales × (3 current docs + versioned
docs for 2 products) is 153 plugin/version × locale build units** — see [Performance](./PERFORMANCE.md) for
what that actually cost to build, and how selective/incremental builds fix it in CI.

## Practical strategy for ~100 products

1. **Model products as data**, not as hand-maintained config blocks (this repo: `data/products.json`).
2. **One plugin instance per product**, each in its own folder, owned by its own team.
3. **Shard once instances get large.** A handful of flagship products with huge docs (and their own release
   cadence) are better off as their own Docusaurus deployments, cross-linked from a central hub — not
   crammed into one build.
4. **Use selective/incremental builds in CI**: rebuild only the plugin(s) whose source files changed, not
   the whole site, on every PR. Reserve full multi-locale builds for release/deploy pipelines.
5. **Give every product a landing surface.** See the live site's
   [`/products`](https://northwind-cloud.vercel.app/products) — a generated catalog page, not a
   68-item navbar dropdown. Good IA at this scale means *searchable and browsable*, not *everything visible
   at once* — see [Performance](./PERFORMANCE.md#information-architecture) for the full navbar/IA reasoning.
