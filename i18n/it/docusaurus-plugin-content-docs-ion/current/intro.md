---
title: Introduzione
sidebar_position: 1
---

# Introduzione

Ion è l'API di pagamenti di Northwind Cloud: charge, metodi di pagamento salvati, abbonamenti e
rimborsi in oltre 135 valute, con custodia delle carte conforme a PCI-DSS Livello 1, così i numeri di
carta non toccano mai i tuoi server.

## Modalità test vs. modalità live

Ogni account Ion ha chiavi separate di test (`sk_test_`) e live (`sk_live_`). La modalità test usa le
stesse regole di validazione della modalità live ma non muove mai denaro reale — costruisci e testa
l'intera integrazione, inclusi i percorsi di errore, in modalità test prima di cambiare chiave.

## Caratteristiche principali

- Oltre 135 valute e metodi di pagamento locali
- Custodia delle carte conforme a PCI-DSS Livello 1
- Fatturazione a consumo e in abbonamento, con dunning automatico sui fallimenti

## Prima di iniziare

Leggi [Concetti](./concepts.md) — in particolare come gli importi sono rappresentati come interi e come
funzionano le chiavi di idempotenza — prima di scrivere codice per creare charge.
