---
title: Introdução
sidebar_position: 1
---

# Introdução

O Atlas é a API de analytics de produto da Northwind Cloud: você envia eventos e recebe funnels, cohorts
de retenção e dados brutos consultáveis.

## O que o Atlas não é

O Atlas é uma API de eventos, não uma CDP completa — não faz reverse-ETL nem fan-out para destinos. Para
isso, combine com [Cascade](/docs/cascade/intro).

## Principais recursos

- Streaming de eventos em tempo real com ingestão em menos de um segundo
- Funnels e cohorts calculados sob demanda, não em lotes
- Consultas SQL ad hoc via o [endpoint de consulta](./api-reference.md)

## Antes de começar

Leia [Conceitos](./concepts.md) antes de [Primeiros passos](./getting-started.md) — dez minutos que
evitam o erro de integração mais comum: nomenclatura inconsistente de eventos, que quebra funnels
semanas depois.
