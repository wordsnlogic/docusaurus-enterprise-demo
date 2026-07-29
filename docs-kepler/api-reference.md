---
title: API Reference
sidebar_position: 3
---

# API Reference

## Authentication

All requests to the Kepler API must include a valid bearer token in the Authorization header.

## Endpoints

The table below lists the primary endpoints exposed by the Kepler API.

| Method | Path | Description |
| --- | --- | --- |
| GET | `/v1/kepler/status` | Health/status check |
| GET | `/v1/kepler/resources` | List resources |
| POST | `/v1/kepler/resources` | Create a resource |
| DELETE | `/v1/kepler/resources/:id` | Delete a resource |

## Support

For questions about Kepler, contact the product team or visit the community forum.
