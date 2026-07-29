---
title: Guida introduttiva
sidebar_position: 2
---

# Guida introduttiva

## Prerequisiti

Prima di iniziare, assicurati di avere un account Northwind Cloud e l'accesso API abilitato per Atlas.

## Installazione

Installa l'SDK di Atlas con il gestore di pacchetti che preferisci, quindi inizializzalo con la chiave API del tuo progetto.

```bash
npm install @northwind/atlas
```

## Avvio rapido

Il modo più veloce per vedere Atlas in azione è eseguire l'esempio di avvio rapido nel tuo ambiente locale.

```js
import { Atlas } from "@northwind/atlas";

const client = new Atlas({ apiKey: process.env.NORTHWIND_API_KEY });
```
