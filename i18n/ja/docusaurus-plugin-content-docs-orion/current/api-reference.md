---
title: API リファレンス
sidebar_position: 3
---

# API リファレンス

## 認証

Orion API へのすべてのリクエストには、Authorization ヘッダーに有効なベアラートークンを含める必要があります。

## エンドポイント

以下の表は、Orion API が提供する主なエンドポイントの一覧です。

| Method | Path | Description |
| --- | --- | --- |
| GET | `/v1/orion/status` | Health/status check |
| GET | `/v1/orion/resources` | List resources |
| POST | `/v1/orion/resources` | Create a resource |
| DELETE | `/v1/orion/resources/:id` | Delete a resource |

## サポート

Orion に関するご質問は、製品チームまでご連絡いただくか、コミュニティフォーラムをご覧ください。
