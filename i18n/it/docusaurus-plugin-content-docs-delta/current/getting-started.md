---
title: Guida introduttiva
sidebar_position: 2
---

# Guida introduttiva

## Prerequisiti

Prima di iniziare, assicurati di avere un account Northwind Cloud e l'accesso API abilitato per Delta.

## Installazione

Installa l'SDK di Delta con il gestore di pacchetti che preferisci, quindi inizializzalo con la chiave API del tuo progetto.

```bash
npm install @northwind/delta
```

## Avvio rapido

Il modo più veloce per vedere Delta in azione è eseguire l'esempio di avvio rapido nel tuo ambiente locale.

```js
import { Delta } from "@northwind/delta";

const client = new Delta({ apiKey: process.env.NORTHWIND_API_KEY });
```
