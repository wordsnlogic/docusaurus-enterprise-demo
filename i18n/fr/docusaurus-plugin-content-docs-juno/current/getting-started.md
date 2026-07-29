---
title: Prise en main
sidebar_position: 2
---

# Prise en main

## Prérequis

Avant de commencer, assurez-vous de disposer d'un compte Northwind Cloud et d'un accès API activé pour Juno.

## Installation

Installez le SDK Juno avec le gestionnaire de paquets de votre choix, puis initialisez-le avec la clé API de votre projet.

```bash
npm install @northwind/juno
```

## Démarrage rapide

Le moyen le plus rapide de découvrir Juno est d'exécuter l'exemple de démarrage rapide dans votre environnement local.

```js
import { Juno } from "@northwind/juno";

const client = new Juno({ apiKey: process.env.NORTHWIND_API_KEY });
```
