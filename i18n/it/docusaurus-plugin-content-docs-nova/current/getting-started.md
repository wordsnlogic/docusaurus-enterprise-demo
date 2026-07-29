---
title: Guida introduttiva
sidebar_position: 2
---

# Guida introduttiva

## Prerequisiti

Prima di iniziare, assicurati di avere un account Northwind Cloud e l'accesso API abilitato per Nova.

## Installazione

Installa l'SDK di Nova con il gestore di pacchetti che preferisci, quindi inizializzalo con la chiave API del tuo progetto.

```bash
npm install @northwind/nova
```

## Avvio rapido

Il modo più veloce per vedere Nova in azione è eseguire l'esempio di avvio rapido nel tuo ambiente locale.

```js
import { Nova } from "@northwind/nova";

const client = new Nova({ apiKey: process.env.NORTHWIND_API_KEY });
```
