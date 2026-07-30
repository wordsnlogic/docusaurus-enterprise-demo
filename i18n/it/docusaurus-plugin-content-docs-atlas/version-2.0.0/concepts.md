---
title: Concetti
sidebar_position: 2
---

# Concetti

Atlas ha quattro oggetti centrali.

## Eventi

Un **evento** è un fatto con timestamp su un'azione dell'utente (`checkout_completed`, `page_viewed`).
Campi: `name` (usa un vocabolario coerente o i tuoi funnel si romperanno silenziosamente), `user_id`,
`timestamp` (fino a 24h nel passato per i backfill), `properties` (oggetto JSON libero). Gli eventi sono
immutabili dopo l'ingestione — non c'è un endpoint di aggiornamento, invia un evento corretto se hai
sbagliato.

## Identità

Atlas traccia le persone tramite `user_id`, una stringa che controlli tu. Se un visitatore anonimo poi
accede, usa la fusione di identità in [Guida introduttiva](./getting-started.md)
invece di reinviare lo storico con il nuovo ID.

## Funnel

Un **funnel** è una sequenza ordinata di nomi di eventi. Atlas calcola quante identità hanno completato
ogni passaggio e dove sono uscite. Definito una volta (`POST /v1/atlas/funnels`), interrogato più volte
(`GET /v1/atlas/funnels/:id`).

## Cohort

Una **cohort** è una definizione salvata ("iscritti negli ultimi 30 giorni"). Ricalcolata a ogni
lettura, non è uno snapshot fisso del momento di creazione.
