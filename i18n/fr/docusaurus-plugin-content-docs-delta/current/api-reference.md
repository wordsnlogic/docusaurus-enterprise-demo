---
title: Référence API
sidebar_position: 3
---

# Référence API

## Authentification

Toutes les requêtes vers l'API Delta doivent inclure un jeton porteur valide dans l'en-tête Authorization.

## Points de terminaison

Le tableau ci-dessous liste les principaux points de terminaison exposés par l'API Delta.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/delta/syncs` | Create a sync link between two services |
| GET | `/v1/delta/syncs/:id/status` | Check sync lag and health |
| DELETE | `/v1/delta/syncs/:id` | Tear down a sync link |

## Assistance

Pour toute question sur Delta, contactez l'équipe produit ou consultez le forum communautaire.
