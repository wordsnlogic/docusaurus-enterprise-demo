---
title: Concepts
sidebar_position: 2
---

# Concepts

Atlas repose sur quatre objets centraux.

## Events

Un **event** est un fait horodaté sur une action utilisateur — `checkout_completed`, `page_viewed`. Champs
clés : `name` (choisissez un vocabulaire cohérent, sinon vos funnels se cassent silencieusement),
`user_id`, `timestamp` (jusqu'à 24h dans le passé pour les backfills), `properties` (objet JSON libre).
Les events sont immuables : pas de mise à jour, envoyez un event corrigé.

## Identités

Atlas identifie les personnes via `user_id`, une chaîne que vous contrôlez. Pour fusionner un visiteur
anonyme avec un compte connecté, utilisez la fusion d'identité (voir [Bien démarrer](./getting-started.md))
plutôt que de renvoyer l'historique sous le nouvel ID.

## Funnels

Un **funnel** est une séquence ordonnée de noms d'events. Atlas calcule combien d'identités ont complété
chaque étape et où elles décrochent. Défini une fois (`POST /v1/atlas/funnels`), interrogé à volonté (`GET
/v1/atlas/funnels/:id`).

## Cohorts

Une **cohort** est une définition sauvegardée ("inscrits il y a 30 jours"). Recalculée à chaque lecture —
jamais un instantané figé.
