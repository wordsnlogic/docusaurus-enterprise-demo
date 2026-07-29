---
title: API-Referenz
sidebar_position: 3
---

# API-Referenz

## Authentifizierung

Alle Anfragen an die Meridian-API müssen ein gültiges Bearer-Token im Authorization-Header enthalten.

## Endpunkte

Die folgende Tabelle listet die wichtigsten Endpunkte der Meridian-API auf.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/meridian/workflows` | Create a workflow |
| POST | `/v1/meridian/workflows/:id/runs` | Trigger a workflow run |
| GET | `/v1/meridian/workflows/:id/runs/:runId` | Get run status and step output |

## Support

Bei Fragen zu Meridian wenden Sie sich an das Produktteam oder besuchen Sie das Community-Forum.
