---
title: Riferimento API
sidebar_position: 3
---

# Riferimento API

## Autenticazione

Tutte le richieste all'API di Delta devono includere un token bearer valido nell'header Authorization.

## Endpoint

La tabella seguente elenca i principali endpoint esposti dall'API di Delta.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/delta/syncs` | Create a sync link between two services |
| GET | `/v1/delta/syncs/:id/status` | Check sync lag and health |
| DELETE | `/v1/delta/syncs/:id` | Tear down a sync link |

## Supporto

Per domande su Delta, contatta il team di prodotto o visita il forum della community.
