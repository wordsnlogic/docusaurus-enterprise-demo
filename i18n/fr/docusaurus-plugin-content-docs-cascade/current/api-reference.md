---
title: Référence API
sidebar_position: 3
---

# Référence API

## Authentification

Toutes les requêtes vers l'API Cascade doivent inclure un jeton porteur valide dans l'en-tête Authorization.

## Points de terminaison

Le tableau ci-dessous liste les principaux points de terminaison exposés par l'API Cascade.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/cascade/pipelines` | Create a data pipeline |
| GET | `/v1/cascade/runs/:id` | Get a pipeline run's status |
| POST | `/v1/cascade/pipelines/:id/trigger` | Manually trigger a pipeline run |

## Assistance

Pour toute question sur Cascade, contactez l'équipe produit ou consultez le forum communautaire.
