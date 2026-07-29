---
title: API Reference
sidebar_position: 3
---

# API Reference

## Authentication

All requests to the Falcon API must include a valid bearer token in the Authorization header.

## Endpoints

The table below lists the primary endpoints exposed by the Falcon API.

| Method | Path | Description |
| --- | --- | --- |
| GET | `/v1/falcon/status` | Health/status check |
| GET | `/v1/falcon/resources` | List resources |
| POST | `/v1/falcon/resources` | Create a resource |
| DELETE | `/v1/falcon/resources/:id` | Delete a resource |

## Support

For questions about Falcon, contact the product team or visit the community forum.
