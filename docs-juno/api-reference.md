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
| POST | `/v1/juno/jobs` | Schedule a job |
| GET | `/v1/juno/jobs/:id/runs` | List a job's execution history |
| POST | `/v1/juno/jobs/:id/pause` | Pause a scheduled job |

## Support

For questions about Juno, contact the product team or visit the community forum.
