---
title: Introduction
sidebar_position: 1
---

# Introduction

Atlas is Northwind Cloud's product analytics API: you send it events (`checkout_completed`,
`feature_used`, whatever actions matter to your product), and it gives you funnels, retention cohorts, and
ad-hoc queryable event data back. It's built for teams who want analytics infrastructure without running
their own event pipeline.

## What Atlas is not

Atlas is an events API, not a full customer data platform — it doesn't do CDP-style reverse-ETL,
warehouse syncing, or destination fan-out. If you need those, pair Atlas with [Cascade](/docs/cascade/intro)
for pipeline/warehouse work; Atlas focuses on being the fastest path from "user did something" to "query it
in a funnel."

## Key features

- Real-time event streaming with sub-second ingestion (p99 &lt; 400ms from `POST` to queryable)
- Custom funnels and retention cohorts, computed on read — not batch jobs you wait on
- SQL-based ad-hoc querying over raw event data via the [query endpoint](./api-reference.md)

## Before you start

Read [Concepts](./concepts.md) first — specifically how Atlas models **events** and **identities** — before
jumping to [Getting started](./getting-started.md). Ten minutes there will save you from the single most
common integration mistake: inconsistent event naming that silently breaks funnels weeks later.
