---
title: API リファレンス
sidebar_position: 3
---

# API リファレンス

## 認証

Juno API へのすべてのリクエストには、Authorization ヘッダーに有効なベアラートークンを含める必要があります。

## エンドポイント

以下の表は、Juno API が提供する主なエンドポイントの一覧です。

| Method | Path | Description |
| --- | --- | --- |
| GET | `/v1/juno/status` | Health/status check |
| GET | `/v1/juno/resources` | List resources |
| POST | `/v1/juno/resources` | Create a resource |
| DELETE | `/v1/juno/resources/:id` | Delete a resource |

## サポート

Juno に関するご質問は、製品チームまでご連絡いただくか、コミュニティフォーラムをご覧ください。
