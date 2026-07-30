---
title: Referência da API
sidebar_position: 4
---

# Referência da API

## Autenticação

Token bearer no header `Authorization`. Sem chave válida: `401`. Chave válida mas sem permissão: `403`.

## Ingerindo eventos

`POST /v1/atlas/events` — até 1.000 eventos por requisição.

**Requisição**

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

**Resposta** — `202 Accepted`

```json
{ "accepted": 1, "rejected": 0, "batch_id": "batch_7f2e9a1c" }
```

Se alguns eventos do lote falharem na validação, os válidos são aceitos e o restante é reportado
individualmente:

```json
{
  "accepted": 2,
  "rejected": 1,
  "batch_id": "batch_7f2e9a1c",
  "errors": [{ "index": 2, "code": "invalid_timestamp", "message": "timestamp is more than 24h in the past" }]
}
```

## Consultando eventos brutos

`GET /v1/atlas/events`

| Parâmetro | Tipo | Descrição |
| --- | --- | --- |
| `user_id` | string | Filtrar por uma identidade |
| `name` | string | Filtrar por um nome de evento |
| `since` / `until` | ISO 8601 | Período (padrão: últimas 24h) |
| `limit` | integer | Máx. 100, padrão 20 |
| `cursor` | string | Cursor de paginação de `next_cursor` |

**Resposta** — `200 OK`

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

`POST /v1/atlas/funnels` cria uma definição; `GET /v1/atlas/funnels/:id` calcula e retorna os resultados
atuais.

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

`GET /v1/atlas/cohorts/:id` — recalculado a cada chamada.

```json
{ "id": "cht_3f8a2c", "name": "Active purchasers (30d)", "size": 1847, "last_computed": "2026-07-15T14:32:00Z" }
```

## Erros

| Status HTTP | `code` | Significado |
| --- | --- | --- |
| 400 | `invalid_event_schema` | Campo obrigatório ausente ou tipo incorreto |
| 400 | `invalid_timestamp` | Timestamp fora da janela de 24h |
| 401 | `invalid_api_key` | Chave ausente, malformada ou revogada |
| 403 | `insufficient_scope` | Chave válida mas sem autorização para este projeto |
| 413 | `batch_too_large` | Mais de 1.000 eventos em uma requisição |
| 429 | `rate_limited` | Respeite o header `Retry-After` ao tentar novamente |

## Limites de taxa

600 requisições/minuto por chave para `/events` (ingestão), 60/minuto para endpoints de consulta.
Limites por chave, não por projeto.

## Suporte

Para dúvidas sobre o Atlas, entre em contato com a equipe de produto ou visite o fórum da comunidade.
