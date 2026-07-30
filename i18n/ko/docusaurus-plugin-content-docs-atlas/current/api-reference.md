---
title: API 참조
sidebar_position: 4
---

# API 참조

## 인증

`Authorization` 헤더에 베어러 토큰이 필요합니다. 유효하지 않은 키는 `401`, 권한 없는 키는 `403`을
반환합니다.

## 이벤트 수집

`POST /v1/atlas/events` — 요청당 최대 1,000개 이벤트.

**요청**

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

**응답** — `202 Accepted`

```json
{ "accepted": 1, "rejected": 0, "batch_id": "batch_7f2e9a1c" }
```

배치 내 일부 이벤트가 검증에 실패하면 나머지는 수락하고 실패한 항목만 개별 보고합니다:

```json
{
  "accepted": 2,
  "rejected": 1,
  "batch_id": "batch_7f2e9a1c",
  "errors": [{ "index": 2, "code": "invalid_timestamp", "message": "timestamp is more than 24h in the past" }]
}
```

## 원시 이벤트 조회

`GET /v1/atlas/events`

| 매개변수 | 유형 | 설명 |
| --- | --- | --- |
| `user_id` | string | 단일 아이덴티티로 필터링 |
| `name` | string | 단일 이벤트 이름으로 필터링 |
| `since` / `until` | ISO 8601 | 기간(기본값: 최근 24시간) |
| `limit` | integer | 최대 100, 기본값 20 |
| `cursor` | string | 이전 응답의 `next_cursor` |

**응답** — `200 OK`

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

## 퍼널

`POST /v1/atlas/funnels`로 정의를 생성하고, `GET /v1/atlas/funnels/:id`로 현재 결과를 계산해 조회합니다.

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

## 코호트

`GET /v1/atlas/cohorts/:id` — 호출할 때마다 다시 계산됩니다.

```json
{ "id": "cht_3f8a2c", "name": "Active purchasers (30d)", "size": 1847, "last_computed": "2026-07-15T14:32:00Z" }
```

## 오류

| HTTP 상태 | `code` | 의미 |
| --- | --- | --- |
| 400 | `invalid_event_schema` | 필수 필드 누락 또는 잘못된 유형 |
| 400 | `invalid_timestamp` | 24시간 범위를 벗어난 타임스탬프 |
| 401 | `invalid_api_key` | 키 누락, 형식 오류 또는 폐기됨 |
| 403 | `insufficient_scope` | 유효하지만 이 프로젝트에 권한 없음 |
| 413 | `batch_too_large` | 요청당 1,000개 초과 |
| 429 | `rate_limited` | `Retry-After` 헤더를 참고해 재시도하세요 |

## 요청 제한

수집(`/events`)은 API 키당 분당 600회, 조회 엔드포인트는 분당 60회. 제한은 프로젝트가 아닌 키
기준입니다.

## 지원

Atlas에 대한 문의는 제품 팀에 문의하거나 커뮤니티 포럼을 방문하세요.
