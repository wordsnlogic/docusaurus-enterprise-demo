---
title: Referencia de la API
sidebar_position: 3
---

# Referencia de la API

## Autenticación

Todas las solicitudes a la API de Orion deben incluir un token de portador válido en el encabezado Authorization.

## Endpoints

La siguiente tabla enumera los principales endpoints expuestos por la API de Orion.

| Method | Path | Description |
| --- | --- | --- |
| PUT | `/v1/orion/buckets/:bucket/objects/:key` | Upload an object |
| GET | `/v1/orion/buckets/:bucket/objects/:key` | Retrieve an object |
| POST | `/v1/orion/buckets/:bucket/purge` | Purge CDN cache for a path |

## Soporte

Si tienes preguntas sobre Orion, contacta al equipo de producto o visita el foro de la comunidad.
