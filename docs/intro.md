---
title: Overview
sidebar_position: 1
slug: /
---

# Northwind Cloud Docs — architecture overview

This site is a working answer to four questions that came up at a conference talk about Docusaurus:

1. Can Docusaurus handle documentation for ~100 product lines without degrading performance?
2. Does Docusaurus handle versioning well across that many products?
3. Can it localize into many languages efficiently?
4. How should the information architecture be organized, and what plugins help?

Rather than just describe an approach, this site **is** the approach: 15 fictional "Northwind Cloud" product
lines, each with its own versioned docs, translated into 9 languages (8 requested + English), all served
from a single Docusaurus deployment.

Read the write-ups:

- [Architecture](./architecture.md) — how multi-instance docs plugins model 100 product lines
- [Versioning strategy](./versioning-strategy.md) — per-product versioning without an all-or-nothing site
- [Localization strategy](./i18n-strategy.md) — i18n approach for 8+ languages
- [Performance](./performance.md) — what actually happened to build time at this scale, and how to keep it sane
- [Why Docusaurus (not DITA, not another SSG)](./tooling-evaluation.md) — the tooling evaluation, including why "SaaS vs. hardware" isn't actually the deciding factor

Or jump straight to the [product catalog](/products) to see it in action.
