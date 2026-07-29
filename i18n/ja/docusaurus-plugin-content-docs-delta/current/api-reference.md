---
title: API リファレンス
sidebar_position: 3
---

# API リファレンス

## 認証

Delta API へのすべてのリクエストには、Authorization ヘッダーに有効なベアラートークンを含める必要があります。

## エンドポイント

以下の表は、Delta API が提供する主なエンドポイントの一覧です。

| Method | Path | Description |
| --- | --- | --- |
| GET | `/v1/delta/status` | Health/status check |
| GET | `/v1/delta/resources` | List resources |
| POST | `/v1/delta/resources` | Create a resource |
| DELETE | `/v1/delta/resources/:id` | Delete a resource |

## サポート

Delta に関するご質問は、製品チームまでご連絡いただくか、コミュニティフォーラムをご覧ください。
