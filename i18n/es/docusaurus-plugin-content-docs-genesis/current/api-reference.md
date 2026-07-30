---
title: Referencia de la API
sidebar_position: 4
---

# Referencia de la API

## Autenticación

Dos tipos de credenciales distintas, no las mezcles:

- **Clave de API de servicio** — para llamadas de servidor a servidor como crear usuarios o configurar
  SSO. Nunca la expongas en código del lado del cliente.
- **Token de sesión** — de corta duración, devuelto por `POST /v1/genesis/sessions`, para actuar en
  nombre de un usuario con sesión iniciada.

## Crear un usuario

`POST /v1/genesis/users`

```json
{ "email": "jordan@acme.com", "roles": ["member"] }
```

**Respuesta** — `201 Created`

```json
{ "id": "usr_3f8a2c", "email": "jordan@acme.com", "roles": ["member"], "created": "2026-07-20T09:14:22Z" }
```

## Iniciar una sesión

`POST /v1/genesis/sessions`

```json
{ "email": "jordan@acme.com", "password": "user-entered-password" }
```

**Respuesta** — `200 OK`

```json
{
  "session_id": "sess_6k2p9x",
  "user_id": "usr_3f8a2c",
  "expires_at": "2026-07-21T09:14:22Z",
  "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Si la cuenta tiene MFA activado, esta llamada devuelve `403 mfa_required` — reenvía a
`/v1/genesis/sessions/mfa` con las mismas credenciales más `mfa_code` para completar el login.

## Configurar SSO

`POST /v1/genesis/sso/connections`

```json
{ "domain": "acme.com", "protocol": "saml", "metadata_url": "https://acme.okta.com/app/exkabc123/sso/saml/metadata" }
```

`protocol` es `"saml"` u `"oidc"`. Una vez creada y activa, el login con contraseña queda deshabilitado
para todos los usuarios de ese dominio.

## Errores

| Estado HTTP | `code` | Significado |
| --- | --- | --- |
| 401 | `invalid_credentials` | El correo/contraseña no coinciden |
| 403 | `mfa_required` | Las credenciales eran correctas; falta completar el desafío MFA |
| 403 | `sso_required` | El dominio de este correo tiene una conexión SSO activa; login con contraseña deshabilitado |
| 429 | `too_many_attempts` | Cuenta bloqueada temporalmente tras 5 intentos fallidos en 15 minutos |

Los bloqueos por `too_many_attempts` se liberan automáticamente tras 15 minutos — no existe un endpoint
de desbloqueo manual, por diseño, para evitar un vector de toma de cuenta vía soporte.

## Límites de tasa

20 intentos de login/minuto por dirección IP, independiente del bloqueo por cuenta descrito arriba.

## Soporte

Si tienes preguntas sobre Genesis, contacta al equipo de producto o visita el foro de la comunidad.
