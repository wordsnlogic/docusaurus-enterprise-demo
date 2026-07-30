---
title: Introduzione
sidebar_position: 1
---

# Introduzione

Atlas è l'API di product analytics di Northwind Cloud: invii eventi e ottieni funnel, cohort di
retention e dati grezzi interrogabili.

## Cosa Atlas non è

Atlas è un'API di eventi, non una CDP completa — niente reverse-ETL o fan-out verso destinazioni. Per
questo, combinalo con [Cascade](/docs/cascade/intro).

## Caratteristiche principali

- Streaming di eventi in tempo reale con ingestione sotto il secondo
- Funnel e cohort calcolati al volo, non in batch
- Query SQL ad hoc tramite l'[endpoint di query](./api-reference.md)

## Prima di iniziare

Leggi [Concetti](./concepts.md) prima di [Guida introduttiva](./getting-started.md) — dieci minuti che
evitano l'errore di integrazione più comune: una nomenclatura di eventi incoerente che rompe i funnel
settimane dopo.
