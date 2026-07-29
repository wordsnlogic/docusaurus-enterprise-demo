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
| GET | `/v1/nova/status` | Health/status check |
| GET | `/v1/nova/resources` | List resources |
| POST | `/v1/nova/resources` | Create a resource |
| DELETE | `/v1/nova/resources/:id` | Delete a resource |

## Supporto

Per domande su Nova, contatta il team di prodotto o visita il forum della community.
