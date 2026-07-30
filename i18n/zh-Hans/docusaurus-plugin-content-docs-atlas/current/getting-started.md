---
title: 快速入门
sidebar_position: 3
---

# 快速入门

## 前提条件

需要 Northwind Cloud 账户和 Atlas API 密钥（**设置 → API 密钥**）。预发布和生产环境请使用不同密钥。

## 发送第一个事件

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

三种方式本质相同，都是对 `POST /v1/atlas/events`（见[API 参考](./api-reference.md)）
的简单封装。

## 识别用户

匿名访客登录后，不要用新 `user_id` 重发历史事件，应使用身份合并接口：

```bash
curl https://api.northwind.cloud/v1/atlas/identities/merge \
  -H "Authorization: Bearer $ATLAS_API_KEY" \
  -d '{ "anonymous_id": "anon_x92k1", "user_id": "usr_8f3a1c" }'
```

## 验证是否成功

```bash
curl "https://api.northwind.cloud/v1/atlas/events?user_id=usr_8f3a1c&limit=1" \
  -H "Authorization: Bearer $ATLAS_API_KEY"
```

如果 `data` 数组为空，请先检查 API 密钥所属环境，再判断是否为写入失败。
