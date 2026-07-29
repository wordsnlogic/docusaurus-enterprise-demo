---
title: API リファレンス
sidebar_position: 3
---

# API リファレンス

## 認証

Falcon API へのすべてのリクエストには、Authorization ヘッダーに有効なベアラートークンを含める必要があります。

## エンドポイント

以下の表は、Falcon API が提供する主なエンドポイントの一覧です。

| Method | Path | Description |
| --- | --- | --- |
| GET | `/v1/falcon/status` | Health/status check |
| GET | `/v1/falcon/resources` | List resources |
| POST | `/v1/falcon/resources` | Create a resource |
| DELETE | `/v1/falcon/resources/:id` | Delete a resource |

## サポート

Falcon に関するご質問は、製品チームまでご連絡いただくか、コミュニティフォーラムをご覧ください。
