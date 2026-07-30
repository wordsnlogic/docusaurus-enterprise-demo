---
title: Getting started
sidebar_position: 3
---

# Getting started

## Prerequisites

A Northwind Cloud account with Ion enabled, and your **test-mode** secret key (`sk_test_...`) from
**Settings → API Keys**. Use test mode for everything in this guide.

## Create a charge

**cURL**

```bash
curl https://api.northwind.cloud/v1/ion/charges \
  -H "Authorization: Bearer $ION_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 4200,
    "currency": "usd",
    "payment_method": "pm_card_test_visa",
    "idempotency_key": "order_9f3e-attempt-1"
  }'
```

**Node.js**

```js
import { Ion } from "@northwind/ion";

const ion = new Ion({ apiKey: process.env.ION_SECRET_KEY });

const charge = await ion.charges.create({
  amount: 4200,
  currency: "usd",
  paymentMethod: "pm_card_test_visa",
  idempotencyKey: "order_9f3e-attempt-1",
});
```

**Python**

```python
from northwind_ion import Ion

ion = Ion(api_key=os.environ["ION_SECRET_KEY"])

charge = ion.charges.create(
    amount=4200,
    currency="usd",
    payment_method="pm_card_test_visa",
    idempotency_key="order_9f3e-attempt-1",
)
```

`amount: 4200` for `currency: "usd"` is $42.00 — see [Concepts](./concepts.md) for why
amounts are always integers. `pm_card_test_visa` is a built-in test payment method that always succeeds;
Ion also provides `pm_card_test_decline` for testing failure handling, which you should do before going
live — see [Errors](./api-reference.md).

## Always set an idempotency key

The `idempotency_key` above matters more than it looks: if your network call times out after Ion received
it but before you got the response, retrying with the **same** key returns the original charge instead of
creating a second one. Tie it to something stable in your own system (an order ID), not a random value
generated per HTTP attempt — a random key defeats the whole point.

## Verify it worked

```bash
curl https://api.northwind.cloud/v1/ion/charges/ch_3P8kq2Aa \
  -H "Authorization: Bearer $ION_SECRET_KEY"
```

A `status: "succeeded"` response confirms the charge went through in test mode. Full field reference is in
[API reference](./api-reference.md).
