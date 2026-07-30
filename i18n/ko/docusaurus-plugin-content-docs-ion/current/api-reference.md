---
title: API 참조
sidebar_position: 4
---

# API 참조

## 인증

`Authorization` 헤더에 베어러 토큰. 테스트 키와 라이브 키는 별도 자격 증명이며, 테스트 키로는 실수로도
실제 자금이 이동하지 않습니다.

## 청구 생성

`POST /v1/ion/charges`

**요청**

```json
{
  "amount": 4200,
  "currency": "usd",
  "customer": "cus_h82ndk3",
  "payment_method": "pm_1a2b3c",
  "idempotency_key": "order_9f3e-attempt-1"
}
```

**응답** — `200 OK`

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

`status`는 `succeeded`, `pending`(일부 현지 결제 수단은 비동기 정산), `failed` 중 하나입니다.

## 고객 생성

`POST /v1/ion/customers`

```json
{ "email": "jordan@acme.com", "payment_method": "pm_1a2b3c" }
```

응답의 `id`(`cus_...`)를 이후 청구와 구독에 재사용합니다.

## 구독 생성

`POST /v1/ion/subscriptions`

```json
{ "customer": "cus_h82ndk3", "plan": "plan_pro_monthly", "idempotency_key": "sub_acme_pro-2026-07" }
```

```json
{ "id": "sub_7k2p9x", "status": "active", "current_period_end": "2026-08-20T09:14:22Z" }
```

## 환불 발행

`POST /v1/ion/refunds`

```json
{ "charge": "ch_3P8kq2Aa", "amount": 2000 }
```

`amount`를 생략하면 전액 환불됩니다. 누적 금액이 원 청구 금액을 넘지 않는 한 여러 번 부분 환불할 수
있습니다.

## 오류

| HTTP 상태 | `code` | 의미 |
| --- | --- | --- |
| 400 | `invalid_currency` | 지원하지 않는 통화 또는 잘못된 금액 단위 |
| 402 | `card_declined` | 발급사가 결제를 거부함 |
| 404 | `no_such_charge` | 참조한 ID가 존재하지 않음 |
| 409 | `idempotency_key_reused` | 동일 키에 다른 요청 본문 사용 |
| 429 | `rate_limited` | `Retry-After` 헤더를 참고해 재시도 |

`card_declined` 응답에는 `decline_code`(`insufficient_funds`, `expired_card` 등)가 포함됩니다 — 가능하면
일반 오류 메시지 대신 이를 사용자에게 노출하세요.

## 요청 제한

모든 엔드포인트에서 API 키당 초당 100회. 청구 생성은 초당 25회로 추가 제한됩니다.

## 지원

Ion에 대한 문의는 제품 팀에 문의하거나 커뮤니티 포럼을 방문하세요.
