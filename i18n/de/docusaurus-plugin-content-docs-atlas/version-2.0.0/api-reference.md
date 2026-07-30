---
title: API-Referenz
sidebar_position: 4
---

# API-Referenz

## Authentifizierung

Alle Anfragen benötigen einen Bearer-Token im `Authorization`-Header: `Authorization: Bearer
$ATLAS_API_KEY`. Anfragen ohne gültigen Schlüssel erhalten `401`; Anfragen mit einem gültigen, aber nicht
berechtigten Schlüssel erhalten `403`.

## Events aufnehmen

`POST /v1/atlas/events`

Akzeptiert bis zu 1.000 Events pro Anfrage. Größere Batches sollten clientseitig aufgeteilt werden — die
SDKs tun dies automatisch.

**Anfrage**

```json
{
  "events": [
    {
      "name": "checkout_completed",
      "user_id": "usr_8f3a1c",
      "timestamp": "2026-07-15T14:32:00Z",
      "properties": {
        "order_id": "ord_29xk3",
        "revenue": 84.50,
        "currency": "USD",
        "items": 3
      }
    }
  ]
}
```

**Antwort** — `202 Accepted`

```json
{
  "accepted": 1,
  "rejected": 0,
  "batch_id": "batch_7f2e9a1c"
}
```

Wenn einzelne Events in einem Batch die Validierung nicht bestehen, akzeptiert Atlas die gültigen und
meldet die übrigen einzeln, statt den gesamten Batch abzulehnen:

```json
{
  "accepted": 2,
  "rejected": 1,
  "batch_id": "batch_7f2e9a1c",
  "errors": [
    { "index": 2, "code": "invalid_timestamp", "message": "timestamp is more than 24h in the past" }
  ]
}
```

## Rohdaten abfragen

`GET /v1/atlas/events`

| Parameter | Typ | Beschreibung |
| --- | --- | --- |
| `user_id` | string | Auf eine einzelne Identität filtern |
| `name` | string | Auf einen einzelnen Event-Namen filtern |
| `since` / `until` | ISO 8601 | Zeitraum (Standard: die letzten 24 Stunden) |
| `limit` | integer | Maximal 100 pro Seite, Standard 20 |
| `cursor` | string | Opaker Pagination-Cursor aus `next_cursor` der vorherigen Antwort |

**Antwort** — `200 OK`

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

`POST /v1/atlas/funnels` erstellt eine Funnel-Definition; `GET /v1/atlas/funnels/:id` berechnet und
liefert die aktuellen Ergebnisse dazu.

**Erstellen — Anfrage**

```json
{
  "name": "Signup to purchase",
  "steps": ["signup_completed", "product_viewed", "checkout_completed"],
  "window": "7d"
}
```

**Abfragen — Antwort**

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

`GET /v1/atlas/cohorts/:id` — die Mitgliedschaft wird bei jedem Aufruf neu berechnet, nicht zum
Erstellungszeitpunkt zwischengespeichert.

```json
{
  "id": "cht_3f8a2c",
  "name": "Active purchasers (30d)",
  "size": 1847,
  "last_computed": "2026-07-15T14:32:00Z"
}
```

## Fehler

| HTTP-Status | `code` | Bedeutung |
| --- | --- | --- |
| 400 | `invalid_event_schema` | Ein Pflichtfeld fehlt oder hat den falschen Typ |
| 400 | `invalid_timestamp` | Timestamp liegt mehr als 24h in der Vergangenheit oder in der Zukunft |
| 401 | `invalid_api_key` | Schlüssel fehlt, ist fehlerhaft oder wurde widerrufen |
| 403 | `insufficient_scope` | Schlüssel ist gültig, aber für dieses Projekt nicht autorisiert |
| 413 | `batch_too_large` | Mehr als 1.000 Events in einer Anfrage |
| 429 | `rate_limited` | Siehe Ratenbegrenzungen unten; mit dem `Retry-After`-Header zurückfahren |

## Ratenbegrenzungen

600 Anfragen/Minute pro API-Schlüssel für `/events` (Ingestion), 60 Anfragen/Minute für
Abfrage-Endpunkte (`/events` GET, `/funnels`, `/cohorts`). Limits gelten pro Schlüssel, nicht pro Projekt
— verteilen Sie Ingestion mit hohem Volumen auf mehrere Schlüssel, statt zuerst eine Erhöhung des Limits
anzufragen.

## Support

Bei Fragen zu Atlas wenden Sie sich an das Produktteam oder besuchen Sie das Community-Forum.
