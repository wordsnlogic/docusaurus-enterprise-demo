---
title: Introduction
sidebar_position: 1
---

# Introduction

Ion is Northwind Cloud's payments API: charges, saved payment methods, subscriptions, and refunds across
135+ currencies, with PCI-DSS Level 1 compliant card vaulting so you never need to handle raw card numbers
on your own servers.

## Test mode vs. live mode

Every Ion account has separate test and live API keys (prefixed `sk_test_` and `sk_live_`). Test-mode
charges use the same API and validation rules as live mode but never move real money — build and test your
entire integration in test mode, including failure paths, before switching keys.

## Key features

- 135+ currencies and local payment methods
- PCI-DSS Level 1 compliant card vaulting — card numbers never touch your servers
- Usage-based and subscription billing with automatic dunning on failed renewals

## Before you start

Read [Concepts](./concepts.md) — in particular how amounts are represented as integers and how
idempotency keys work — before writing any charge-creation code. Both are easy to get wrong once and
expensive to get wrong in production.
