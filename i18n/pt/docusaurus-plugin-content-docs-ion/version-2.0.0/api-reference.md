---
title: Referência da API
sidebar_position: 4
---

# Referência da API

## Autenticação

Token bearer no header `Authorization`. Chaves de teste e reais são credenciais separadas — uma chave de
teste nunca pode movimentar dinheiro real, mesmo por acidente.

## Criando uma charge

`POST /v1/ion/charges`

**Requisição**

```json
{
  "amount": 4200,
  "currency": "usd",
  "customer": "cus_h82ndk3",
  "payment_method": "pm_1a2b3c",
  "idempotency_key": "order_9f3e-attempt-1"
}
```

**Resposta** — `200 OK`

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

`status` é `succeeded`, `pending` (alguns métodos locais liquidam de forma assíncrona) ou `failed`.

## Criando um cliente

`POST /v1/ion/customers`

```json
{ "email": "jordan@acme.com", "payment_method": "pm_1a2b3c" }
```

A resposta inclui o `id` do cliente (`cus_...`) para reutilizar em futuras charges e assinaturas.

## Criando uma assinatura

`POST /v1/ion/subscriptions`

```json
{ "customer": "cus_h82ndk3", "plan": "plan_pro_monthly", "idempotency_key": "sub_acme_pro-2026-07" }
```

```json
{ "id": "sub_7k2p9x", "status": "active", "current_period_end": "2026-08-20T09:14:22Z" }
```

## Emitindo um reembolso

`POST /v1/ion/refunds`

```json
{ "charge": "ch_3P8kq2Aa", "amount": 2000 }
```

Omita `amount` para reembolso total. Reembolsos parciais podem ser emitidos várias vezes contra a mesma
charge desde que a soma não exceda o valor original.

## Erros

| Status HTTP | `code` | Significado |
| --- | --- | --- |
| 400 | `invalid_currency` | Moeda não suportada ou valor inválido para a subunidade da moeda |
| 402 | `card_declined` | O método de pagamento foi recusado pelo emissor |
| 404 | `no_such_charge` | O ID referenciado não existe |
| 409 | `idempotency_key_reused` | Mesma chave usada com um corpo de requisição **diferente** |
| 429 | `rate_limited` | Respeite o header `Retry-After` ao tentar novamente |

Respostas `card_declined` incluem um `decline_code` (`insufficient_funds`, `expired_card`, etc.) —
exiba-o ao usuário final em vez de uma mensagem genérica sempre que possível.

## Limites de taxa

100 requisições/segundo por chave em todos os endpoints. Criação de charges é limitada adicionalmente a
25/segundo por chave.

## Suporte

Para dúvidas sobre o Ion, entre em contato com a equipe de produto ou visite o fórum da comunidade.
