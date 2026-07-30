---
title: Erste Schritte
sidebar_position: 3
---

# Erste Schritte

## Voraussetzungen

Ein Northwind-Cloud-Konto mit aktiviertem Ion und Ihr **Test**-Secret-Key (`sk_test_...`) aus
**Einstellungen → API-Schlüssel**. Verwenden Sie für diese Anleitung durchgehend den Testmodus.

## Eine Charge erstellen

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

`amount: 4200` bei `currency: "usd"` entspricht 42,00 $ — siehe [Konzepte](./concepts.md)
dazu, warum Beträge immer Ganzzahlen sind. `pm_card_test_visa` ist eine eingebaute Testzahlungsmethode,
die immer erfolgreich ist; Ion bietet außerdem `pm_card_test_decline` zum Testen von Fehlerfällen, was Sie
vor dem Livegang tun sollten — siehe [Fehler](./api-reference.md).

## Immer einen Idempotenzschlüssel setzen

Der `idempotency_key` oben ist wichtiger, als er aussieht: Wenn Ihr Netzwerkaufruf timeoutet, nachdem Ion
ihn erhalten hat, aber bevor Sie die Antwort bekommen haben, liefert eine Wiederholung mit **demselben**
Schlüssel das ursprüngliche Ergebnis zurück, statt eine zweite Charge zu erzeugen. Binden Sie ihn an etwas
Stabiles in Ihrem eigenen System (eine Bestellnummer), nicht an einen zufälligen, pro HTTP-Versuch
generierten Wert — ein zufälliger Schlüssel würde den ganzen Sinn zunichtemachen.

## Überprüfen, ob es funktioniert hat

```bash
curl https://api.northwind.cloud/v1/ion/charges/ch_3P8kq2Aa \
  -H "Authorization: Bearer $ION_SECRET_KEY"
```

Eine Antwort mit `status: "succeeded"` bestätigt, dass die Charge im Testmodus erfolgreich war. Die
vollständige Feldreferenz finden Sie in der [API-Referenz](./api-reference.md).
