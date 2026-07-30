---
title: API 参考
sidebar_position: 4
---

# API 参考

## 身份验证

在 `Authorization` 头中携带 Bearer 令牌。测试密钥与生产密钥是完全独立的凭证，测试密钥永远不会
意外移动真实资金。

## 创建收款

`POST /v1/ion/charges`

**请求**

```json
{
  "amount": 4200,
  "currency": "usd",
  "customer": "cus_h82ndk3",
  "payment_method": "pm_1a2b3c",
  "idempotency_key": "order_9f3e-attempt-1"
}
```

**响应** —— `200 OK`

```json
{
  "id": "ch_3P8kq2Aa",
  "amount": 4200,
  "currency": "usd",
  "status": "succeeded",
  "customer": "cus_h82ndk3",
  "created": "2026-07-20T09:14:22Z"
}
```

`status` 取值为 `succeeded`、`pending`（部分本地支付方式异步结算）或 `failed`。

## 创建客户

`POST /v1/ion/customers`

```json
{ "email": "jordan@acme.com", "payment_method": "pm_1a2b3c" }
```

响应中的 `id`（`cus_...`）可用于后续收款和订阅。

## 创建订阅

`POST /v1/ion/subscriptions`

```json
{ "customer": "cus_h82ndk3", "plan": "plan_pro_monthly", "idempotency_key": "sub_acme_pro-2026-07" }
```

```json
{ "id": "sub_7k2p9x", "status": "active", "current_period_end": "2026-08-20T09:14:22Z" }
```

## 发起退款

`POST /v1/ion/refunds`

```json
{ "charge": "ch_3P8kq2Aa", "amount": 2000 }
```

省略 `amount` 即为全额退款。只要累计金额不超过原始收款金额，可多次部分退款。

## 错误

| HTTP 状态码 | `code` | 含义 |
| --- | --- | --- |
| 400 | `invalid_currency` | 不支持的货币，或金额与该货币子单位不匹配 |
| 402 | `card_declined` | 发卡行拒绝了该支付方式 |
| 404 | `no_such_charge` | 引用的 ID 不存在 |
| 409 | `idempotency_key_reused` | 相同键使用了不同的请求体 |
| 429 | `rate_limited` | 请参考 `Retry-After` 头进行重试 |

`card_declined` 响应包含 `decline_code`（如 `insufficient_funds`、`expired_card`
等）——建议将其展示给终端用户，而非笼统的失败提示。

## 速率限制

每个密钥每秒 100 次请求（所有接口合计）。创建收款额外限制为每秒 25 次。

## 技术支持

如对 Ion 有任何疑问，请联系产品团队或访问社区论坛。
