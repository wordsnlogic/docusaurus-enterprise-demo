---
title: Référence API
sidebar_position: 3
---

# Référence API

## Authentification

Toutes les requêtes vers l'API Falcon doivent inclure un jeton porteur valide dans l'en-tête Authorization.

## Points de terminaison

Le tableau ci-dessous liste les principaux points de terminaison exposés par l'API Falcon.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/falcon/indexes` | Create a search index |
| POST | `/v1/falcon/indexes/:id/documents` | Index a batch of documents |
| POST | `/v1/falcon/indexes/:id/query` | Run a search query |

## Assistance

Pour toute question sur Falcon, contactez l'équipe produit ou consultez le forum communautaire.
