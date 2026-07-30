---
title: Primeros pasos
sidebar_position: 3
---

# Primeros pasos

## Requisitos previos

Una cuenta de Northwind Cloud con Ion habilitado y tu clave secreta de prueba (`sk_test_...`). Usa el
modo de prueba durante toda esta guía.

## Crear un charge

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

`amount: 4200` con `currency: "usd"` es $42.00 (ver [Conceptos](./concepts.md)).
`pm_card_test_visa` siempre tiene éxito; usa `pm_card_test_decline` para probar fallos antes de salir a
producción — ver [Errores](./api-reference.md).

## Siempre define una clave de idempotencia

Si tu llamada de red expira después de que Ion la recibió pero antes de recibir la respuesta, reintentar
con la **misma** clave devuelve el resultado original en vez de crear un segundo charge. Úsala ligada a
algo estable en tu sistema, no a un valor aleatorio por intento.

## Verificar que funcionó

```bash
curl https://api.northwind.cloud/v1/ion/charges/ch_3P8kq2Aa \
  -H "Authorization: Bearer $ION_SECRET_KEY"
```

Una respuesta `status: "succeeded"` confirma el éxito en modo de prueba. Referencia completa en
[Referencia de la API](./api-reference.md).
