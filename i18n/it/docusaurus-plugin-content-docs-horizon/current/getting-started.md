---
title: Guida introduttiva
sidebar_position: 2
---

# Guida introduttiva

## Prerequisiti

Prima di iniziare, assicurati di avere un account Northwind Cloud e l'accesso API abilitato per Horizon.

## Installazione

Installa l'SDK di Horizon con il gestore di pacchetti che preferisci, quindi inizializzalo con la chiave API del tuo progetto.

```bash
npm install @northwind/horizon
```

## Avvio rapido

Il modo più veloce per vedere Horizon in azione è eseguire l'esempio di avvio rapido nel tuo ambiente locale.

```js
import { Horizon } from "@northwind/horizon";

const client = new Horizon({ apiKey: process.env.NORTHWIND_API_KEY });
```
