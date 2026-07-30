---
title: API reference
sidebar_position: 4
---

# API reference

## Authentication

Two different credential types, don't mix them up:

- **Service API key** (`Authorization: Bearer $GENESIS_API_KEY`) — for server-to-server calls like
  creating users or configuring SSO. Never expose this in client-side code.
- **Session token** — short-lived, returned by `POST /v1/genesis/sessions`, used to act on behalf of one
  logged-in user.

## Create a user

`POST /v1/genesis/users`

```json
{
  "email": "jordan@acme.com",
  "roles": ["member"]
}
```

**Response** — `201 Created`

```json
{
  "id": "usr_3f8a2c",
  "email": "jordan@acme.com",
  "roles": ["member"],
  "created": "2026-07-20T09:14:22Z"
}
```

## Start a session

`POST /v1/genesis/sessions`

```json
{
  "email": "jordan@acme.com",
  "password": "user-entered-password"
}
```

**Response** — `200 OK`

```json
{
  "session_id": "sess_6k2p9x",
  "user_id": "usr_3f8a2c",
  "expires_at": "2026-07-21T09:14:22Z",
  "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

If MFA is enabled on the account, this returns `403 mfa_required` instead — resubmit to
`/v1/genesis/sessions/mfa` with the same credentials plus `mfa_code` to complete login.

## Configure SSO

`POST /v1/genesis/sso/connections`

```json
{
  "domain": "acme.com",
  "protocol": "saml",
  "metadata_url": "https://acme.okta.com/app/exkabc123/sso/saml/metadata"
}
```

`protocol` is `"saml"` or `"oidc"`. Once created and active, password login is disabled for every user on
that domain.

## Errors

| HTTP status | `code` | Meaning |
| --- | --- | --- |
| 401 | `invalid_credentials` | Email/password didn't match |
| 403 | `mfa_required` | Credentials were correct; MFA challenge must be completed to finish login |
| 403 | `sso_required` | This email's domain has an active SSO connection; password login is disabled |
| 429 | `too_many_attempts` | Account temporarily locked after 5 failed attempts within 15 minutes |

`too_many_attempts` lockouts clear automatically after 15 minutes — there is no manual-unlock endpoint by
design, to avoid creating an account-takeover vector via support-initiated unlocks.

## Rate limits

20 login attempts/minute per IP address, independent of the per-account lockout above — this limits
credential-stuffing attempts across many accounts from one source.

## Support

For questions about Genesis, contact the product team or visit the community forum.
