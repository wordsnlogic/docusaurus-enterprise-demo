---
title: Guida introduttiva
sidebar_position: 2
---

# Guida introduttiva

## Prerequisiti

Prima di iniziare, assicurati di avere un account Northwind Cloud e l'accesso API abilitato per Cascade.

## Installazione

Installa l'SDK di Cascade con il gestore di pacchetti che preferisci, quindi inizializzalo con la chiave API del tuo progetto.

```bash
npm install @northwind/cascade
```

## Avvio rapido

Il modo più veloce per vedere Cascade in azione è eseguire l'esempio di avvio rapido nel tuo ambiente locale.

```js
import { Cascade } from "@northwind/cascade";

const client = new Cascade({ apiKey: process.env.NORTHWIND_API_KEY });
```
