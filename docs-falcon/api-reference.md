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
| POST | `/v1/falcon/indexes` | Create a search index |
| POST | `/v1/falcon/indexes/:id/documents` | Index a batch of documents |
| POST | `/v1/falcon/indexes/:id/query` | Run a search query |

## Support

For questions about Falcon, contact the product team or visit the community forum.
