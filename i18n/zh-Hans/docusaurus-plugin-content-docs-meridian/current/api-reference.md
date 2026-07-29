---
title: API 参考
sidebar_position: 3
---

# API 参考

## 身份验证

对 Meridian API 的所有请求都必须在 Authorization 请求头中包含有效的 Bearer 令牌。

## 接口列表

下表列出了 Meridian API 提供的主要接口。

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/meridian/workflows` | Create a workflow |
| POST | `/v1/meridian/workflows/:id/runs` | Trigger a workflow run |
| GET | `/v1/meridian/workflows/:id/runs/:runId` | Get run status and step output |

## 技术支持

如对 Meridian 有任何疑问，请联系产品团队或访问社区论坛。
