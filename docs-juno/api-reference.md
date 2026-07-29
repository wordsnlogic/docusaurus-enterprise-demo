---
title: API Reference
sidebar_position: 3
---

# API Reference

## Authentication

All requests to the Juno API must include a valid bearer token in the Authorization header.

## Endpoints

The table below lists the primary endpoints exposed by the Juno API.

| Method | Path | Description |
| --- | --- | --- |
| GET | `/v1/juno/status` | Health/status check |
| GET | `/v1/juno/resources` | List resources |
| POST | `/v1/juno/resources` | Create a resource |
| DELETE | `/v1/juno/resources/:id` | Delete a resource |

## Support

For questions about Juno, contact the product team or visit the community forum.
