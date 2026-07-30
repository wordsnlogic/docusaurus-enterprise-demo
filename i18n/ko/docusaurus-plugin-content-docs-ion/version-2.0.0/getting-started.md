---
title: 시작하기
sidebar_position: 3
---

# 시작하기

## 사전 준비 사항

Ion이 활성화된 Northwind Cloud 계정과 테스트 시크릿 키(`sk_test_...`)가 필요합니다. 이 가이드에서는
계속 테스트 모드를 사용합니다.

## 청구 생성

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

`amount: 4200`과 `currency: "usd"`는 $42.00입니다 ([개념](./concepts.md) 참고).
`pm_card_test_visa`는 항상 성공하는 테스트 결제 수단이며, `pm_card_test_decline`으로 실패 처리를
테스트할 수 있습니다 — [오류](./api-reference.md) 참고.

## 항상 멱등성 키를 설정하세요

네트워크 호출이 타임아웃된 후 동일한 키로 재시도하면 중복 청구 대신 원래 결과가 반환됩니다. 무작위
값이 아닌 주문 ID처럼 안정적인 값을 사용하세요.

## 정상 작동 확인

```bash
curl https://api.northwind.cloud/v1/ion/charges/ch_3P8kq2Aa \
  -H "Authorization: Bearer $ION_SECRET_KEY"
```

`status: "succeeded"` 응답이면 테스트 모드에서 청구가 성공한 것입니다. 전체 필드 참조는
[API 참조](./api-reference.md)를 확인하세요.
