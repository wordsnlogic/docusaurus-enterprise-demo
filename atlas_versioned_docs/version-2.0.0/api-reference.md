---
title: API reference
sidebar_position: 4
---

# API reference

## Authentication

All requests require a bearer token in the `Authorization` header: `Authorization: Bearer $ATLAS_API_KEY`.
Requests without a valid key return `401`; requests with a key that's valid but lacks permission for the
requested project return `403`.

## Ingest events

`POST /v1/atlas/events`

Accepts up to 1,000 events per request. Larger batches should be chunked client-side — the SDKs do this
automatically.

**Request**

```json
{
  "events": [
    {
      "name": "checkout_completed",
      "user_id": "usr_8f3a1c",
      "timestamp": "2026-07-15T14:32:00Z",
      "properties": {
        "order_id": "ord_29xk3",
        "revenue": 84.50,
        "currency": "USD",
        "items": 3
      }
    }
  ]
}
```

**Response** — `202 Accepted`

```json
{
  "accepted": 1,
  "rejected": 0,
  "batch_id": "batch_7f2e9a1c"
}
```

If some events in a batch fail validation, Atlas accepts the valid ones and reports the rest individually
rather than rejecting the whole batch:

```json
{
  "accepted": 2,
  "rejected": 1,
  "batch_id": "batch_7f2e9a1c",
  "errors": [
    { "index": 2, "code": "invalid_timestamp", "message": "timestamp is more than 24h in the past" }
  ]
}
```

## Query raw events

`GET /v1/atlas/events`

| Parameter | Type | Description |
| --- | --- | --- |
| `user_id` | string | Filter to a single identity |
| `name` | string | Filter to a single event name |
| `since` / `until` | ISO 8601 | Time range (defaults to the last 24h) |
| `limit` | integer | Max 100 per page, default 20 |
| `cursor` | string | Opaque pagination cursor from the previous response's `next_cursor` |

**Response** — `200 OK`

```json
{
  "data": [
    {
      "id": "evt_4k2p91xz",
      "name": "checkout_completed",
      "user_id": "usr_8f3a1c",
      "timestamp": "2026-07-15T14:32:00Z",
      "properties": { "revenue": 84.50, "currency": "USD", "items": 3 }
    }
  ],
  "next_cursor": "eyJvZmZzZXQiOjIwfQ==",
  "has_more": true
}
```

## Funnels

`POST /v1/atlas/funnels` creates a funnel definition; `GET /v1/atlas/funnels/:id` computes and returns
current results for it.

**Create — request**

```json
{
  "name": "Signup to purchase",
  "steps": ["signup_completed", "product_viewed", "checkout_completed"],
  "window": "7d"
}
```

**Query — response**

```json
{
  "id": "fnl_9x2k3p",
  "name": "Signup to purchase",
  "steps": [
    { "name": "signup_completed", "count": 4200, "conversion_from_previous": 1.0 },
    { "name": "product_viewed", "count": 3110, "conversion_from_previous": 0.74 },
    { "name": "checkout_completed", "count": 892, "conversion_from_previous": 0.29 }
  ]
}
```

## Cohorts

`GET /v1/atlas/cohorts/:id` — membership is recomputed on every call, not cached at creation time.

```json
{
  "id": "cht_3f8a2c",
  "name": "Active purchasers (30d)",
  "size": 1847,
  "last_computed": "2026-07-15T14:32:00Z"
}
```

## Errors

| HTTP status | `code` | Meaning |
| --- | --- | --- |
| 400 | `invalid_event_schema` | A required field was missing or the wrong type |
| 400 | `invalid_timestamp` | Timestamp is more than 24h in the past, or in the future |
| 401 | `invalid_api_key` | Key is missing, malformed, or revoked |
| 403 | `insufficient_scope` | Key is valid but not authorized for this project |
| 413 | `batch_too_large` | More than 1,000 events in one request |
| 429 | `rate_limited` | See rate limits below; back off using the `Retry-After` header |

## Rate limits

600 requests/minute per API key for `/events` (ingestion), 60 requests/minute for query endpoints
(`/events` GET, `/funnels`, `/cohorts`). Limits are per-key, not per-project — split high-volume ingestion
across multiple keys if you need more throughput rather than requesting a limit increase first.

## Support

For questions about Atlas, contact the product team or visit the community forum.
