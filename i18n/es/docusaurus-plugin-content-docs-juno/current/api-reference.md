---
title: Referencia de la API
sidebar_position: 3
---

# Referencia de la API

## Autenticación

Todas las solicitudes a la API de Juno deben incluir un token de portador válido en el encabezado Authorization.

## Endpoints

La siguiente tabla enumera los principales endpoints expuestos por la API de Juno.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/juno/jobs` | Schedule a job |
| GET | `/v1/juno/jobs/:id/runs` | List a job's execution history |
| POST | `/v1/juno/jobs/:id/pause` | Pause a scheduled job |

## Soporte

Si tienes preguntas sobre Juno, contacta al equipo de producto o visita el foro de la comunidad.
