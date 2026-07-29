---
title: API-Referenz
sidebar_position: 3
---

# API-Referenz

## Authentifizierung

Alle Anfragen an die Delta-API müssen ein gültiges Bearer-Token im Authorization-Header enthalten.

## Endpunkte

Die folgende Tabelle listet die wichtigsten Endpunkte der Delta-API auf.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/delta/syncs` | Create a sync link between two services |
| GET | `/v1/delta/syncs/:id/status` | Check sync lag and health |
| DELETE | `/v1/delta/syncs/:id` | Tear down a sync link |

## Support

Bei Fragen zu Delta wenden Sie sich an das Produktteam oder besuchen Sie das Community-Forum.
