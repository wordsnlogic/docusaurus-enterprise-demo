---
title: Référence API
sidebar_position: 3
---

# Référence API

## Authentification

Toutes les requêtes vers l'API Nova doivent inclure un jeton porteur valide dans l'en-tête Authorization.

## Points de terminaison

Le tableau ci-dessous liste les principaux points de terminaison exposés par l'API Nova.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/nova/models` | Deploy a model |
| POST | `/v1/nova/models/:id/predict` | Run inference against a deployed model |
| GET | `/v1/nova/models/:id/metrics` | Get latency and throughput metrics |

## Assistance

Pour toute question sur Nova, contactez l'équipe produit ou consultez le forum communautaire.
