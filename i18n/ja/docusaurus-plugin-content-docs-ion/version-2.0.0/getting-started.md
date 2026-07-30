---
title: 使ってみる
sidebar_position: 3
---

# 使ってみる

## 前提条件

Ion が有効な Northwind Cloud アカウントと、テスト用シークレットキー（`sk_test_...`）が必要です。
このガイドでは一貫してテストモードを使用します。

## Charge を作成する

**cURL**

```bash
curl https://api.northwind.cloud/v1/ion/charges \
  -H "Authorization: Bearer $ION_SECRET_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "amount": 4200,
    "currency": "usd",
    "payment_method": "pm_card_test_visa",
    "idempotency_key": "order_9f3e-attempt-1"
  }'
```

**Node.js**

```js
import { Ion } from "@northwind/ion";

const ion = new Ion({ apiKey: process.env.ION_SECRET_KEY });

const charge = await ion.charges.create({
  amount: 4200,
  currency: "usd",
  paymentMethod: "pm_card_test_visa",
  idempotencyKey: "order_9f3e-attempt-1",
});
```

**Python**

```python
from northwind_ion import Ion

ion = Ion(api_key=os.environ["ION_SECRET_KEY"])

charge = ion.charges.create(
    amount=4200,
    currency="usd",
    payment_method="pm_card_test_visa",
    idempotency_key="order_9f3e-attempt-1",
)
```

`amount: 4200` と `currency: "usd"` は $42.00 です（[コンセプト](./concepts.md)
参照）。`pm_card_test_visa` は常に成功するテスト用支払い方法です。`pm_card_test_decline` で
失敗処理をテストできます——本番公開前に必ずテストしてください。詳細は[エラー](./api-reference.md)を参照。

## 必ず冪等キーを設定する

ネットワーク呼び出しが Ion への到達後、レスポンス受信前にタイムアウトした場合、**同じ**キーで
再試行すれば2件目の Charge を作成せず元の結果が返ります。ランダムな値ではなく、注文 ID のような
自分のシステム内で安定した値に紐づけてください。

## 動作確認

```bash
curl https://api.northwind.cloud/v1/ion/charges/ch_3P8kq2Aa \
  -H "Authorization: Bearer $ION_SECRET_KEY"
```

`status: "succeeded"` が返れば、テストモードでの Charge が成功しています。フィールドの全リファレンスは
[API リファレンス](./api-reference.md)を参照してください。
