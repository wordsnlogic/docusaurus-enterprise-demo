---
title: Concepts
sidebar_position: 2
---

# Concepts

Atlas has four core objects. Understanding how they relate makes the rest of the API reference much
easier to follow.

## Events

An **event** is a single, timestamped fact about something a user did — `checkout_completed`,
`page_viewed`, `signup_started`. Every event has:

- `name` — a snake_case string you choose. Pick a small, consistent vocabulary; `checkout_completed` and
  `order_completed` fragmenting the same action across your codebase is the single most common cause of
  broken funnels.
- `user_id` — the identity the event belongs to (see **Identities**, below).
- `timestamp` — when it happened. Atlas accepts events up to 24 hours in the past for backfills; older
  events are accepted but excluded from real-time funnels.
- `properties` — an arbitrary JSON object of attributes about the event (`revenue`, `plan`, `item_count`).

Events are immutable once ingested. There is no update endpoint — if you sent a mistake, send a
corrected event rather than trying to edit the original.

## Identities

Atlas tracks people via `user_id`, a string you control (your own database's user ID, not an Atlas-issued
one). If you need to merge two identities — a common case being an anonymous visitor who later signs up —
use the identity-merge behavior described in [Getting started](./getting-started.md)
rather than re-sending historical events under the new ID.

## Funnels

A **funnel** is an ordered sequence of event names. Atlas computes, over a time window, how many identities
completed step 1, then step 2, and so on — and where they dropped off. Funnels are defined once (`POST
/v1/atlas/funnels`) and queried repeatedly (`GET /v1/atlas/funnels/:id`); the definition doesn't change
each time you query it, only the computed result does.

## Cohorts

A **cohort** is a saved *definition* of "identities who did X" — e.g. "signed up in the last 30 days" or
"completed `checkout_completed` at least 3 times." Cohorts are recomputed on read, so a cohort's membership
reflects current data every time you fetch it, not a snapshot from when it was created.
