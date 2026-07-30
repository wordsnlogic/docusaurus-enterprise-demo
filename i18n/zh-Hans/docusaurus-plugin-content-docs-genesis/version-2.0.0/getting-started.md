---
title: 快速入门
sidebar_position: 3
---

# 快速入门

## 前提条件

需要已启用 Genesis 的 Northwind Cloud 账户，以及服务间 API 密钥（**设置 → API 密钥**）。

## 创建用户

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

## 开始会话（登录）

会话通过独立的用户端流程创建，通常在登录表单提交处理中调用，而非使用服务密钥：

```bash
curl https://api.northwind.cloud/v1/genesis/sessions \
  -H "Content-Type: application/json" \
  -d '{ "email": "jordan@acme.com", "password": "user-entered-password" }'
```

成功响应包含短期 `token`。若账户启用了 MFA，此调用会返回 `403 mfa_required`，需按
[API 参考](./api-reference.md)中的后续步骤完成验证。

## 为客户域名配置 SSO

```bash
curl https://api.northwind.cloud/v1/genesis/sso/connections \
  -H "Authorization: Bearer $GENESIS_API_KEY" \
  -d '{ "domain": "acme.com", "protocol": "saml", "metadata_url": "https://acme.okta.com/app/.../sso/saml/metadata" }'
```

**请先在非生产域名上测试。** 连接一旦启用，该域名下所有用户的密码登录都会被禁用——原因见
[核心概念](./concepts.md)。
