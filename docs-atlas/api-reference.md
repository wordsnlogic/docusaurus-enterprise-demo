---
title: API Reference
sidebar_position: 3
---

# API Reference

## Authentication

All requests to the Atlas API must include a valid bearer token in the Authorization header.

## Endpoints

The table below lists the primary endpoints exposed by the Atlas API.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/atlas/events` | Ingest a batch of analytics events |
| GET | `/v1/atlas/funnels/:id` | Retrieve funnel conversion data |
| GET | `/v1/atlas/cohorts/:id` | Retrieve a retention cohort |

## Support

For questions about Atlas, contact the product team or visit the community forum.
