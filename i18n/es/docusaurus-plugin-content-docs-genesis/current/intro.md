---
title: Introducción
sidebar_position: 1
---

# Introducción

Genesis es la plataforma de identidad de Northwind Cloud: cuentas de usuario, sesiones, permisos
basados en roles y SSO empresarial (SAML/OIDC), para que no tengas que construir la autenticación desde
cero.

## Para quién es esto

Si construyes un producto B2C, usarás principalmente los endpoints de sesión y passkey/magic-link. Si
vendes a empresas, también necesitarás [conexiones SSO](./concepts.md) — reserva tiempo
extra de integración, ya que el proveedor de identidad de cada cliente (Okta, Azure AD, Google
Workspace) se comporta ligeramente distinto incluso bajo la misma especificación SAML/OIDC.

## Características clave

- SSO SAML y OIDC, delimitado por dominio de correo del cliente
- Login sin contraseña con magic-link y passkeys WebAuthn
- Control de acceso granular basado en permisos, no en nombres de rol

## Antes de empezar

[Conceptos](./concepts.md) cubre el modelo de sesión/token y el comportamiento de aplicación de dominio
SSO que suele confundir en las primeras integraciones — léelo antes de [Primeros
pasos](./getting-started.md).
