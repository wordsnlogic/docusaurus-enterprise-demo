---
title: Guida introduttiva
sidebar_position: 2
---

# Guida introduttiva

## Prerequisiti

Prima di iniziare, assicurati di avere un account Northwind Cloud e l'accesso API abilitato per Falcon.

## Installazione

Installa l'SDK di Falcon con il gestore di pacchetti che preferisci, quindi inizializzalo con la chiave API del tuo progetto.

```bash
npm install @northwind/falcon
```

## Avvio rapido

Il modo più veloce per vedere Falcon in azione è eseguire l'esempio di avvio rapido nel tuo ambiente locale.

```js
import { Falcon } from "@northwind/falcon";

const client = new Falcon({ apiKey: process.env.NORTHWIND_API_KEY });
```
