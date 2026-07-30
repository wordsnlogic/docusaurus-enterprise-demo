---
title: Introdução
sidebar_position: 1
---

# Introdução

O Genesis é a plataforma de identidade da Northwind Cloud: contas de usuário, sessões, permissões
baseadas em papéis e SSO empresarial (SAML/OIDC), para que você não precise construir autenticação do
zero.

## Para quem é isto

Se você constrói um produto B2C, vai usar principalmente os endpoints de sessão e passkey/magic-link. Se
vende para empresas, também vai precisar de [conexões SSO](./concepts.md) — reserve tempo
extra de integração, já que o provedor de identidade de cada cliente (Okta, Azure AD, Google Workspace)
se comporta de forma levemente diferente mesmo sob a mesma especificação SAML/OIDC.

## Principais recursos

- SSO SAML e OIDC, delimitado por domínio de e-mail do cliente
- Login sem senha via magic-link e passkeys WebAuthn
- Controle de acesso granular baseado em permissões, não em nomes de papéis

## Antes de começar

[Conceitos](./concepts.md) cobre o modelo de sessão/token e o comportamento de aplicação de domínio SSO
que costuma pegar a maioria das primeiras integrações — leia antes de [Primeiros
passos](./getting-started.md).
