---
title: Prise en main
sidebar_position: 2
---

# Prise en main

## Prérequis

Avant de commencer, assurez-vous de disposer d'un compte Northwind Cloud et d'un accès API activé pour Cascade.

## Installation

Installez le SDK Cascade avec le gestionnaire de paquets de votre choix, puis initialisez-le avec la clé API de votre projet.

```bash
npm install @northwind/cascade
```

## Démarrage rapide

Le moyen le plus rapide de découvrir Cascade est d'exécuter l'exemple de démarrage rapide dans votre environnement local.

```js
import { Cascade } from "@northwind/cascade";

const client = new Cascade({ apiKey: process.env.NORTHWIND_API_KEY });
```
