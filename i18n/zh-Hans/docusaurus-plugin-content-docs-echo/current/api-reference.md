---
title: API 参考
sidebar_position: 3
---

# API 参考

## 身份验证

对 Echo API 的所有请求都必须在 Authorization 请求头中包含有效的 Bearer 令牌。

## 接口列表

下表列出了 Echo API 提供的主要接口。

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/echo/channels` | Create a chat channel |
| POST | `/v1/echo/messages` | Send a message to a channel |
| GET | `/v1/echo/channels/:id/messages` | Fetch channel message history |

## 技术支持

如对 Echo 有任何疑问，请联系产品团队或访问社区论坛。
