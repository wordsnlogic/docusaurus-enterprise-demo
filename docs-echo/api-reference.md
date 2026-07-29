---
title: API Reference
sidebar_position: 3
---

# API Reference

## Authentication

All requests to the Echo API must include a valid bearer token in the Authorization header.

## Endpoints

The table below lists the primary endpoints exposed by the Echo API.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/echo/channels` | Create a chat channel |
| POST | `/v1/echo/messages` | Send a message to a channel |
| GET | `/v1/echo/channels/:id/messages` | Fetch channel message history |

## Support

For questions about Echo, contact the product team or visit the community forum.
