---
title: Guida introduttiva
sidebar_position: 2
---

# Guida introduttiva

## Prerequisiti

Prima di iniziare, assicurati di avere un account Northwind Cloud e l'accesso API abilitato per Ion.

## Installazione

Installa l'SDK di Ion con il gestore di pacchetti che preferisci, quindi inizializzalo con la chiave API del tuo progetto.

```bash
npm install @northwind/ion
```

## Avvio rapido

Il modo più veloce per vedere Ion in azione è eseguire l'esempio di avvio rapido nel tuo ambiente locale.

```js
import { Ion } from "@northwind/ion";

const client = new Ion({ apiKey: process.env.NORTHWIND_API_KEY });
```
