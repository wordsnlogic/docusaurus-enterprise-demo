---
title: Prise en main
sidebar_position: 2
---

# Prise en main

## Prérequis

Avant de commencer, assurez-vous de disposer d'un compte Northwind Cloud et d'un accès API activé pour Orion.

## Installation

Installez le SDK Orion avec le gestionnaire de paquets de votre choix, puis initialisez-le avec la clé API de votre projet.

```bash
npm install @northwind/orion
```

## Démarrage rapide

Le moyen le plus rapide de découvrir Orion est d'exécuter l'exemple de démarrage rapide dans votre environnement local.

```js
import { Orion } from "@northwind/orion";

const client = new Orion({ apiKey: process.env.NORTHWIND_API_KEY });
```
