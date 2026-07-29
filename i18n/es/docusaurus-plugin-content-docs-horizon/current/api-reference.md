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
| POST | `/v1/horizon/dashboards` | Create a dashboard |
| GET | `/v1/horizon/dashboards/:id/embed-token` | Generate a signed embed token |
| GET | `/v1/horizon/datasets` | List connected datasets |

## Soporte

Si tienes preguntas sobre Horizon, contacta al equipo de producto o visita el foro de la comunidad.
