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
| POST | `/v1/nova/models` | Deploy a model |
| POST | `/v1/nova/models/:id/predict` | Run inference against a deployed model |
| GET | `/v1/nova/models/:id/metrics` | Get latency and throughput metrics |

## Support

For questions about Nova, contact the product team or visit the community forum.
