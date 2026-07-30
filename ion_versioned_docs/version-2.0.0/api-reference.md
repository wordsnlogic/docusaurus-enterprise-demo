---
title: API reference
sidebar_position: 4
---

# API reference

## Authentication

Bearer token in the `Authorization` header: `Authorization: Bearer $ION_SECRET_KEY`. Test-mode keys
(`sk_test_...`) and live-mode keys (`sk_live_...`) are separate credentials — a test key can never move
real money, even by accident.

## Create a charge

`POST /v1/ion/charges`

**Request**

```json
{
  "amount": 4200,
  "currency": "usd",
  "customer": "cus_h82ndk3",
  "payment_method": "pm_1a2b3c",
  "idempotency_key": "order_9f3e-attempt-1"
}
```

**Response** — `200 OK`

```json
{
  "id": "ch_3P8kq2Aa",
  "amount": 4200,
  "currency": "usd",
  "status": "succeeded",
  "customer": "cus_h82ndk3",
  "created": "2026-07-20T09:14:22Z"
}
```

`status` is one of `succeeded`, `pending` (some local payment methods settle asynchronously), or `failed`.

## Create a customer

`POST /v1/ion/customers`

```json
{
  "email": "jordan@acme.com",
  "payment_method": "pm_1a2b3c"
}
```

Response includes the customer `id` (`cus_...`) to reuse on future charges and subscriptions.

## Create a subscription

`POST /v1/ion/subscriptions`

```json
{
  "customer": "cus_h82ndk3",
  "plan": "plan_pro_monthly",
  "idempotency_key": "sub_acme_pro-2026-07"
}
```

**Response**

```json
{
  "id": "sub_7k2p9x",
  "status": "active",
  "current_period_end": "2026-08-20T09:14:22Z"
}
```

## Issue a refund

`POST /v1/ion/refunds`

```json
{
  "charge": "ch_3P8kq2Aa",
  "amount": 2000
}
```

Omit `amount` to refund the charge in full. Partial refunds can be issued multiple times against the same
charge as long as their total doesn't exceed the original amount.

## Errors

| HTTP status | `code` | Meaning |
| --- | --- | --- |
| 400 | `invalid_currency` | Currency not supported, or amount invalid for that currency's subunit |
| 402 | `card_declined` | The payment method was declined by the issuer |
| 404 | `no_such_charge` | The referenced `charge`/`customer`/`payment_method` ID doesn't exist |
| 409 | `idempotency_key_reused` | Same key used with a **different** request body than the original |
| 429 | `rate_limited` | Back off using the `Retry-After` header |

`card_declined` responses include a `decline_code` (`insufficient_funds`, `expired_card`,
`generic_decline`, …) — surface this to the end user rather than a generic "payment failed" message where
possible; it materially reduces retry-and-fail loops at checkout.

## Rate limits

100 requests/second per API key across all endpoints. Charge creation specifically is additionally capped
at 25/second per key to limit the blast radius of a runaway retry loop.

## Support

For questions about Ion, contact the product team or visit the community forum.
