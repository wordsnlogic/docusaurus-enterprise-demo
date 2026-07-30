---
title: Référence API
sidebar_position: 4
---

# Référence API

## Authentification

Bearer token dans l'en-tête `Authorization`. Sans clé valide : `401`. Clé valide mais non autorisée :
`403`.

## Ingérer des events

`POST /v1/atlas/events` — jusqu'à 1 000 events par requête.

**Requête**

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

**Réponse** — `202 Accepted`

```json
{ "accepted": 1, "rejected": 0, "batch_id": "batch_7f2e9a1c" }
```

Les events invalides d'un batch sont rejetés individuellement, le reste est accepté :

```json
{
  "accepted": 2,
  "rejected": 1,
  "batch_id": "batch_7f2e9a1c",
  "errors": [{ "index": 2, "code": "invalid_timestamp", "message": "timestamp is more than 24h in the past" }]
}
```

## Interroger les events bruts

`GET /v1/atlas/events`

| Paramètre | Type | Description |
| --- | --- | --- |
| `user_id` | string | Filtrer sur une identité |
| `name` | string | Filtrer sur un nom d'event |
| `since` / `until` | ISO 8601 | Période (24h par défaut) |
| `limit` | integer | 100 max, 20 par défaut |
| `cursor` | string | Curseur de pagination (`next_cursor`) |

**Réponse** — `200 OK`

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

`POST /v1/atlas/funnels` crée une définition ; `GET /v1/atlas/funnels/:id` calcule les résultats actuels.

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

`GET /v1/atlas/cohorts/:id` — recalculée à chaque appel.

```json
{ "id": "cht_3f8a2c", "name": "Active purchasers (30d)", "size": 1847, "last_computed": "2026-07-15T14:32:00Z" }
```

## Erreurs

| Statut HTTP | `code` | Signification |
| --- | --- | --- |
| 400 | `invalid_event_schema` | Champ requis manquant ou type incorrect |
| 400 | `invalid_timestamp` | Timestamp hors de la fenêtre de 24h |
| 401 | `invalid_api_key` | Clé absente, malformée ou révoquée |
| 403 | `insufficient_scope` | Clé valide mais non autorisée pour ce projet |
| 413 | `batch_too_large` | Plus de 1 000 events dans une requête |
| 429 | `rate_limited` | Respectez l'en-tête `Retry-After` |

## Limites de débit

600 req/min par clé pour `/events` (ingestion), 60 req/min pour les endpoints de lecture. Limites par
clé, pas par projet.

## Assistance

Pour toute question sur Atlas, contactez l'équipe produit ou le forum communautaire.
