---
title: API Reference
sidebar_position: 3
---

# API Reference

## Authentication

All requests to the Orion API must include a valid bearer token in the Authorization header.

## Endpoints

The table below lists the primary endpoints exposed by the Orion API.

| Method | Path | Description |
| --- | --- | --- |
| PUT | `/v1/orion/buckets/:bucket/objects/:key` | Upload an object |
| GET | `/v1/orion/buckets/:bucket/objects/:key` | Retrieve an object |
| POST | `/v1/orion/buckets/:bucket/purge` | Purge CDN cache for a path |

## Support

For questions about Orion, contact the product team or visit the community forum.
