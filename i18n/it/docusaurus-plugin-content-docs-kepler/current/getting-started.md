---
title: Guida introduttiva
sidebar_position: 2
---

# Guida introduttiva

## Prerequisiti

Prima di iniziare, assicurati di avere un account Northwind Cloud e l'accesso API abilitato per Kepler.

## Installazione

Installa l'SDK di Kepler con il gestore di pacchetti che preferisci, quindi inizializzalo con la chiave API del tuo progetto.

```bash
npm install @northwind/kepler
```

## Avvio rapido

Il modo più veloce per vedere Kepler in azione è eseguire l'esempio di avvio rapido nel tuo ambiente locale.

```js
import { Kepler } from "@northwind/kepler";

const client = new Kepler({ apiKey: process.env.NORTHWIND_API_KEY });
```
