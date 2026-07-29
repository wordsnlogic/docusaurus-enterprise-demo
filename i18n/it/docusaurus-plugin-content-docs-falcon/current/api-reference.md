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
| POST | `/v1/falcon/indexes` | Create a search index |
| POST | `/v1/falcon/indexes/:id/documents` | Index a batch of documents |
| POST | `/v1/falcon/indexes/:id/query` | Run a search query |

## Supporto

Per domande su Falcon, contatta il team di prodotto o visita il forum della community.
