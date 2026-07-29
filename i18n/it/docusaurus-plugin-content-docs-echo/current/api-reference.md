---
title: Riferimento API
sidebar_position: 3
---

# Riferimento API

## Autenticazione

Tutte le richieste all'API di Echo devono includere un token bearer valido nell'header Authorization.

## Endpoint

La tabella seguente elenca i principali endpoint esposti dall'API di Echo.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/echo/channels` | Create a chat channel |
| POST | `/v1/echo/messages` | Send a message to a channel |
| GET | `/v1/echo/channels/:id/messages` | Fetch channel message history |

## Supporto

Per domande su Echo, contatta il team di prodotto o visita il forum della community.
