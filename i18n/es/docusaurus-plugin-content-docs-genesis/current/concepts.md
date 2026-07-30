---
title: Conceptos
sidebar_position: 2
---

# Conceptos

## Usuarios, sesiones y tokens

Un **usuario** es una persona; una **sesión** es un inicio de sesión autenticado con un `expires_at`.
Crear una sesión (`POST /v1/genesis/sessions`) devuelve un `token` JWT de corta duración para las
siguientes solicitudes — Genesis no usa claves de API de larga duración para la autenticación de
usuarios finales (ver [Autenticación](./api-reference.md)).

## Roles y permisos

Genesis usa control de acceso basado en roles: un usuario tiene uno o más **roles**, y cada rol otorga
un conjunto de **permisos** (`billing:read`, `users:write`, etc.). Verifica permisos, no nombres de rol,
en tu lógica de autorización — el mapeo de roles a permisos puede cambiar, y el código con
`if (role === "admin")` codificado se rompe en silencio si los roles se reestructuran.

## Conexiones SSO

Una **conexión SSO** configura cómo se autentican los usuarios de un cliente mediante su propio
proveedor de identidad (SAML u OIDC), limitada a un dominio de correo. Una vez que un dominio tiene una
conexión activa, sus usuarios deben autenticarse por SSO — el login con contraseña queda deshabilitado,
no simplemente opcional. Prueba primero con un dominio que no sea de producción.

## MFA y passkeys

Genesis soporta MFA basado en TOTP y passkeys WebAuthn. Una sesión creada sin completar un desafío MFA
requerido se rechaza con `403 mfa_required`, no se degrada silenciosamente a una sesión no verificada.
