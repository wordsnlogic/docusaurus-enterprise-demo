---
title: Guida introduttiva
sidebar_position: 2
---

# Guida introduttiva

## Prerequisiti

Prima di iniziare, assicurati di avere un account Northwind Cloud e l'accesso API abilitato per Meridian.

## Installazione

Installa l'SDK di Meridian con il gestore di pacchetti che preferisci, quindi inizializzalo con la chiave API del tuo progetto.

```bash
npm install @northwind/meridian
```

## Avvio rapido

Il modo più veloce per vedere Meridian in azione è eseguire l'esempio di avvio rapido nel tuo ambiente locale.

```js
import { Meridian } from "@northwind/meridian";

const client = new Meridian({ apiKey: process.env.NORTHWIND_API_KEY });
```
