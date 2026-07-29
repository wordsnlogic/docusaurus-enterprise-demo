---
title: Referencia de la API
sidebar_position: 3
---

# Referencia de la API

## Autenticación

Todas las solicitudes a la API de Horizon deben incluir un token de portador válido en el encabezado Authorization.

## Endpoints

La siguiente tabla enumera los principales endpoints expuestos por la API de Horizon.

| Method | Path | Description |
| --- | --- | --- |
| GET | `/v1/horizon/status` | Health/status check |
| GET | `/v1/horizon/resources` | List resources |
| POST | `/v1/horizon/resources` | Create a resource |
| DELETE | `/v1/horizon/resources/:id` | Delete a resource |

## Soporte

Si tienes preguntas sobre Horizon, contacta al equipo de producto o visita el foro de la comunidad.
