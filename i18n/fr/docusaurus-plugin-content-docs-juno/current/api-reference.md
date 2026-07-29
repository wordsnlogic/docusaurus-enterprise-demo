---
title: Référence API
sidebar_position: 3
---

# Référence API

## Authentification

Toutes les requêtes vers l'API Juno doivent inclure un jeton porteur valide dans l'en-tête Authorization.

## Points de terminaison

Le tableau ci-dessous liste les principaux points de terminaison exposés par l'API Juno.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/juno/jobs` | Schedule a job |
| GET | `/v1/juno/jobs/:id/runs` | List a job's execution history |
| POST | `/v1/juno/jobs/:id/pause` | Pause a scheduled job |

## Assistance

Pour toute question sur Juno, contactez l'équipe produit ou consultez le forum communautaire.
