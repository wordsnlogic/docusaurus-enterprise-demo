---
title: Avvio rapido
sidebar_position: 3
---

# Avvio rapido

## Prerequisiti

Un account Northwind Cloud con Ion abilitato e la tua chiave segreta di test (`sk_test_...`). Usa la
modalità test per tutta questa guida.

## Crea una charge

**cURL**

```bash
curl https://api.northwind.cloud/v1/ion/charges \
  -H "Authorization: Bearer $ION_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 4200,
    "currency": "usd",
    "payment_method": "pm_card_test_visa",
    "idempotency_key": "order_9f3e-attempt-1"
  }'
```

**Node.js**

```js
import { Ion } from "@northwind/ion";

const ion = new Ion({ apiKey: process.env.ION_SECRET_KEY });

const charge = await ion.charges.create({
  amount: 4200,
  currency: "usd",
  paymentMethod: "pm_card_test_visa",
  idempotencyKey: "order_9f3e-attempt-1",
});
```

**Python**

```python
from northwind_ion import Ion

ion = Ion(api_key=os.environ["ION_SECRET_KEY"])

charge = ion.charges.create(
    amount=4200,
    currency="usd",
    payment_method="pm_card_test_visa",
    idempotency_key="order_9f3e-attempt-1",
)
```

`amount: 4200` con `currency: "usd"` è $42,00 (vedi [Concetti](./concepts.md)).
`pm_card_test_visa` ha sempre successo; usa `pm_card_test_decline` per testare i fallimenti prima di
andare in produzione — vedi [Errori](./api-reference.md).

## Imposta sempre una chiave di idempotenza

Se la tua chiamata di rete va in timeout dopo che Ion l'ha ricevuta ma prima che tu riceva la risposta,
riprovare con la **stessa** chiave restituisce il risultato originale invece di creare una seconda
charge. Legala a qualcosa di stabile nel tuo sistema (un ID ordine), non a un valore casuale per ogni
tentativo.

## Verifica che abbia funzionato

```bash
curl https://api.northwind.cloud/v1/ion/charges/ch_3P8kq2Aa \
  -H "Authorization: Bearer $ION_SECRET_KEY"
```

Una risposta `status: "succeeded"` conferma il successo in modalità test. Riferimento completo in
[Riferimento API](./api-reference.md).
