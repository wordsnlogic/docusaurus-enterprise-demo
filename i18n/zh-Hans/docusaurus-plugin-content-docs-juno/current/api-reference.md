---
title: API 参考
sidebar_position: 3
---

# API 参考

## 身份验证

对 Juno API 的所有请求都必须在 Authorization 请求头中包含有效的 Bearer 令牌。

## 接口列表

下表列出了 Juno API 提供的主要接口。

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/juno/jobs` | Schedule a job |
| GET | `/v1/juno/jobs/:id/runs` | List a job's execution history |
| POST | `/v1/juno/jobs/:id/pause` | Pause a scheduled job |

## 技术支持

如对 Juno 有任何疑问，请联系产品团队或访问社区论坛。
