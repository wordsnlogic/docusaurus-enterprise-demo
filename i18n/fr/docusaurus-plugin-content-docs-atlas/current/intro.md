---
title: Introduction
sidebar_position: 1
---

# Introduction

Atlas est l'API d'analytics produit de Northwind Cloud : vous envoyez des events, vous récupérez funnels,
cohorts de rétention et données brutes interrogeables.

## Ce qu'Atlas n'est pas

Ce n'est pas une CDP complète — pas de reverse-ETL ni de fan-out vers des destinations. Pour ça, combinez
avec [Cascade](/docs/cascade/intro).

## Fonctionnalités clés

- Streaming temps réel, ingestion en moins d'une seconde
- Funnels et cohorts calculés à la volée, pas en batch
- Requêtes SQL ad hoc via le [endpoint de requête](./api-reference.md)

## Avant de commencer

Lisez [Concepts](./concepts.md) avant [Bien démarrer](./getting-started.md) — dix minutes qui évitent
l'erreur la plus fréquente : un nommage d'events incohérent qui casse les funnels des semaines plus tard.
