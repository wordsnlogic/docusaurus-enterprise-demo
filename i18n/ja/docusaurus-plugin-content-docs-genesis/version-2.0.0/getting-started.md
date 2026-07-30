---
title: 使ってみる
sidebar_position: 3
---

# 使ってみる

## 前提条件

Genesis が有効な Northwind Cloud アカウントと、サービス間 API キー（**設定 → API キー**）が
必要です。

## ユーザーを作成する

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

## セッションを開始する（ログイン）

セッションは、サービス API キーではなく、通常ログインフォームの送信ハンドラーから呼び出される
別のユーザー向けフローで作成されます：

```bash
curl https://api.northwind.cloud/v1/genesis/sessions \
  -H "Content-Type: application/json" \
  -d '{ "email": "jordan@acme.com", "password": "user-entered-password" }'
```

成功時のレスポンスには短命な `token` が含まれます。アカウントで MFA が有効な場合、代わりに
`403 mfa_required` が返され、[API リファレンス](./api-reference.md)にある後続の
MFA 検証ステップが必要です。

## 顧客ドメインの SSO を設定する

```bash
curl https://api.northwind.cloud/v1/genesis/sso/connections \
  -H "Authorization: Bearer $GENESIS_API_KEY" \
  -d '{ "domain": "acme.com", "protocol": "saml", "metadata_url": "https://acme.okta.com/app/.../sso/saml/metadata" }'
```

**まず本番以外のドメインでテストしてください。** 接続が有効になると、そのドメインの全ユーザーの
パスワードログインが無効化されます——理由は[コンセプト](./concepts.md)を参照してください。
