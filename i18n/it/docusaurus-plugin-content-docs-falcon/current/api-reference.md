---
title: Riferimento API
sidebar_position: 3
---

# Riferimento API

## Autenticazione

Tutte le richieste all'API di Falcon devono includere un token bearer valido nell'header Authorization.

## Endpoint

La tabella seguente elenca i principali endpoint esposti dall'API di Falcon.

| Method | Path | Description |
| --- | --- | --- |
| GET | `/v1/falcon/status` | Health/status check |
| GET | `/v1/falcon/resources` | List resources |
| POST | `/v1/falcon/resources` | Create a resource |
| DELETE | `/v1/falcon/resources/:id` | Delete a resource |

## Supporto

Per domande su Falcon, contatta il team di prodotto o visita il forum della community.
