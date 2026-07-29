---
title: API 参考
sidebar_position: 3
---

# API 参考

## 身份验证

对 Nova API 的所有请求都必须在 Authorization 请求头中包含有效的 Bearer 令牌。

## 接口列表

下表列出了 Nova API 提供的主要接口。

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/nova/models` | Deploy a model |
| POST | `/v1/nova/models/:id/predict` | Run inference against a deployed model |
| GET | `/v1/nova/models/:id/metrics` | Get latency and throughput metrics |

## 技术支持

如对 Nova 有任何疑问，请联系产品团队或访问社区论坛。
