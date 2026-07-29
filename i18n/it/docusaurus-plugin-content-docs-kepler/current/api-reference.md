---
title: Riferimento API
sidebar_position: 3
---

# Riferimento API

## Autenticazione

Tutte le richieste all'API di Kepler devono includere un token bearer valido nell'header Authorization.

## Endpoint

La tabella seguente elenca i principali endpoint esposti dall'API di Kepler.

| Method | Path | Description |
| --- | --- | --- |
| GET | `/v1/kepler/status` | Health/status check |
| GET | `/v1/kepler/resources` | List resources |
| POST | `/v1/kepler/resources` | Create a resource |
| DELETE | `/v1/kepler/resources/:id` | Delete a resource |

## Supporto

Per domande su Kepler, contatta il team di prodotto o visita il forum della community.
