---
title: Riferimento API
sidebar_position: 3
---

# Riferimento API

## Autenticazione

Tutte le richieste all'API di Nova devono includere un token bearer valido nell'header Authorization.

## Endpoint

La tabella seguente elenca i principali endpoint esposti dall'API di Nova.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/nova/models` | Deploy a model |
| POST | `/v1/nova/models/:id/predict` | Run inference against a deployed model |
| GET | `/v1/nova/models/:id/metrics` | Get latency and throughput metrics |

## Supporto

Per domande su Nova, contatta il team di prodotto o visita il forum della community.
