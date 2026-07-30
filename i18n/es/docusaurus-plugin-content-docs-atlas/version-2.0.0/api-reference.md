---
title: Referencia de la API
sidebar_position: 4
---

# Referencia de la API

## Autenticación

Se requiere un token bearer en el encabezado `Authorization`. Sin clave válida: `401`. Clave válida sin
permisos: `403`.

## Ingerir eventos

`POST /v1/atlas/events` — hasta 1.000 eventos por solicitud.

**Solicitud**

```json
{
  "events": [
    {
      "name": "checkout_completed",
      "user_id": "usr_8f3a1c",
      "timestamp": "2026-07-15T14:32:00Z",
      "properties": { "order_id": "ord_29xk3", "revenue": 84.50, "currency": "USD", "items": 3 }
    }
  ]
}
```

**Respuesta** — `202 Accepted`

```json
{ "accepted": 1, "rejected": 0, "batch_id": "batch_7f2e9a1c" }
```

Si algunos eventos del lote fallan la validación, los válidos se aceptan y el resto se reporta
individualmente:

```json
{
  "accepted": 2,
  "rejected": 1,
  "batch_id": "batch_7f2e9a1c",
  "errors": [{ "index": 2, "code": "invalid_timestamp", "message": "timestamp is more than 24h in the past" }]
}
```

## Consultar eventos crudos

`GET /v1/atlas/events`

| Parámetro | Tipo | Descripción |
| --- | --- | --- |
| `user_id` | string | Filtrar por una identidad |
| `name` | string | Filtrar por un nombre de evento |
| `since` / `until` | ISO 8601 | Rango de tiempo (por defecto, últimas 24h) |
| `limit` | integer | Máx. 100, por defecto 20 |
| `cursor` | string | Cursor de paginación de `next_cursor` |

**Respuesta** — `200 OK`

```json
{
  "data": [
    {
      "id": "evt_4k2p91xz",
      "name": "checkout_completed",
      "user_id": "usr_8f3a1c",
      "timestamp": "2026-07-15T14:32:00Z",
      "properties": { "revenue": 84.50, "currency": "USD", "items": 3 }
    }
  ],
  "next_cursor": "eyJvZmZzZXQiOjIwfQ==",
  "has_more": true
}
```

## Funnels

`POST /v1/atlas/funnels` crea una definición; `GET /v1/atlas/funnels/:id` calcula y devuelve los
resultados actuales.

```json
{ "name": "Signup to purchase", "steps": ["signup_completed", "product_viewed", "checkout_completed"], "window": "7d" }
```

```json
{
  "id": "fnl_9x2k3p",
  "name": "Signup to purchase",
  "steps": [
    { "name": "signup_completed", "count": 4200, "conversion_from_previous": 1.0 },
    { "name": "product_viewed", "count": 3110, "conversion_from_previous": 0.74 },
    { "name": "checkout_completed", "count": 892, "conversion_from_previous": 0.29 }
  ]
}
```

## Cohorts

`GET /v1/atlas/cohorts/:id` — se recalcula en cada llamada.

```json
{ "id": "cht_3f8a2c", "name": "Active purchasers (30d)", "size": 1847, "last_computed": "2026-07-15T14:32:00Z" }
```

## Errores

| Estado HTTP | `code` | Significado |
| --- | --- | --- |
| 400 | `invalid_event_schema` | Falta un campo requerido o tiene un tipo incorrecto |
| 400 | `invalid_timestamp` | Timestamp fuera de la ventana de 24h |
| 401 | `invalid_api_key` | Clave ausente, mal formada o revocada |
| 403 | `insufficient_scope` | Clave válida pero sin autorización para este proyecto |
| 413 | `batch_too_large` | Más de 1.000 eventos en una solicitud |
| 429 | `rate_limited` | Reintente respetando el encabezado `Retry-After` |

## Límites de tasa

600 solicitudes/minuto por clave para `/events` (ingestión), 60/minuto para endpoints de consulta.
Límites por clave, no por proyecto.

## Soporte

Si tienes preguntas sobre Atlas, contacta al equipo de producto o visita el foro de la comunidad.
