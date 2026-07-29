---
title: Migrating from 1.0.0
sidebar_position: 4
---

# Migrating from 1.0.0

This page only exists in the **current (unreleased)** docs — it did not exist in `1.0.0` and won't appear
if you switch the version dropdown back to `1.0.0`. That's versioning working as intended: each version
snapshot reflects exactly what was true for that release, including which pages existed at all.

## What changed

- The `resources` endpoint now requires pagination parameters (`page`, `page_size`) on `GET` requests.
- Authentication tokens issued under `1.0.0` remain valid; no re-auth is required.

Deliberately **not translated yet** — per the [localization strategy](/docs/i18n-strategy), new pages get
translated once they've shown real read traffic, not automatically on creation.
