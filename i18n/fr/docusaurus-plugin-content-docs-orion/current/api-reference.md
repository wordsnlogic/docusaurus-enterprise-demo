---
title: Référence API
sidebar_position: 3
---

# Référence API

## Authentification

Toutes les requêtes vers l'API Orion doivent inclure un jeton porteur valide dans l'en-tête Authorization.

## Points de terminaison

Le tableau ci-dessous liste les principaux points de terminaison exposés par l'API Orion.

| Method | Path | Description |
| --- | --- | --- |
| PUT | `/v1/orion/buckets/:bucket/objects/:key` | Upload an object |
| GET | `/v1/orion/buckets/:bucket/objects/:key` | Retrieve an object |
| POST | `/v1/orion/buckets/:bucket/purge` | Purge CDN cache for a path |

## Assistance

Pour toute question sur Orion, contactez l'équipe produit ou consultez le forum communautaire.
