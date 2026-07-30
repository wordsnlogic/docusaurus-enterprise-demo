---
title: Concepts
sidebar_position: 2
---

# Concepts

## Amounts are integers

Every amount in the Ion API is an integer in the currency's **smallest unit** — cents for USD, yen for
JPY (which has no subunit, so ¥500 is `500`, not `50000`). This avoids floating-point rounding errors in
money math. `amount: 4200` for `currency: "usd"` means $42.00.

## Charges

A **charge** is a single attempt to move money from a customer to you. Charges are created in one call
and settle asynchronously — a `succeeded` status means the charge was authorized, not necessarily that
funds have finished settling into your payout account.

## Customers and payment methods

A **customer** is a reusable record you attach one or more **payment methods** to (cards, bank accounts).
Creating a customer up front — rather than passing raw card details on every charge — is what enables
saved-card checkout and subscriptions.

## Idempotency keys

Every write endpoint (`charges`, `refunds`, `subscriptions`) accepts an `idempotency_key`. If a request
times out and you retry it with the **same** key, Ion returns the original result instead of creating a
duplicate charge. Reusing a key with a **different** request body is treated as an error — see
[Errors](./api-reference.md). Always generate idempotency keys client-side, tied to the business
action (e.g. your own order ID), not randomly per HTTP attempt.

## Subscriptions

A **subscription** binds a customer to a plan and bills on a recurring schedule. Subscriptions have a
`current_period_end`; Ion attempts to charge automatically at that boundary and moves the subscription to
`past_due` (not immediately `canceled`) if the charge fails, giving you a dunning window before access is
revoked.

## Refunds

Refunds reference a charge and can be partial. A charge can have multiple partial refunds as long as their
total doesn't exceed the original amount.
