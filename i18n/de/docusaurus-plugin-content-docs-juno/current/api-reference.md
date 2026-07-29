---
title: API-Referenz
sidebar_position: 3
---

# API-Referenz

## Authentifizierung

Alle Anfragen an die Juno-API müssen ein gültiges Bearer-Token im Authorization-Header enthalten.

## Endpunkte

Die folgende Tabelle listet die wichtigsten Endpunkte der Juno-API auf.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/juno/jobs` | Schedule a job |
| GET | `/v1/juno/jobs/:id/runs` | List a job's execution history |
| POST | `/v1/juno/jobs/:id/pause` | Pause a scheduled job |

## Support

Bei Fragen zu Juno wenden Sie sich an das Produktteam oder besuchen Sie das Community-Forum.
