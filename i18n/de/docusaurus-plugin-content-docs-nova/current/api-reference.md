---
title: API-Referenz
sidebar_position: 3
---

# API-Referenz

## Authentifizierung

Alle Anfragen an die Nova-API müssen ein gültiges Bearer-Token im Authorization-Header enthalten.

## Endpunkte

Die folgende Tabelle listet die wichtigsten Endpunkte der Nova-API auf.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/nova/models` | Deploy a model |
| POST | `/v1/nova/models/:id/predict` | Run inference against a deployed model |
| GET | `/v1/nova/models/:id/metrics` | Get latency and throughput metrics |

## Support

Bei Fragen zu Nova wenden Sie sich an das Produktteam oder besuchen Sie das Community-Forum.
