---
title: Riferimento API
sidebar_position: 3
---

# Riferimento API

## Autenticazione

Tutte le richieste all'API di Cascade devono includere un token bearer valido nell'header Authorization.

## Endpoint

La tabella seguente elenca i principali endpoint esposti dall'API di Cascade.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/cascade/pipelines` | Create a data pipeline |
| GET | `/v1/cascade/runs/:id` | Get a pipeline run's status |
| POST | `/v1/cascade/pipelines/:id/trigger` | Manually trigger a pipeline run |

## Supporto

Per domande su Cascade, contatta il team di prodotto o visita il forum della community.
