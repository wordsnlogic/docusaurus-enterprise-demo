---
title: API リファレンス
sidebar_position: 3
---

# API リファレンス

## 認証

Kepler API へのすべてのリクエストには、Authorization ヘッダーに有効なベアラートークンを含める必要があります。

## エンドポイント

以下の表は、Kepler API が提供する主なエンドポイントの一覧です。

| Method | Path | Description |
| --- | --- | --- |
| GET | `/v1/kepler/status` | Health/status check |
| GET | `/v1/kepler/resources` | List resources |
| POST | `/v1/kepler/resources` | Create a resource |
| DELETE | `/v1/kepler/resources/:id` | Delete a resource |

## サポート

Kepler に関するご質問は、製品チームまでご連絡いただくか、コミュニティフォーラムをご覧ください。
