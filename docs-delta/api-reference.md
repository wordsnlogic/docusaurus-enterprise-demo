---
title: API Reference
sidebar_position: 3
---

# API Reference

## Authentication

All requests to the Delta API must include a valid bearer token in the Authorization header.

## Endpoints

The table below lists the primary endpoints exposed by the Delta API.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/delta/syncs` | Create a sync link between two services |
| GET | `/v1/delta/syncs/:id/status` | Check sync lag and health |
| DELETE | `/v1/delta/syncs/:id` | Tear down a sync link |

## Support

For questions about Delta, contact the product team or visit the community forum.
