---
title: API Reference
sidebar_position: 3
---

# API Reference

## Authentication

All requests to the Meridian API must include a valid bearer token in the Authorization header.

## Endpoints

The table below lists the primary endpoints exposed by the Meridian API.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/meridian/workflows` | Create a workflow |
| POST | `/v1/meridian/workflows/:id/runs` | Trigger a workflow run |
| GET | `/v1/meridian/workflows/:id/runs/:runId` | Get run status and step output |

## Support

For questions about Meridian, contact the product team or visit the community forum.
