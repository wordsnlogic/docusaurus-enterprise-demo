---
title: Conceitos
sidebar_position: 2
---

# Conceitos

O Atlas tem quatro objetos centrais.

## Eventos

Um **evento** é um fato com timestamp sobre uma ação do usuário (`checkout_completed`, `page_viewed`).
Campos: `name` (use um vocabulário consistente ou seus funnels vão quebrar silenciosamente), `user_id`,
`timestamp` (até 24h atrás para backfills), `properties` (objeto JSON livre). Eventos são imutáveis após
a ingestão — não há endpoint de atualização; envie um evento corrigido se cometer um erro.

## Identidades

O Atlas rastreia pessoas via `user_id`, uma string que você controla. Se um visitante anônimo depois faz
login, use a fusão de identidade em [Primeiros passos](./getting-started.md) em vez de
reenviar o histórico com o novo ID.

## Funnels

Um **funnel** é uma sequência ordenada de nomes de eventos. O Atlas calcula quantas identidades
completaram cada etapa e onde desistiram. Definido uma vez (`POST /v1/atlas/funnels`), consultado
repetidamente (`GET /v1/atlas/funnels/:id`).

## Cohorts

Um **cohort** é uma definição salva ("cadastrados nos últimos 30 dias"). Recalculado a cada leitura, não
é um snapshot fixo do momento da criação.
