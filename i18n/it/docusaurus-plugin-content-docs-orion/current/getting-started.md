---
title: Guida introduttiva
sidebar_position: 2
---

# Guida introduttiva

## Prerequisiti

Prima di iniziare, assicurati di avere un account Northwind Cloud e l'accesso API abilitato per Orion.

## Installazione

Installa l'SDK di Orion con il gestore di pacchetti che preferisci, quindi inizializzalo con la chiave API del tuo progetto.

```bash
npm install @northwind/orion
```

## Avvio rapido

Il modo più veloce per vedere Orion in azione è eseguire l'esempio di avvio rapido nel tuo ambiente locale.

```js
import { Orion } from "@northwind/orion";

const client = new Orion({ apiKey: process.env.NORTHWIND_API_KEY });
```
