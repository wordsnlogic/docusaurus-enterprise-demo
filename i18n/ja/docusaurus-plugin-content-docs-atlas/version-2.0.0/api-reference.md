---
title: API リファレンス
sidebar_position: 4
---

# API リファレンス

## 認証

`Authorization` ヘッダーにベアラートークンが必要です。無効なキーは `401`、権限のないキーは `403`
を返します。

## イベントを取り込む

`POST /v1/atlas/events` —— 1リクエストあたり最大1,000件のイベント。

**リクエスト**

```json
{
  "events": [
    {
      "name": "checkout_completed",
      "user_id": "usr_8f3a1c",
      "timestamp": "2026-07-15T14:32:00Z",
      "properties": { "order_id": "ord_29xk3", "revenue": 84.50, "currency": "USD", "items": 3 }
    }
  ]
}
```

**レスポンス** —— `202 Accepted`

```json
{ "accepted": 1, "rejected": 0, "batch_id": "batch_7f2e9a1c" }
```

バッチ内の一部のイベントが検証に失敗した場合、有効なものは取り込まれ、失敗分は個別に報告されます：

```json
{
  "accepted": 2,
  "rejected": 1,
  "batch_id": "batch_7f2e9a1c",
  "errors": [{ "index": 2, "code": "invalid_timestamp", "message": "timestamp is more than 24h in the past" }]
}
```

## 生イベントを照会する

`GET /v1/atlas/events`

| パラメータ | 型 | 説明 |
| --- | --- | --- |
| `user_id` | string | 単一のアイデンティティで絞り込み |
| `name` | string | 単一のイベント名で絞り込み |
| `since` / `until` | ISO 8601 | 期間（デフォルトは過去24時間） |
| `limit` | integer | 最大100、デフォルト20 |
| `cursor` | string | 前回レスポンスの `next_cursor` |

**レスポンス** —— `200 OK`

```json
{
  "data": [
    {
      "id": "evt_4k2p91xz",
      "name": "checkout_completed",
      "user_id": "usr_8f3a1c",
      "timestamp": "2026-07-15T14:32:00Z",
      "properties": { "revenue": 84.50, "currency": "USD", "items": 3 }
    }
  ],
  "next_cursor": "eyJvZmZzZXQiOjIwfQ==",
  "has_more": true
}
```

## ファネル

`POST /v1/atlas/funnels` で定義を作成し、`GET /v1/atlas/funnels/:id` で現在の結果を計算・取得します。

```json
{ "name": "Signup to purchase", "steps": ["signup_completed", "product_viewed", "checkout_completed"], "window": "7d" }
```

```json
{
  "id": "fnl_9x2k3p",
  "name": "Signup to purchase",
  "steps": [
    { "name": "signup_completed", "count": 4200, "conversion_from_previous": 1.0 },
    { "name": "product_viewed", "count": 3110, "conversion_from_previous": 0.74 },
    { "name": "checkout_completed", "count": 892, "conversion_from_previous": 0.29 }
  ]
}
```

## コホート

`GET /v1/atlas/cohorts/:id` —— 呼び出すたびに再計算されます。

```json
{ "id": "cht_3f8a2c", "name": "Active purchasers (30d)", "size": 1847, "last_computed": "2026-07-15T14:32:00Z" }
```

## エラー

| HTTP ステータス | `code` | 意味 |
| --- | --- | --- |
| 400 | `invalid_event_schema` | 必須フィールドの欠落または型の誤り |
| 400 | `invalid_timestamp` | タイムスタンプが24時間の範囲外 |
| 401 | `invalid_api_key` | キーの欠落・不正な形式・失効 |
| 403 | `insufficient_scope` | キーは有効だがこのプロジェクトへの権限がない |
| 413 | `batch_too_large` | 1リクエストで1,000件を超えている |
| 429 | `rate_limited` | `Retry-After` ヘッダーに従って再試行してください |

## レート制限

取り込み（`/events`）は API キーごとに毎分600リクエスト、照会系エンドポイントは毎分60リクエスト。
制限はプロジェクト単位ではなくキー単位です。

## サポート

Atlas に関するご質問は、製品チームまでご連絡いただくか、コミュニティフォーラムをご覧ください。
