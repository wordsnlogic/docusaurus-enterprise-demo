---
title: Referencia de la API
sidebar_position: 4
---

# Referencia de la API

## Autenticación

Token bearer en el encabezado `Authorization`. Las claves de prueba y reales son credenciales separadas
— una clave de prueba nunca puede mover dinero real, ni siquiera por accidente.

## Crear un charge

`POST /v1/ion/charges`

**Solicitud**

```json
{
  "amount": 4200,
  "currency": "usd",
  "customer": "cus_h82ndk3",
  "payment_method": "pm_1a2b3c",
  "idempotency_key": "order_9f3e-attempt-1"
}
```

**Respuesta** — `200 OK`

```json
{
  "id": "ch_3P8kq2Aa",
  "amount": 4200,
  "currency": "usd",
  "status": "succeeded",
  "customer": "cus_h82ndk3",
  "created": "2026-07-20T09:14:22Z"
}
```

`status` es `succeeded`, `pending` (algunos métodos locales liquidan de forma asíncrona) o `failed`.

## Crear un cliente

`POST /v1/ion/customers`

```json
{ "email": "jordan@acme.com", "payment_method": "pm_1a2b3c" }
```

La respuesta incluye el `id` del cliente (`cus_...`) para reutilizar en futuros charges y suscripciones.

## Crear una suscripción

`POST /v1/ion/subscriptions`

```json
{ "customer": "cus_h82ndk3", "plan": "plan_pro_monthly", "idempotency_key": "sub_acme_pro-2026-07" }
```

```json
{ "id": "sub_7k2p9x", "status": "active", "current_period_end": "2026-08-20T09:14:22Z" }
```

## Emitir un reembolso

`POST /v1/ion/refunds`

```json
{ "charge": "ch_3P8kq2Aa", "amount": 2000 }
```

Omite `amount` para reembolsar el total. Se pueden emitir varios reembolsos parciales sobre el mismo
charge mientras su suma no exceda el importe original.

## Errores

| Estado HTTP | `code` | Significado |
| --- | --- | --- |
| 400 | `invalid_currency` | Moneda no soportada o importe inválido para su subunidad |
| 402 | `card_declined` | El método de pago fue rechazado por el emisor |
| 404 | `no_such_charge` | El ID referenciado no existe |
| 409 | `idempotency_key_reused` | Misma clave usada con un cuerpo de solicitud **diferente** |
| 429 | `rate_limited` | Reintenta respetando el encabezado `Retry-After` |

Las respuestas `card_declined` incluyen un `decline_code` (`insufficient_funds`, `expired_card`, etc.) —
muéstralo al usuario final en vez de un mensaje genérico cuando sea posible.

## Límites de tasa

100 solicitudes/segundo por clave en todos los endpoints. La creación de charges está además limitada a
25/segundo por clave.

## Soporte

Si tienes preguntas sobre Ion, contacta al equipo de producto o visita el foro de la comunidad.
