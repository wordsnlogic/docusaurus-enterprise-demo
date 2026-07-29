---
title: Riferimento API
sidebar_position: 3
---

# Riferimento API

## Autenticazione

Tutte le richieste all'API di Horizon devono includere un token bearer valido nell'header Authorization.

## Endpoint

La tabella seguente elenca i principali endpoint esposti dall'API di Horizon.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/horizon/dashboards` | Create a dashboard |
| GET | `/v1/horizon/dashboards/:id/embed-token` | Generate a signed embed token |
| GET | `/v1/horizon/datasets` | List connected datasets |

## Supporto

Per domande su Horizon, contatta il team di prodotto o visita il forum della community.
