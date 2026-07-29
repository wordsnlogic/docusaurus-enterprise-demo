---
title: API-Referenz
sidebar_position: 3
---

# API-Referenz

## Authentifizierung

Alle Anfragen an die Cascade-API müssen ein gültiges Bearer-Token im Authorization-Header enthalten.

## Endpunkte

Die folgende Tabelle listet die wichtigsten Endpunkte der Cascade-API auf.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/cascade/pipelines` | Create a data pipeline |
| GET | `/v1/cascade/runs/:id` | Get a pipeline run's status |
| POST | `/v1/cascade/pipelines/:id/trigger` | Manually trigger a pipeline run |

## Support

Bei Fragen zu Cascade wenden Sie sich an das Produktteam oder besuchen Sie das Community-Forum.
