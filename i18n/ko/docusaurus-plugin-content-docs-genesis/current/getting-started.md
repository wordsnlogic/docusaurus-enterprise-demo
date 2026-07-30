---
title: 시작하기
sidebar_position: 3
---

# 시작하기

## 사전 준비 사항

Genesis가 활성화된 Northwind Cloud 계정과 서버 간 API 키(**설정 → API 키**)가 필요합니다.

## 사용자 생성

**cURL**

```bash
curl https://api.northwind.cloud/v1/genesis/users \
  -H "Authorization: Bearer $GENESIS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "email": "jordan@acme.com", "roles": ["member"] }'
```

**Node.js**

```js
import { Genesis } from "@northwind/genesis";

const genesis = new Genesis({ apiKey: process.env.GENESIS_API_KEY });

const user = await genesis.users.create({
  email: "jordan@acme.com",
  roles: ["member"],
});
```

**Python**

```python
from northwind_genesis import Genesis

genesis = Genesis(api_key=os.environ["GENESIS_API_KEY"])

user = genesis.users.create(email="jordan@acme.com", roles=["member"])
```

## 세션 시작(로그인)

세션은 로그인 폼 제출 핸들러에서 호출되는 별도의 사용자 흐름으로 생성됩니다:

```bash
curl https://api.northwind.cloud/v1/genesis/sessions \
  -H "Content-Type: application/json" \
  -d '{ "email": "jordan@acme.com", "password": "user-entered-password" }'
```

성공 응답에는 단명 `token`이 포함됩니다. MFA가 활성화된 계정이면 `403 mfa_required`가 반환되며
[API 참조](./api-reference.md)의 후속 단계가 필요합니다.

## 고객 도메인용 SSO 설정

```bash
curl https://api.northwind.cloud/v1/genesis/sso/connections \
  -H "Authorization: Bearer $GENESIS_API_KEY" \
  -d '{ "domain": "acme.com", "protocol": "saml", "metadata_url": "https://acme.okta.com/app/.../sso/saml/metadata" }'
```

**프로덕션이 아닌 도메인으로 먼저 테스트하세요.** 연결이 활성화되면 해당 도메인의 모든 사용자는
비밀번호 로그인이 비활성화됩니다 — 이유는 [개념](./concepts.md)을 참고하세요.
