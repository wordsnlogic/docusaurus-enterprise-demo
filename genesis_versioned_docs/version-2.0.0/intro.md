---
title: Introduction
sidebar_position: 1
---

# Introduction

Genesis is Northwind Cloud's identity platform: user accounts, sessions, role-based permissions, and
enterprise SSO (SAML/OIDC), so you're not building auth from scratch or shipping your own password
hashing.

## Who this is for

If you're building a B2C product, you'll mostly use Genesis's session and passkey/magic-link endpoints. If
you're selling to enterprises, you'll also need [SSO connections](./concepts.md) — budget
extra integration time for that specifically, since every customer's identity provider (Okta, Azure AD,
Google Workspace) behaves slightly differently even against the same SAML/OIDC spec.

## Key features

- SAML and OIDC SSO, scoped per customer email domain
- Passwordless magic-link and WebAuthn passkey login
- Fine-grained role-based access control — authorize on permissions, not role names

## Before you start

[Concepts](./concepts.md) covers the session/token model and the SSO domain-enforcement behavior that
trips up most first-time integrations — read it before [Getting started](./getting-started.md).
