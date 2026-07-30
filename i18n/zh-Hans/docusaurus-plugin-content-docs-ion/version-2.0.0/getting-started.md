---
title: 快速入门
sidebar_position: 3
---

# 快速入门

## 前提条件

需要已启用 Ion 的 Northwind Cloud 账户，以及测试密钥（`sk_test_...`）。本指南全程使用测试模式。

## 创建一笔收款

**cURL**

```bash
curl https://api.northwind.cloud/v1/ion/charges \
  -H "Authorization: Bearer $ION_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 4200,
    "currency": "usd",
    "payment_method": "pm_card_test_visa",
    "idempotency_key": "order_9f3e-attempt-1"
  }'
```

**Node.js**

```js
import { Ion } from "@northwind/ion";

const ion = new Ion({ apiKey: process.env.ION_SECRET_KEY });

const charge = await ion.charges.create({
  amount: 4200,
  currency: "usd",
  paymentMethod: "pm_card_test_visa",
  idempotencyKey: "order_9f3e-attempt-1",
});
```

**Python**

```python
from northwind_ion import Ion

ion = Ion(api_key=os.environ["ION_SECRET_KEY"])

charge = ion.charges.create(
    amount=4200,
    currency="usd",
    payment_method="pm_card_test_visa",
    idempotency_key="order_9f3e-attempt-1",
)
```

`amount: 4200`、`currency: "usd"` 即 $42.00（见[核心概念](./concepts.md)）。
`pm_card_test_visa` 是始终成功的测试支付方式；`pm_card_test_decline` 用于测试失败场景——上线前请务必
测试，参见[错误](./api-reference.md)。

## 务必设置幂等键

如果网络调用在 Ion 收到请求后、你收到响应前超时，使用相同键重试会返回原始结果，而不会创建第二笔
收款。请将其绑定到你系统中稳定的值（如订单号），而非每次请求随机生成。

## 验证是否成功

```bash
curl https://api.northwind.cloud/v1/ion/charges/ch_3P8kq2Aa \
  -H "Authorization: Bearer $ION_SECRET_KEY"
```

返回 `status: "succeeded"` 即表示测试模式下收款成功。完整字段说明见[API 参考](./api-reference.md)。
