---
title: Localization strategy
sidebar_position: 4
---

# Localization strategy

## The question

*"If all these products need to be translated into Korean, German, French, Mandarin, Japanese, Spanish,
Portuguese, and Italian — does Docusaurus handle localization well and efficiently?"*

(That's 8 languages — this site implements exactly those 8 plus the English source, i.e. **9 locales
total**. If you actually need a round 10, add two more entries to the `locales` array and the
`localeConfigs` map in `docusaurus.config.ts` — nothing else about the architecture changes.)

## How Docusaurus i18n actually works

Docusaurus i18n is **file-based and per-plugin-instance**, mirroring the source doc's path:

```
docs-atlas/intro.md                                                  # English (default locale)
i18n/ko/docusaurus-plugin-content-docs-atlas/current/intro.md        # Korean translation
i18n/de/docusaurus-plugin-content-docs-atlas/current/intro.md        # German translation
```

Each locale builds as its **own standalone single-page app** — `/ko/docs/atlas/intro`,
`/de/docs/atlas/intro`, etc. — which is exactly what makes localized builds independently deployable (you
can ship a German site update without touching the Japanese one) but is also why there's **no automatic
fallback**: a page that exists in English but not in a given locale simply doesn't exist there.

## How this site generated 9 locales × 15 products without a translation team

For a real company, the maintainers' recommendation (see
[discussion #11171](https://github.com/facebook/docusaurus/discussions/11171)) is to use a **translation
management SaaS like [Crowdin](https://crowdin.com/)** rather than hand-editing files in Git — it keeps
translation work out of your version control history and gives translators a proper UI, string diffing, and
translation memory.

For this demo (no live translation team), [`scripts/generate-content.mjs`](https://github.com/purcellconsult/docusaurus-enterprise-demo/blob/main/scripts/generate-content.mjs)
programmatically generates every product's docs from a small set of hand-translated phrase templates per
language, substituting the product name in. It's a stand-in for a real translation pipeline, but it
exercises the exact same file layout Crowdin (or any other pipeline) would produce — which is the point:
**the localization architecture is decoupled from how the translations get written.**

## Efficiency levers, in order of impact

1. **Translate what's read.** Most traffic concentrates on `intro` and `getting-started` pages, not every
   API reference page in every language on day one. Prioritize by page views, not by completeness.
2. **Localize the current version only, by default.** Versioned + localized is a real multiplier (see
   [Versioning strategy](./versioning-strategy.md#versioning--localization)) — don't retranslate archived
   versions unless there's demonstrated demand.
3. **Deploy locales independently in CI** rather than rebuilding all 9 on every change — Docusaurus's
   per-locale SPA design supports this natively.
4. **Keep UI strings (navbar/footer/theme) in sync with `docusaurus write-translations --locale <code>`**,
   which scans your theme/config and generates the JSON files translators fill in — don't hand-roll those.
