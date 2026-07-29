# Northwind Cloud Docs — architecture overview

This project is a working answer to four questions that came up at a conference talk about Docusaurus:

1. Can Docusaurus handle documentation for ~100 product lines without degrading performance?
2. Does Docusaurus handle versioning well across that many products?
3. Can it localize into many languages efficiently?
4. How should the information architecture be organized, and what plugins help?

Rather than just describe an approach, this repo **is** the approach: 15 fictional "Northwind Cloud"
product lines, each with its own versioned docs, translated into 9 languages (8 requested + English), all
served from a single Docusaurus deployment. The live site itself only shows the product documentation —
this `meta/` folder is where the reasoning behind it lives.

Read the write-ups:

- [Architecture](./ARCHITECTURE.md) — how multi-instance docs plugins model 100 product lines
- [Versioning strategy](./VERSIONING_STRATEGY.md) — per-product versioning without an all-or-nothing site
- [Localization strategy](./I18N_STRATEGY.md) — i18n approach for 8+ languages
- [Performance](./PERFORMANCE.md) — what actually happened to build time at this scale, and how to keep it sane
- [Why Docusaurus (not DITA, not another SSG)](./TOOLING_EVALUATION.md) — the tooling evaluation, including why "SaaS vs. hardware" isn't actually the deciding factor

Or see the live site's [product catalog](https://docusaurus-enterprise-demo.vercel.app/products) to see it
in action.
