---
title: API 参考
sidebar_position: 3
---

# API 参考

## 身份验证

对 Beacon API 的所有请求都必须在 Authorization 请求头中包含有效的 Bearer 令牌。

## 接口列表

下表列出了 Beacon API 提供的主要接口。

| Method | Path | Description |
| --- | --- | --- |
| GET | `/v1/beacon/status` | Health/status check |
| GET | `/v1/beacon/resources` | List resources |
| POST | `/v1/beacon/resources` | Create a resource |
| DELETE | `/v1/beacon/resources/:id` | Delete a resource |

## 技术支持

如对 Beacon 有任何疑问，请联系产品团队或访问社区论坛。
