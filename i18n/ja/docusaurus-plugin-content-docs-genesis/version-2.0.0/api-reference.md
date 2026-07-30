---
title: API リファレンス
sidebar_position: 4
---

# API リファレンス

## 認証

以下の2種類の認証情報を混同しないでください：

- **サービス API キー** —— ユーザー作成や SSO 設定などのサービス間呼び出し用。クライアント側の
  コードで公開しないでください。
- **セッショントークン** —— `POST /v1/genesis/sessions` が返す短命なトークンで、ログイン中の
  ユーザーに代わって操作するために使用します。

## ユーザーを作成する

`POST /v1/genesis/users`

```json
{ "email": "jordan@acme.com", "roles": ["member"] }
```

**レスポンス** —— `201 Created`

```json
{ "id": "usr_3f8a2c", "email": "jordan@acme.com", "roles": ["member"], "created": "2026-07-20T09:14:22Z" }
```

## セッションを開始する

`POST /v1/genesis/sessions`

```json
{ "email": "jordan@acme.com", "password": "user-entered-password" }
```

**レスポンス** —— `200 OK`

```json
{
  "session_id": "sess_6k2p9x",
  "user_id": "usr_3f8a2c",
  "expires_at": "2026-07-21T09:14:22Z",
  "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

アカウントで MFA が有効な場合、代わりに `403 mfa_required` が返されます。同じ認証情報と
`mfa_code` を添えて `/v1/genesis/sessions/mfa` に再送信してください。

## SSO を設定する

`POST /v1/genesis/sso/connections`

```json
{ "domain": "acme.com", "protocol": "saml", "metadata_url": "https://acme.okta.com/app/exkabc123/sso/saml/metadata" }
```

`protocol` は `"saml"` または `"oidc"` です。有効化されると、そのドメインの全ユーザーの
パスワードログインが無効化されます。

## エラー

| HTTP ステータス | `code` | 意味 |
| --- | --- | --- |
| 401 | `invalid_credentials` | メールアドレス/パスワードが一致しない |
| 403 | `mfa_required` | 認証情報は正しいが MFA の完了が必要 |
| 403 | `sso_required` | このメールのドメインで SSO 接続が有効なため、パスワードログインは無効 |
| 429 | `too_many_attempts` | 15分以内に5回失敗するとアカウントが一時ロックされる |

`too_many_attempts` によるロックは15分後に自動解除されます——サポート主導の解除によるアカウント
乗っ取りのリスクを避けるため、意図的に手動解除エンドポイントは提供していません。

## レート制限

IP アドレスごとに毎分20回のログイン試行。アカウント単位のロックとは独立して適用されます。

## サポート

Genesis に関するご質問は、製品チームまでご連絡いただくか、コミュニティフォーラムをご覧ください。
