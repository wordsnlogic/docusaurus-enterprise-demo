---
title: API Reference
sidebar_position: 3
---

# API Reference

## Authentication

All requests to the Nova API must include a valid bearer token in the Authorization header.

## Endpoints

The table below lists the primary endpoints exposed by the Nova API.

| Method | Path | Description |
| --- | --- | --- |
| GET | `/v1/nova/status` | Health/status check |
| GET | `/v1/nova/resources` | List resources |
| POST | `/v1/nova/resources` | Create a resource |
| DELETE | `/v1/nova/resources/:id` | Delete a resource |

## Support

For questions about Nova, contact the product team or visit the community forum.
