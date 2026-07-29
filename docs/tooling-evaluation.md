---
title: Why Docusaurus (not DITA, not another SSG)
sidebar_position: 6
---

# Why Docusaurus, and why not DITA/Oxygen or another static site generator

Northwind Cloud is a pure-play SaaS company — no hardware division, no regulated physical products. That
matters for this decision, but maybe not for the reason people assume.

## The tempting-but-wrong framing: "SaaS vs. hardware"

It's easy to assume DITA/Oxygen XML/FrameMaker are hardware-company tools and lightweight static site
generators are the SaaS-native choice. That's not actually the dividing line. **ServiceNow — a pure SaaS
company — authors its documentation in DITA via Oxygen XML.** So does plenty of the enterprise software
world. The real variable isn't "do you ship atoms or bits," it's:

- **Audience**: enterprise IT admins configuring a deeply modular platform, vs. developers integrating an
  API.
- **Content shape**: one platform with dozens of interdependent, cross-referencing modules (where content
  gets reused across modules constantly), vs. N fairly independent products with their own lifecycles.
- **Output requirements**: PDF/print/in-product help single-sourced from one XML corpus, vs. web-only.
- **Who writes it**: a dedicated technical writing org operating a CCMS, vs. the engineers who built the
  feature, contributing docs the same way they contribute code.

ServiceNow's shape — one sprawling, heavily cross-referenced platform, versioned by release train, needing
PDF exports and role-filtered content, maintained by a large dedicated writing org — is exactly what DITA's
`conref`/key-based reuse and conditional publishing were built for.

## Why Northwind Cloud's shape pointed the other way

Northwind Cloud's documentation problem looks different: **15 fairly independent API products**, each
owned by its own engineering team, shipping continuously, with docs that are mostly self-contained per
product (this site's own multi-instance-per-product architecture — see [Architecture](./architecture.md) —
is a direct reflection of that). Given that shape, the evaluation came out like this:

| Criterion | DITA / Oxygen XML | Docusaurus |
| --- | --- | --- |
| Primary author | Dedicated writing org, CCMS-trained | The engineers who built the feature |
| Contribution workflow | CCMS check-in/check-out | Git PR — same flow as the code itself |
| Content reuse need | High (one platform, many modules) | Low (products are mostly independent) |
| Output targets | HTML + PDF + in-product help, single-sourced | Web only |
| Release cadence | Batched, versioned release trains | Continuous, per-product |
| Localization pipeline | TMS integrated with the CCMS | Crowdin (or similar) integrated with git |

None of this makes DITA the *wrong* tool in general — it's the right tool for ServiceNow's problem. It's a
mismatch for a company whose documentation is written by engineers, shipped continuously, product-by-
product, and read entirely on the web.

## What else was on the shortlist

Docusaurus wasn't the only static-site contender:

- **Mintlify / ReadMe / GitBook** — excellent developer experience out of the box, but hosted/proprietary:
  less control over information architecture at 15-product scale, and cost scales with seats or pages once
  you're well past a handful of products.
- **Nextra / VuePress** — solid, but the specific combination this company needed — multi-instance docs
  *and* i18n *and* per-product versioning, all composing cleanly together — is more mature and better
  documented in Docusaurus than in either.
- **Docusaurus** — open source, self-hostable, git-native, and (per [Performance](./performance.md)) fast
  enough at this scale with `@docusaurus/faster` that the build-time objection doesn't hold up.

## Why Vercel for hosting

Given Docusaurus was already the pick, Vercel followed naturally rather than from a from-scratch hosting
bake-off: zero-config framework detection for Docusaurus, automatic preview deployments per pull request
(so a docs PR gets a shareable live preview before merge — genuinely useful when 15 teams are all shipping
docs changes independently), and a generous free tier for a project this size. GitHub Pages (Docusaurus's
other first-class deploy target, see the README) was the other realistic option — Vercel won on PR previews
and not needing a separate Actions workflow to manage.
