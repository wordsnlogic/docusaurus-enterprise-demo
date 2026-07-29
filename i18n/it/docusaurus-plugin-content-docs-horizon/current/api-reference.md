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
| GET | `/v1/horizon/status` | Health/status check |
| GET | `/v1/horizon/resources` | List resources |
| POST | `/v1/horizon/resources` | Create a resource |
| DELETE | `/v1/horizon/resources/:id` | Delete a resource |

## Supporto

Per domande su Horizon, contatta il team di prodotto o visita il forum della community.
