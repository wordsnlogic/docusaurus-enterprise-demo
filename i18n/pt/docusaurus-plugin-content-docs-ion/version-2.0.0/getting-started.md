---
title: Primeiros passos
sidebar_position: 3
---

# Primeiros passos

## Pré-requisitos

Uma conta Northwind Cloud com Ion habilitado e sua chave secreta de teste (`sk_test_...`). Use o modo de
teste durante todo este guia.

## Criando uma charge

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

`amount: 4200` com `currency: "usd"` é $42,00 (ver [Conceitos](./concepts.md)).
`pm_card_test_visa` sempre tem sucesso; use `pm_card_test_decline` para testar falhas antes de ir para
produção — ver [Erros](./api-reference.md).

## Sempre defina uma chave de idempotência

Se sua chamada de rede expirar depois que o Ion a recebeu mas antes de você receber a resposta, tentar
novamente com a **mesma** chave retorna o resultado original em vez de criar uma segunda charge. Ligue-a
a algo estável no seu sistema (um ID de pedido), não a um valor aleatório por tentativa.

## Verificando se funcionou

```bash
curl https://api.northwind.cloud/v1/ion/charges/ch_3P8kq2Aa \
  -H "Authorization: Bearer $ION_SECRET_KEY"
```

Uma resposta `status: "succeeded"` confirma sucesso no modo de teste. Referência completa em
[Referência da API](./api-reference.md).
