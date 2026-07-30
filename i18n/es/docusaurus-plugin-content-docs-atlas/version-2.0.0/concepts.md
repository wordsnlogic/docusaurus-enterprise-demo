---
title: Conceptos
sidebar_position: 2
---

# Conceptos

Atlas tiene cuatro objetos centrales.

## Eventos

Un **evento** es un hecho con marca de tiempo sobre una acción del usuario (`checkout_completed`,
`page_viewed`). Campos: `name` (use un vocabulario consistente o sus funnels se romperán en silencio),
`user_id`, `timestamp` (hasta 24h atrás para backfills), `properties` (objeto JSON libre). Los eventos
son inmutables una vez ingeridos — no hay endpoint de actualización, envíe un evento corregido si se
equivocó.

## Identidades

Atlas rastrea personas mediante `user_id`, una cadena que usted controla. Si un visitante anónimo luego
inicia sesión, use la fusión de identidades en [Primeros pasos](./getting-started.md)
en lugar de reenviar el historial bajo el nuevo ID.

## Funnels

Un **funnel** es una secuencia ordenada de nombres de eventos. Atlas calcula cuántas identidades
completaron cada paso y dónde abandonaron. Se define una vez (`POST /v1/atlas/funnels`) y se consulta
repetidamente (`GET /v1/atlas/funnels/:id`).

## Cohorts

Un **cohort** es una definición guardada ("registrados en los últimos 30 días"). Se recalcula en cada
lectura, no es una instantánea fija del momento de creación.
