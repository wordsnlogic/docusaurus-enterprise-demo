---
title: Introducción
sidebar_position: 1
---

# Introducción

Atlas es la API de analítica de producto de Northwind Cloud: envías eventos y obtienes funnels, cohorts
de retención y datos crudos consultables.

## Lo que Atlas no es

Atlas es una API de eventos, no una CDP completa — no hace reverse-ETL ni fan-out a destinos. Para eso,
combínelo con [Cascade](/docs/cascade/intro).

## Características clave

- Streaming de eventos en tiempo real con ingestión de menos de un segundo
- Funnels y cohorts calculados al vuelo, no en trabajos por lotes
- Consultas SQL ad hoc vía el [endpoint de consulta](./api-reference.md)

## Antes de empezar

Lea [Conceptos](./concepts.md) antes de [Primeros pasos](./getting-started.md) — diez minutos que evitan
el error de integración más común: nombrar eventos de forma inconsistente, lo que rompe los funnels
semanas después.
