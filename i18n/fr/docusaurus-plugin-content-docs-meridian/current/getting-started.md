---
title: Prise en main
sidebar_position: 2
---

# Prise en main

## Prérequis

Avant de commencer, assurez-vous de disposer d'un compte Northwind Cloud et d'un accès API activé pour Meridian.

## Installation

Installez le SDK Meridian avec le gestionnaire de paquets de votre choix, puis initialisez-le avec la clé API de votre projet.

```bash
npm install @northwind/meridian
```

## Démarrage rapide

Le moyen le plus rapide de découvrir Meridian est d'exécuter l'exemple de démarrage rapide dans votre environnement local.

```js
import { Meridian } from "@northwind/meridian";

const client = new Meridian({ apiKey: process.env.NORTHWIND_API_KEY });
```
