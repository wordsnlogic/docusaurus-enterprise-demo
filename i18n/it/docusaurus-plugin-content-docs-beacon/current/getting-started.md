---
title: Guida introduttiva
sidebar_position: 2
---

# Guida introduttiva

## Prerequisiti

Prima di iniziare, assicurati di avere un account Northwind Cloud e l'accesso API abilitato per Beacon.

## Installazione

Installa l'SDK di Beacon con il gestore di pacchetti che preferisci, quindi inizializzalo con la chiave API del tuo progetto.

```bash
npm install @northwind/beacon
```

## Avvio rapido

Il modo più veloce per vedere Beacon in azione è eseguire l'esempio di avvio rapido nel tuo ambiente locale.

```js
import { Beacon } from "@northwind/beacon";

const client = new Beacon({ apiKey: process.env.NORTHWIND_API_KEY });
```
