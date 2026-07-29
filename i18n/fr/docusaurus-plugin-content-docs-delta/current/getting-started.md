---
title: Prise en main
sidebar_position: 2
---

# Prise en main

## Prérequis

Avant de commencer, assurez-vous de disposer d'un compte Northwind Cloud et d'un accès API activé pour Delta.

## Installation

Installez le SDK Delta avec le gestionnaire de paquets de votre choix, puis initialisez-le avec la clé API de votre projet.

```bash
npm install @northwind/delta
```

## Démarrage rapide

Le moyen le plus rapide de découvrir Delta est d'exécuter l'exemple de démarrage rapide dans votre environnement local.

```js
import { Delta } from "@northwind/delta";

const client = new Delta({ apiKey: process.env.NORTHWIND_API_KEY });
```
