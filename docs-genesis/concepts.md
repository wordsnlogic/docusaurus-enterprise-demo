---
title: Concepts
sidebar_position: 2
---

# Concepts

## Users, sessions, and tokens

A **user** is a person; a **session** is one authenticated login for that person, with an `expires_at`.
Creating a session (`POST /v1/genesis/sessions`) returns a short-lived JWT `token` you attach to
subsequent requests — Genesis doesn't use long-lived API keys for end-user auth the way it does for
service-to-service calls (see [Authentication](./api-reference.md)).

## Roles and permissions

Genesis uses role-based access control: a user has one or more **roles**, and each role grants a set of
**permissions** (`billing:read`, `users:write`, etc.). Check permissions, not role names, in your
authorization logic — role-to-permission mappings can change over time, and code that hardcodes `if (role
=== "admin")` breaks silently when roles are restructured.

## SSO connections

An **SSO connection** configures how one customer's users authenticate via their own identity provider
(SAML or OIDC), scoped to an email domain. Once a domain has an active connection, users on that domain
are *required* to authenticate via SSO — password login for that domain is disabled, not merely optional.
This is a common gotcha during SSO rollout: test with a non-production domain first.

## MFA and passkeys

Genesis supports TOTP-based MFA and WebAuthn passkeys. A session created without completing a required MFA
challenge is rejected with `403 mfa_required`, not silently downgraded to an unverified session — there is
no partial-auth state exposed to your application.
