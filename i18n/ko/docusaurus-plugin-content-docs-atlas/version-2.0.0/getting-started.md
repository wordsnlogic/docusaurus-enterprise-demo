---
title: 시작하기
sidebar_position: 3
---

# 시작하기

## 사전 준비 사항

Northwind Cloud 계정과 Atlas API 키(**설정 → API 키**)가 필요합니다. 스테이징과 프로덕션에 별도의
키를 사용하세요.

## 첫 이벤트 보내기

**cURL**

```bash
curl https://api.northwind.cloud/v1/atlas/events \
  -H "Authorization: Bearer $ATLAS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "events": [{
      "name": "checkout_completed",
      "user_id": "usr_8f3a1c",
      "timestamp": "2026-07-15T14:32:00Z",
      "properties": { "revenue": 84.50, "currency": "USD", "items": 3 }
    }]
  }'
```

**Node.js**

```js
import { Atlas } from "@northwind/atlas";

const atlas = new Atlas({ apiKey: process.env.ATLAS_API_KEY });

await atlas.track({
  name: "checkout_completed",
  userId: "usr_8f3a1c",
  properties: { revenue: 84.50, currency: "USD", items: 3 },
});
```

**Python**

```python
from northwind_atlas import Atlas

atlas = Atlas(api_key=os.environ["ATLAS_API_KEY"])

atlas.track(
    name="checkout_completed",
    user_id="usr_8f3a1c",
    properties={"revenue": 84.50, "currency": "USD", "items": 3},
)
```

세 예제 모두 동일한 `POST /v1/atlas/events`를 감싸는 얇은 래퍼입니다
([API 참조](./api-reference.md) 참고).

## 사용자 식별

익명 방문자가 로그인하면 과거 이벤트를 다시 보내지 말고 아이덴티티 병합을 사용하세요:

```bash
curl https://api.northwind.cloud/v1/atlas/identities/merge \
  -H "Authorization: Bearer $ATLAS_API_KEY" \
  -d '{ "anonymous_id": "anon_x92k1", "user_id": "usr_8f3a1c" }'
```

## 정상 작동 확인

```bash
curl "https://api.northwind.cloud/v1/atlas/events?user_id=usr_8f3a1c&limit=1" \
  -H "Authorization: Bearer $ATLAS_API_KEY"
```

`data` 배열이 비어 있다면 수집 실패로 단정하기 전에 API 키의 환경(스테이징/프로덕션)을 먼저
확인하세요.
