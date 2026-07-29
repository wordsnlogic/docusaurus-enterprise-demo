---
title: API Reference
sidebar_position: 3
---

# API Reference

## Authentication

All requests to the Horizon API must include a valid bearer token in the Authorization header.

## Endpoints

The table below lists the primary endpoints exposed by the Horizon API.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/horizon/dashboards` | Create a dashboard |
| GET | `/v1/horizon/dashboards/:id/embed-token` | Generate a signed embed token |
| GET | `/v1/horizon/datasets` | List connected datasets |

## Support

For questions about Horizon, contact the product team or visit the community forum.
