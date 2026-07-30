---
title: API-Referenz
sidebar_position: 4
---

# API-Referenz

## Authentifizierung

Bearer-Token im `Authorization`-Header: `Authorization: Bearer $ION_SECRET_KEY`. Test-Schlüssel
(`sk_test_...`) und Live-Schlüssel (`sk_live_...`) sind getrennte Credentials — ein Test-Schlüssel kann
niemals echtes Geld bewegen, auch nicht versehentlich.

## Eine Charge erstellen

`POST /v1/ion/charges`

**Anfrage**

```json
{
  "amount": 4200,
  "currency": "usd",
  "customer": "cus_h82ndk3",
  "payment_method": "pm_1a2b3c",
  "idempotency_key": "order_9f3e-attempt-1"
}
```

**Antwort** — `200 OK`

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

`status` ist entweder `succeeded`, `pending` (manche lokalen Zahlungsmethoden settlen asynchron) oder
`failed`.

## Einen Kunden erstellen

`POST /v1/ion/customers`

```json
{
  "email": "jordan@acme.com",
  "payment_method": "pm_1a2b3c"
}
```

Die Antwort enthält die Kunden-`id` (`cus_...`) zur Wiederverwendung bei künftigen Charges und
Abonnements.

## Ein Abonnement erstellen

`POST /v1/ion/subscriptions`

```json
{
  "customer": "cus_h82ndk3",
  "plan": "plan_pro_monthly",
  "idempotency_key": "sub_acme_pro-2026-07"
}
```

**Antwort**

```json
{
  "id": "sub_7k2p9x",
  "status": "active",
  "current_period_end": "2026-08-20T09:14:22Z"
}
```

## Eine Rückerstattung ausstellen

`POST /v1/ion/refunds`

```json
{
  "charge": "ch_3P8kq2Aa",
  "amount": 2000
}
```

`amount` weglassen, um die Charge vollständig zurückzuerstatten. Teilrückerstattungen können mehrfach
gegen dieselbe Charge ausgestellt werden, solange ihre Summe den ursprünglichen Betrag nicht übersteigt.

## Fehler

| HTTP-Status | `code` | Bedeutung |
| --- | --- | --- |
| 400 | `invalid_currency` | Währung nicht unterstützt oder Betrag für die Untereinheit dieser Währung ungültig |
| 402 | `card_declined` | Die Zahlungsmethode wurde vom Aussteller abgelehnt |
| 404 | `no_such_charge` | Die referenzierte `charge`-/`customer`-/`payment_method`-ID existiert nicht |
| 409 | `idempotency_key_reused` | Derselbe Schlüssel mit einem **anderen** Anfragekörper als ursprünglich verwendet |
| 429 | `rate_limited` | Mit dem `Retry-After`-Header zurückfahren |

`card_declined`-Antworten enthalten einen `decline_code` (`insufficient_funds`, `expired_card`,
`generic_decline`, …) — geben Sie diesen wo möglich an den Endnutzer weiter statt einer generischen
Fehlermeldung; das reduziert Retry-and-fail-Schleifen beim Checkout spürbar.

## Ratenbegrenzungen

100 Anfragen/Sekunde pro API-Schlüssel über alle Endpunkte. Die Charge-Erstellung ist zusätzlich auf
25/Sekunde pro Schlüssel begrenzt, um den Schaden einer außer Kontrolle geratenen Retry-Schleife zu
begrenzen.

## Support

Bei Fragen zu Ion wenden Sie sich an das Produktteam oder besuchen Sie das Community-Forum.
