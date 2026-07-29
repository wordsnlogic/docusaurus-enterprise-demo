---
title: Prise en main
sidebar_position: 2
---

# Prise en main

## Prérequis

Avant de commencer, assurez-vous de disposer d'un compte Northwind Cloud et d'un accès API activé pour Atlas.

## Installation

Installez le SDK Atlas avec le gestionnaire de paquets de votre choix, puis initialisez-le avec la clé API de votre projet.

```bash
npm install @northwind/atlas
```

## Démarrage rapide

Le moyen le plus rapide de découvrir Atlas est d'exécuter l'exemple de démarrage rapide dans votre environnement local.

```js
import { Atlas } from "@northwind/atlas";

const client = new Atlas({ apiKey: process.env.NORTHWIND_API_KEY });
```
