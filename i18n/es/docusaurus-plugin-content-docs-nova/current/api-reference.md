---
title: Referencia de la API
sidebar_position: 3
---

# Referencia de la API

## Autenticación

Todas las solicitudes a la API de Nova deben incluir un token de portador válido en el encabezado Authorization.

## Endpoints

La siguiente tabla enumera los principales endpoints expuestos por la API de Nova.

| Method | Path | Description |
| --- | --- | --- |
| GET | `/v1/nova/status` | Health/status check |
| GET | `/v1/nova/resources` | List resources |
| POST | `/v1/nova/resources` | Create a resource |
| DELETE | `/v1/nova/resources/:id` | Delete a resource |

## Soporte

Si tienes preguntas sobre Nova, contacta al equipo de producto o visita el foro de la comunidad.
