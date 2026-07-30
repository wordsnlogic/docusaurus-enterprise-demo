---
title: API 参考
sidebar_position: 4
---

# API 参考

## 身份验证

请勿混淆以下两种凭证：

- **服务 API 密钥** —— 用于创建用户、配置 SSO 等服务间调用，切勿在客户端代码中暴露。
- **会话令牌** —— 由 `POST /v1/genesis/sessions` 返回的短期令牌，用于代表已登录用户操作。

## 创建用户

`POST /v1/genesis/users`

```json
{ "email": "jordan@acme.com", "roles": ["member"] }
```

**响应** —— `201 Created`

```json
{ "id": "usr_3f8a2c", "email": "jordan@acme.com", "roles": ["member"], "created": "2026-07-20T09:14:22Z" }
```

## 开始会话

`POST /v1/genesis/sessions`

```json
{ "email": "jordan@acme.com", "password": "user-entered-password" }
```

**响应** —— `200 OK`

```json
{
  "session_id": "sess_6k2p9x",
  "user_id": "usr_3f8a2c",
  "expires_at": "2026-07-21T09:14:22Z",
  "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

若账户启用 MFA，此调用返回 `403 mfa_required`，需携带相同凭证及 `mfa_code` 重新提交至
`/v1/genesis/sessions/mfa`。

## 配置 SSO

`POST /v1/genesis/sso/connections`

```json
{ "domain": "acme.com", "protocol": "saml", "metadata_url": "https://acme.okta.com/app/exkabc123/sso/saml/metadata" }
```

`protocol` 取值为 `"saml"` 或 `"oidc"`。启用后，该域名下所有用户的密码登录都会被禁用。

## 错误

| HTTP 状态码 | `code` | 含义 |
| --- | --- | --- |
| 401 | `invalid_credentials` | 邮箱/密码不匹配 |
| 403 | `mfa_required` | 凭证正确，但需完成 MFA 验证 |
| 403 | `sso_required` | 该邮箱域名已启用 SSO，密码登录已禁用 |
| 429 | `too_many_attempts` | 15 分钟内失败 5 次后账户临时锁定 |

`too_many_attempts` 锁定会在 15 分钟后自动解除——我们刻意不提供人工解锁接口，以避免由客服发起解锁
带来的账户接管风险。

## 速率限制

每个 IP 每分钟 20 次登录尝试，与账户级锁定机制相互独立。

## 技术支持

如对 Genesis 有任何疑问，请联系产品团队或访问社区论坛。
