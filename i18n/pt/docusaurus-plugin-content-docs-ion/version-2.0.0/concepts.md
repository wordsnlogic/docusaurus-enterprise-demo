---
title: Conceitos
sidebar_position: 2
---

# Conceitos

## Valores são inteiros

Todo valor na API do Ion é um inteiro na menor unidade da moeda — centavos para USD, ienes para JPY (que
não tem subunidade, então ¥500 é `500`, não `50000`). `amount: 4200` com `currency: "usd"` é $42,00.

## Charges (cobranças)

Uma **charge** é uma única tentativa de mover dinheiro de um cliente para você. Criada em uma chamada,
liquidada de forma assíncrona — `succeeded` significa autorizada, não necessariamente que os fundos já
foram liquidados.

## Clientes e métodos de pagamento

Um **cliente** é um registro reutilizável ao qual você associa um ou mais **métodos de pagamento**.
Criar o cliente antecipadamente — em vez de passar dados brutos do cartão a cada charge — habilita
checkout com cartão salvo e assinaturas.

## Chaves de idempotência

Todo endpoint de escrita aceita um `idempotency_key`. Se uma requisição expirar e você repetir com a
mesma chave, o Ion retorna o resultado original em vez de criar uma charge duplicada. Reutilizar a
chave com um corpo **diferente** é tratado como erro (ver [Erros](./api-reference.md)). Gere as
chaves no cliente, ligadas à ação de negócio (seu próprio ID de pedido), não aleatoriamente.

## Assinaturas

Uma **assinatura** vincula um cliente a um plano e cobra periodicamente. Tem `current_period_end`; se a
cobrança falhar, vai para `past_due` (não cancelada imediatamente), dando uma janela de dunning.

## Reembolsos

Reembolsos referenciam uma charge e podem ser parciais. Podem ser emitidos múltiplas vezes contra a
mesma charge desde que a soma não exceda o valor original.
