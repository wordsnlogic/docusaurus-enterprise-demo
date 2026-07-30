---
title: API 参考
sidebar_position: 4
---

# API 参考

## 身份验证

请求需在 `Authorization` 头中携带 Bearer 令牌。无效密钥返回 `401`；权限不足返回 `403`。

## 写入事件

`POST /v1/atlas/events` —— 每次请求最多 1,000 条事件。

**请求**

```json
{
  "events": [
    {
      "name": "checkout_completed",
      "user_id": "usr_8f3a1c",
      "timestamp": "2026-07-15T14:32:00Z",
      "properties": { "order_id": "ord_29xk3", "revenue": 84.50, "currency": "USD", "items": 3 }
    }
  ]
}
```

**响应** —— `202 Accepted`

```json
{ "accepted": 1, "rejected": 0, "batch_id": "batch_7f2e9a1c" }
```

批次中部分事件校验失败时，其余会正常写入，失败项单独返回：

```json
{
  "accepted": 2,
  "rejected": 1,
  "batch_id": "batch_7f2e9a1c",
  "errors": [{ "index": 2, "code": "invalid_timestamp", "message": "timestamp is more than 24h in the past" }]
}
```

## 查询原始事件

`GET /v1/atlas/events`

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `user_id` | string | 按单一身份过滤 |
| `name` | string | 按单一事件名过滤 |
| `since` / `until` | ISO 8601 | 时间范围（默认最近 24 小时） |
| `limit` | integer | 最大 100，默认 20 |
| `cursor` | string | 上次响应中的 `next_cursor` |

**响应** —— `200 OK`

```json
{
  "data": [
    {
      "id": "evt_4k2p91xz",
      "name": "checkout_completed",
      "user_id": "usr_8f3a1c",
      "timestamp": "2026-07-15T14:32:00Z",
      "properties": { "revenue": 84.50, "currency": "USD", "items": 3 }
    }
  ],
  "next_cursor": "eyJvZmZzZXQiOjIwfQ==",
  "has_more": true
}
```

## 漏斗

`POST /v1/atlas/funnels` 创建定义；`GET /v1/atlas/funnels/:id` 计算并返回当前结果。

```json
{ "name": "Signup to purchase", "steps": ["signup_completed", "product_viewed", "checkout_completed"], "window": "7d" }
```

```json
{
  "id": "fnl_9x2k3p",
  "name": "Signup to purchase",
  "steps": [
    { "name": "signup_completed", "count": 4200, "conversion_from_previous": 1.0 },
    { "name": "product_viewed", "count": 3110, "conversion_from_previous": 0.74 },
    { "name": "checkout_completed", "count": 892, "conversion_from_previous": 0.29 }
  ]
}
```

## 群组

`GET /v1/atlas/cohorts/:id` —— 每次调用都会重新计算。

```json
{ "id": "cht_3f8a2c", "name": "Active purchasers (30d)", "size": 1847, "last_computed": "2026-07-15T14:32:00Z" }
```

## 错误

| HTTP 状态码 | `code` | 含义 |
| --- | --- | --- |
| 400 | `invalid_event_schema` | 缺少必填字段或类型错误 |
| 400 | `invalid_timestamp` | 时间戳超出 24 小时范围 |
| 401 | `invalid_api_key` | 密钥缺失、格式错误或已吊销 |
| 403 | `insufficient_scope` | 密钥有效但无此项目权限 |
| 413 | `batch_too_large` | 单次请求超过 1,000 条事件 |
| 429 | `rate_limited` | 请参考 `Retry-After` 头进行重试 |

## 速率限制

写入接口（`/events`）每个密钥每分钟 600 次，查询接口每分钟 60 次。限制按密钥计算，而非按项目。

## 技术支持

如对 Atlas 有任何疑问，请联系产品团队或访问社区论坛。
