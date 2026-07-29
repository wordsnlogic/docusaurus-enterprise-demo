---
title: API 参考
sidebar_position: 3
---

# API 参考

## 身份验证

对 Lumen API 的所有请求都必须在 Authorization 请求头中包含有效的 Bearer 令牌。

## 接口列表

下表列出了 Lumen API 提供的主要接口。

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/lumen/messages` | Send a transactional message |
| GET | `/v1/lumen/messages/:id` | Check delivery status |
| POST | `/v1/lumen/templates` | Create a message template |

## 技术支持

如对 Lumen 有任何疑问，请联系产品团队或访问社区论坛。
