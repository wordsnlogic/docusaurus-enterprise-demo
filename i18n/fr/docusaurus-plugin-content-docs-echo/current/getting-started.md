---
title: Prise en main
sidebar_position: 2
---

# Prise en main

## Prérequis

Avant de commencer, assurez-vous de disposer d'un compte Northwind Cloud et d'un accès API activé pour Echo.

## Installation

Installez le SDK Echo avec le gestionnaire de paquets de votre choix, puis initialisez-le avec la clé API de votre projet.

```bash
npm install @northwind/echo
```

## Démarrage rapide

Le moyen le plus rapide de découvrir Echo est d'exécuter l'exemple de démarrage rapide dans votre environnement local.

```js
import { Echo } from "@northwind/echo";

const client = new Echo({ apiKey: process.env.NORTHWIND_API_KEY });
```
