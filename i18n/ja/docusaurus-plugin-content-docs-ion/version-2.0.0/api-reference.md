---
title: API リファレンス
sidebar_position: 4
---

# API リファレンス

## 認証

`Authorization` ヘッダーにベアラートークン。テストキーとライブキーは別々の認証情報であり、
テストキーが誤って実際の資金を動かすことはありません。

## Charge を作成する

`POST /v1/ion/charges`

**リクエスト**

```json
{
  "amount": 4200,
  "currency": "usd",
  "customer": "cus_h82ndk3",
  "payment_method": "pm_1a2b3c",
  "idempotency_key": "order_9f3e-attempt-1"
}
```

**レスポンス** —— `200 OK`

```json
{
  "id": "ch_3P8kq2Aa",
  "amount": 4200,
  "currency": "usd",
  "status": "succeeded",
  "customer": "cus_h82ndk3",
  "created": "2026-07-20T09:14:22Z"
}
```

`status` は `succeeded`、`pending`（一部のローカル決済手段は非同期決済）、`failed` のいずれかです。

## 顧客を作成する

`POST /v1/ion/customers`

```json
{ "email": "jordan@acme.com", "payment_method": "pm_1a2b3c" }
```

レスポンスの `id`（`cus_...`）を以降の Charge やサブスクリプションで再利用します。

## サブスクリプションを作成する

`POST /v1/ion/subscriptions`

```json
{ "customer": "cus_h82ndk3", "plan": "plan_pro_monthly", "idempotency_key": "sub_acme_pro-2026-07" }
```

```json
{ "id": "sub_7k2p9x", "status": "active", "current_period_end": "2026-08-20T09:14:22Z" }
```

## 返金する

`POST /v1/ion/refunds`

```json
{ "charge": "ch_3P8kq2Aa", "amount": 2000 }
```

`amount` を省略すると全額返金されます。累計額が元の Charge 金額を超えない限り、部分返金は複数回
可能です。

## エラー

| HTTP ステータス | `code` | 意味 |
| --- | --- | --- |
| 400 | `invalid_currency` | サポートされていない通貨、またはその通貨の補助単位に対して不正な金額 |
| 402 | `card_declined` | カード発行会社が支払い方法を拒否した |
| 404 | `no_such_charge` | 参照した ID が存在しない |
| 409 | `idempotency_key_reused` | 同じキーで元とは異なるリクエストボディが使用された |
| 429 | `rate_limited` | `Retry-After` ヘッダーに従って再試行してください |

`card_declined` のレスポンスには `decline_code`（`insufficient_funds`、`expired_card` など）が
含まれます——可能な限り、汎用的な失敗メッセージではなくこれをエンドユーザーに表示してください。

## レート制限

全エンドポイント合計で API キーごとに毎秒100リクエスト。Charge 作成はさらに毎秒25リクエストに
制限されます。

## サポート

Ion に関するご質問は、製品チームまでご連絡いただくか、コミュニティフォーラムをご覧ください。
