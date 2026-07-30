---
title: API 참조
sidebar_position: 4
---

# API 참조

## 인증

두 가지 자격 증명을 혼동하지 마세요:

- **서비스 API 키** — 사용자 생성, SSO 구성 등 서버 간 호출용. 클라이언트 코드에 노출 금지.
- **세션 토큰** — `POST /v1/genesis/sessions`가 반환하는 단명 토큰으로, 로그인한 사용자를 대신해
  동작합니다.

## 사용자 생성

`POST /v1/genesis/users`

```json
{ "email": "jordan@acme.com", "roles": ["member"] }
```

**응답** — `201 Created`

```json
{ "id": "usr_3f8a2c", "email": "jordan@acme.com", "roles": ["member"], "created": "2026-07-20T09:14:22Z" }
```

## 세션 시작

`POST /v1/genesis/sessions`

```json
{ "email": "jordan@acme.com", "password": "user-entered-password" }
```

**응답** — `200 OK`

```json
{
  "session_id": "sess_6k2p9x",
  "user_id": "usr_3f8a2c",
  "expires_at": "2026-07-21T09:14:22Z",
  "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

계정에 MFA가 활성화되어 있으면 `403 mfa_required`가 반환되며, 동일 자격 증명과 `mfa_code`를 포함해
`/v1/genesis/sessions/mfa`로 재요청해야 합니다.

## SSO 구성

`POST /v1/genesis/sso/connections`

```json
{ "domain": "acme.com", "protocol": "saml", "metadata_url": "https://acme.okta.com/app/exkabc123/sso/saml/metadata" }
```

`protocol`은 `"saml"` 또는 `"oidc"`입니다. 활성화되면 해당 도메인의 모든 사용자는 비밀번호 로그인이
비활성화됩니다.

## 오류

| HTTP 상태 | `code` | 의미 |
| --- | --- | --- |
| 401 | `invalid_credentials` | 이메일/비밀번호 불일치 |
| 403 | `mfa_required` | 자격 증명은 맞지만 MFA 완료 필요 |
| 403 | `sso_required` | 해당 도메인에 활성 SSO 연결이 있어 비밀번호 로그인 비활성화 |
| 429 | `too_many_attempts` | 15분 내 5회 실패 시 계정 임시 잠금 |

`too_many_attempts` 잠금은 15분 후 자동 해제됩니다 — 수동 해제 엔드포인트는 계정 탈취 벡터를 막기 위해
의도적으로 제공하지 않습니다.

## 요청 제한

IP당 분당 20회 로그인 시도, 계정별 잠금과는 별개로 적용됩니다.

## 지원

Genesis에 대한 문의는 제품 팀에 문의하거나 커뮤니티 포럼을 방문하세요.
