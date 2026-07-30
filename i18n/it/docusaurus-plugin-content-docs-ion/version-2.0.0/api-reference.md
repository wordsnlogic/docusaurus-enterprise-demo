---
title: Riferimento API
sidebar_position: 4
---

# Riferimento API

## Autenticazione

Token bearer nell'header `Authorization`. Le chiavi di test e live sono credenziali separate — una
chiave di test non può mai muovere denaro reale, nemmeno per errore.

## Crea una charge

`POST /v1/ion/charges`

**Richiesta**

```json
{
  "amount": 4200,
  "currency": "usd",
  "customer": "cus_h82ndk3",
  "payment_method": "pm_1a2b3c",
  "idempotency_key": "order_9f3e-attempt-1"
}
```

**Risposta** — `200 OK`

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

`status` è `succeeded`, `pending` (alcuni metodi locali si liquidano in modo asincrono) o `failed`.

## Crea un cliente

`POST /v1/ion/customers`

```json
{ "email": "jordan@acme.com", "payment_method": "pm_1a2b3c" }
```

La risposta include l'`id` del cliente (`cus_...`) da riutilizzare per charge e abbonamenti futuri.

## Crea un abbonamento

`POST /v1/ion/subscriptions`

```json
{ "customer": "cus_h82ndk3", "plan": "plan_pro_monthly", "idempotency_key": "sub_acme_pro-2026-07" }
```

```json
{ "id": "sub_7k2p9x", "status": "active", "current_period_end": "2026-08-20T09:14:22Z" }
```

## Emetti un rimborso

`POST /v1/ion/refunds`

```json
{ "charge": "ch_3P8kq2Aa", "amount": 2000 }
```

Ometti `amount` per un rimborso totale. I rimborsi parziali possono essere emessi più volte sulla stessa
charge finché la somma non supera l'importo originale.

## Errori

| Stato HTTP | `code` | Significato |
| --- | --- | --- |
| 400 | `invalid_currency` | Valuta non supportata o importo non valido per la sottounità di quella valuta |
| 402 | `card_declined` | Il metodo di pagamento è stato rifiutato dall'emittente |
| 404 | `no_such_charge` | L'ID referenziato non esiste |
| 409 | `idempotency_key_reused` | Stessa chiave usata con un corpo richiesta **diverso** |
| 429 | `rate_limited` | Rispetta l'header `Retry-After` per i tentativi |

Le risposte `card_declined` includono un `decline_code` (`insufficient_funds`, `expired_card`, ecc.) —
mostralo all'utente finale invece di un messaggio generico quando possibile.

## Limiti di frequenza

100 richieste/secondo per chiave su tutti gli endpoint. La creazione di charge è ulteriormente limitata
a 25/secondo per chiave.

## Supporto

Per domande su Ion, contatta il team di prodotto o visita il forum della community.
