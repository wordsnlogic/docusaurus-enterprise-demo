---
title: 使ってみる
sidebar_position: 3
---

# 使ってみる

## 前提条件

Northwind Cloud アカウントと Atlas API キー（**設定 → API キー**）が必要です。ステージングと
本番では別のキーを使用してください。

## 最初のイベントを送信する

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

3つとも同じ `POST /v1/atlas/events`（[API リファレンス](./api-reference.md)参照）の
薄いラッパーです。

## ユーザーを識別する

匿名の訪問者が後でログインした場合、新しい `user_id` で過去のイベントを再送信せず、
アイデンティティマージエンドポイントを使用してください：

```bash
curl https://api.northwind.cloud/v1/atlas/identities/merge \
  -H "Authorization: Bearer $ATLAS_API_KEY" \
  -d '{ "anonymous_id": "anon_x92k1", "user_id": "usr_8f3a1c" }'
```

## 動作確認

```bash
curl "https://api.northwind.cloud/v1/atlas/events?user_id=usr_8f3a1c&limit=1" \
  -H "Authorization: Bearer $ATLAS_API_KEY"
```

`data` 配列が空の場合、取り込み失敗と判断する前に API キーの環境（ステージング/本番）を
確認してください。
