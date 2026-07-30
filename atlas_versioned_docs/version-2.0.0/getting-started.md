---
title: Getting started
sidebar_position: 3
---

# Getting started

## Prerequisites

You'll need a Northwind Cloud account and an Atlas API key, which you can generate from **Settings →
API Keys** in the dashboard. Atlas keys are scoped per-project — use a separate key for staging and
production so a leaked staging key can't write to production data.

## Send your first event

**cURL**

```bash
curl https://api.northwind.cloud/v1/atlas/events \
  -H "Authorization: Bearer $ATLAS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "events": [{
      "name": "checkout_completed",
      "user_id": "usr_8f3a1c",
      "timestamp": "2026-07-15T14:32:00Z",
      "properties": { "revenue": 84.50, "currency": "USD", "items": 3 }
    }]
  }'
```

**Node.js**

```js
import { Atlas } from "@northwind/atlas";

const atlas = new Atlas({ apiKey: process.env.ATLAS_API_KEY });

await atlas.track({
  name: "checkout_completed",
  userId: "usr_8f3a1c",
  properties: { revenue: 84.50, currency: "USD", items: 3 },
});
```

**Python**

```python
from northwind_atlas import Atlas

atlas = Atlas(api_key=os.environ["ATLAS_API_KEY"])

atlas.track(
    name="checkout_completed",
    user_id="usr_8f3a1c",
    properties={"revenue": 84.50, "currency": "USD", "items": 3},
)
```

All three do the same thing: the SDKs are thin wrappers over the same `POST /v1/atlas/events` endpoint
documented in [API reference](./api-reference.md) — if your language isn't listed, the cURL
example is enough to build your own client against the same endpoint.

## Identifying users

If a visitor starts anonymous and later signs in, don't re-send their historical events under the new
`user_id` — call the identity-merge endpoint instead so existing funnel/cohort data carries over:

```bash
curl https://api.northwind.cloud/v1/atlas/identities/merge \
  -H "Authorization: Bearer $ATLAS_API_KEY" \
  -d '{ "anonymous_id": "anon_x92k1", "user_id": "usr_8f3a1c" }'
```

## Verify it worked

Events are queryable within a second of ingestion. Query them back to confirm:

```bash
curl "https://api.northwind.cloud/v1/atlas/events?user_id=usr_8f3a1c&limit=1" \
  -H "Authorization: Bearer $ATLAS_API_KEY"
```

If you get back an empty `data` array, double-check the API key's environment (staging keys can't read
production events) before assuming ingestion failed.
