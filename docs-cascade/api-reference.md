---
title: API Reference
sidebar_position: 3
---

# API Reference

## Authentication

All requests to the Cascade API must include a valid bearer token in the Authorization header.

## Endpoints

The table below lists the primary endpoints exposed by the Cascade API.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/cascade/pipelines` | Create a data pipeline |
| GET | `/v1/cascade/runs/:id` | Get a pipeline run's status |
| POST | `/v1/cascade/pipelines/:id/trigger` | Manually trigger a pipeline run |

## Support

For questions about Cascade, contact the product team or visit the community forum.
