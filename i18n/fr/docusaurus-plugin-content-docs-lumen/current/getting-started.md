---
title: Prise en main
sidebar_position: 2
---

# Prise en main

## Prérequis

Avant de commencer, assurez-vous de disposer d'un compte Northwind Cloud et d'un accès API activé pour Lumen.

## Installation

Installez le SDK Lumen avec le gestionnaire de paquets de votre choix, puis initialisez-le avec la clé API de votre projet.

```bash
npm install @northwind/lumen
```

## Démarrage rapide

Le moyen le plus rapide de découvrir Lumen est d'exécuter l'exemple de démarrage rapide dans votre environnement local.

```js
import { Lumen } from "@northwind/lumen";

const client = new Lumen({ apiKey: process.env.NORTHWIND_API_KEY });
```
