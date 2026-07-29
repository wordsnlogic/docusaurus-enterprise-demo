---
title: API 参考
sidebar_position: 3
---

# API 参考

## 身份验证

对 Atlas API 的所有请求都必须在 Authorization 请求头中包含有效的 Bearer 令牌。

## 接口列表

下表列出了 Atlas API 提供的主要接口。

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/atlas/events` | Ingest a batch of analytics events |
| GET | `/v1/atlas/funnels/:id` | Retrieve funnel conversion data |
| GET | `/v1/atlas/cohorts/:id` | Retrieve a retention cohort |

## 技术支持

如对 Atlas 有任何疑问，请联系产品团队或访问社区论坛。
