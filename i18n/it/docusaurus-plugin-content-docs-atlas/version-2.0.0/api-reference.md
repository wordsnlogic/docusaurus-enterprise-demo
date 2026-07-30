---
title: Riferimento API
sidebar_position: 4
---

# Riferimento API

## Autenticazione

Token bearer nell'header `Authorization`. Senza chiave valida: `401`. Chiave valida ma senza permessi:
`403`.

## Ingestione eventi

`POST /v1/atlas/events` — fino a 1.000 eventi per richiesta.

**Richiesta**

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

**Risposta** — `202 Accepted`

```json
{ "accepted": 1, "rejected": 0, "batch_id": "batch_7f2e9a1c" }
```

Se alcuni eventi del batch falliscono la validazione, quelli validi vengono accettati e il resto
segnalato individualmente:

```json
{
  "accepted": 2,
  "rejected": 1,
  "batch_id": "batch_7f2e9a1c",
  "errors": [{ "index": 2, "code": "invalid_timestamp", "message": "timestamp is more than 24h in the past" }]
}
```

## Interrogare eventi grezzi

`GET /v1/atlas/events`

| Parametro | Tipo | Descrizione |
| --- | --- | --- |
| `user_id` | string | Filtra su una singola identità |
| `name` | string | Filtra su un singolo nome evento |
| `since` / `until` | ISO 8601 | Intervallo temporale (default: ultime 24h) |
| `limit` | integer | Max 100, default 20 |
| `cursor` | string | Cursore di paginazione da `next_cursor` |

**Risposta** — `200 OK`

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

## Funnel

`POST /v1/atlas/funnels` crea una definizione; `GET /v1/atlas/funnels/:id` calcola e restituisce i
risultati attuali.

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

## Cohort

`GET /v1/atlas/cohorts/:id` — ricalcolata a ogni chiamata.

```json
{ "id": "cht_3f8a2c", "name": "Active purchasers (30d)", "size": 1847, "last_computed": "2026-07-15T14:32:00Z" }
```

## Errori

| Stato HTTP | `code` | Significato |
| --- | --- | --- |
| 400 | `invalid_event_schema` | Campo obbligatorio mancante o tipo errato |
| 400 | `invalid_timestamp` | Timestamp fuori dalla finestra di 24h |
| 401 | `invalid_api_key` | Chiave mancante, malformata o revocata |
| 403 | `insufficient_scope` | Chiave valida ma non autorizzata per questo progetto |
| 413 | `batch_too_large` | Più di 1.000 eventi in una richiesta |
| 429 | `rate_limited` | Rispetta l'header `Retry-After` per i tentativi |

## Limiti di frequenza

600 richieste/minuto per chiave per `/events` (ingestione), 60/minuto per gli endpoint di query. Limiti
per chiave, non per progetto.

## Supporto

Per domande su Atlas, contatta il team di prodotto o visita il forum della community.
