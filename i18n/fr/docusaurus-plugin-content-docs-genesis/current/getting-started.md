---
title: Prise en main
sidebar_position: 2
---

# Prise en main

## Prérequis

Avant de commencer, assurez-vous de disposer d'un compte Northwind Cloud et d'un accès API activé pour Genesis.

## Installation

Installez le SDK Genesis avec le gestionnaire de paquets de votre choix, puis initialisez-le avec la clé API de votre projet.

```bash
npm install @northwind/genesis
```

## Démarrage rapide

Le moyen le plus rapide de découvrir Genesis est d'exécuter l'exemple de démarrage rapide dans votre environnement local.

```js
import { Genesis } from "@northwind/genesis";

const client = new Genesis({ apiKey: process.env.NORTHWIND_API_KEY });
```
