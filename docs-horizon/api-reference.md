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
| GET | `/v1/horizon/status` | Health/status check |
| GET | `/v1/horizon/resources` | List resources |
| POST | `/v1/horizon/resources` | Create a resource |
| DELETE | `/v1/horizon/resources/:id` | Delete a resource |

## Support

For questions about Horizon, contact the product team or visit the community forum.
