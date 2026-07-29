---
title: Versioning strategy
sidebar_position: 3
---

# Versioning strategy

## The question

*"Can Docusaurus handle versioning? Products all need docs across many product lines, plus many
languages — does that combination scale?"*

## Yes, and it's per plugin instance

Because versioning belongs to the docs plugin instance, not the site, **every product versions
independently**. Atlas can be on v2 while Beacon is still on v1 while Cascade has never been versioned at
all — all in the same deployment. That mirrors how real product teams actually ship: not in lockstep.

This demo versions two products to prove that out:

- **[Atlas](/docs/atlas/intro)** — versioned (`1.0.0` archived, current docs represent the next release)
- **[Beacon](/docs/beacon/intro)** — versioned independently of Atlas
- The other 13 products are intentionally **unversioned** — most internal/early-stage products don't need
  version history from day one, and turning it on is a single CLI command per instance when they do:

```bash
npm run docusaurus docs:version:atlas -- 1.0.0
npm run docusaurus docs:version:beacon -- 1.0.0
```

Each instance gets its own versioned artifacts (`atlas_versions.json`, `atlas_versioned_docs/`, etc.) and
its own version dropdown in the navbar for that product's docs — they don't interfere with each other.

## Versioning × localization

This is where the multiplication in the original question actually bites: **N products × M versions × L
locales** is the real build unit count, not just N products. A versioned, localized product isn't one docs
set — it's `versions × locales` docs sets that all need to exist as translated files (Docusaurus does
**not** auto-fall back to the default locale for missing translated docs — see
[GitHub discussion #11207](https://github.com/facebook/docusaurus/discussions/11207) — a missing translation
is a missing/broken page, not an English page in disguise).

Practical guidance:

- **Archive old versions instead of maintaining N indefinitely.** The maintainers point to React Native's
  docs as the model: old versions stay online, frozen, and stop being rebuilt/retranslated on every change.
  See [discussion #11171](https://github.com/facebook/docusaurus/discussions/11171).
- **Don't version everything by default.** Version the products that actually ship breaking changes to
  documented behavior; leave fast-moving or internal products unversioned.
- **Translate current docs first, backfill old versions later (or not at all).** Most readers are on the
  latest version; translation budget should follow traffic.
