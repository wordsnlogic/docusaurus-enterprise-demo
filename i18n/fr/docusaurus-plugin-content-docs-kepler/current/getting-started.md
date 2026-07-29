---
title: Prise en main
sidebar_position: 2
---

# Prise en main

## Prérequis

Avant de commencer, assurez-vous de disposer d'un compte Northwind Cloud et d'un accès API activé pour Kepler.

## Installation

Installez le SDK Kepler avec le gestionnaire de paquets de votre choix, puis initialisez-le avec la clé API de votre projet.

```bash
npm install @northwind/kepler
```

## Démarrage rapide

Le moyen le plus rapide de découvrir Kepler est d'exécuter l'exemple de démarrage rapide dans votre environnement local.

```js
import { Kepler } from "@northwind/kepler";

const client = new Kepler({ apiKey: process.env.NORTHWIND_API_KEY });
```
