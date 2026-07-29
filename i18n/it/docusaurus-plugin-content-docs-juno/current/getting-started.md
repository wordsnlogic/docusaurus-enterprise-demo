---
title: Guida introduttiva
sidebar_position: 2
---

# Guida introduttiva

## Prerequisiti

Prima di iniziare, assicurati di avere un account Northwind Cloud e l'accesso API abilitato per Juno.

## Installazione

Installa l'SDK di Juno con il gestore di pacchetti che preferisci, quindi inizializzalo con la chiave API del tuo progetto.

```bash
npm install @northwind/juno
```

## Avvio rapido

Il modo più veloce per vedere Juno in azione è eseguire l'esempio di avvio rapido nel tuo ambiente locale.

```js
import { Juno } from "@northwind/juno";

const client = new Juno({ apiKey: process.env.NORTHWIND_API_KEY });
```
