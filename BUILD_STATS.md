# Build stats (measured, not projected)

Captured from `time -p npm run build` on this repo at commit-time.

## Scale built

- **15 product lines**, each its own `@docusaurus/plugin-content-docs` instance
- **9 locales** (English default + Korean, German, French, Simplified Chinese, Japanese, Spanish,
  Portuguese, Italian)
- **2 products versioned** (Atlas, Beacon — each with a `1.0.0` snapshot + current)
- → **17 plugin/version instances × 9 locales = 153 build units**, plus the default (meta-docs) instance
  and the blog, also × 9 locales

## Result

| Metric | Value |
| --- | --- |
| Wall-clock build time | **17.4s** (`real`) |
| CPU time | 34.3s user + 7.0s sys (parallelized across locales) |
| Output size | **36 MB** (`build/`) |
| HTML pages generated | **675** |
| Hardware | Apple M1, 16 GB RAM |
| Node.js | v26.5.0 |
| Docusaurus | 3.10.2, with `future.faster: true` (Rspack/SWC/Lightning CSS) |

## Why this matters

The [production example cited in the Docusaurus maintainers' discussion](https://github.com/facebook/docusaurus/discussions/11171)
— 28 doc plugins × 2 locales (56 combinations) — took **20+ minutes and 10GB+ RAM** for a full build on
(implicitly) the pre-`faster` Webpack toolchain. This repo's 153 combinations built in under 20 seconds.
The gap is almost entirely the `@docusaurus/faster` toolchain (Rspack instead of Webpack, SWC instead of
Babel/Terser, Lightning CSS instead of PostCSS) — a config flag, not an architecture change.

That doesn't mean scale stops mattering — it means the *first* lever to pull, before reaching for sharding
or selective builds, is confirming `future.faster: true` is actually on.
