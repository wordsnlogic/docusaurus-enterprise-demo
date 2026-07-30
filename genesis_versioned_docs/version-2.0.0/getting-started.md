---
title: Getting started
sidebar_position: 3
---

# Getting started

## Prerequisites

A Northwind Cloud account with Genesis enabled, and a service-to-service API key from **Settings → API
Keys** (used to create users server-side — end users authenticate with sessions, not this key).

## Create a user

**cURL**

```bash
curl https://api.northwind.cloud/v1/genesis/users \
  -H "Authorization: Bearer $GENESIS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "email": "jordan@acme.com", "roles": ["member"] }'
```

**Node.js**

```js
import { Genesis } from "@northwind/genesis";

const genesis = new Genesis({ apiKey: process.env.GENESIS_API_KEY });

const user = await genesis.users.create({
  email: "jordan@acme.com",
  roles: ["member"],
});
```

**Python**

```python
from northwind_genesis import Genesis

genesis = Genesis(api_key=os.environ["GENESIS_API_KEY"])

user = genesis.users.create(email="jordan@acme.com", roles=["member"])
```

## Start a session (login)

Sessions are created with a separate, user-facing flow — typically called from your login form's submit
handler, not with your service API key:

```bash
curl https://api.northwind.cloud/v1/genesis/sessions \
  -H "Content-Type: application/json" \
  -d '{ "email": "jordan@acme.com", "password": "user-entered-password" }'
```

A successful response includes a short-lived `token` — attach it as a bearer token on subsequent requests
made on behalf of that user. If the account has MFA enabled, this call instead returns `403 mfa_required`
and you'll need the follow-up MFA-verification step in [API reference](./api-reference.md).

## Set up SSO for a customer domain

```bash
curl https://api.northwind.cloud/v1/genesis/sso/connections \
  -H "Authorization: Bearer $GENESIS_API_KEY" \
  -d '{ "domain": "acme.com", "protocol": "saml", "metadata_url": "https://acme.okta.com/app/.../sso/saml/metadata" }'
```

**Test this against a non-production domain first.** Once a connection is active for a domain, password
login is disabled for every user on that domain — see
[Concepts](./concepts.md) for why that's not optional.
