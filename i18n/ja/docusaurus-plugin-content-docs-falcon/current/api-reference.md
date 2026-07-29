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
| POST | `/v1/falcon/indexes` | Create a search index |
| POST | `/v1/falcon/indexes/:id/documents` | Index a batch of documents |
| POST | `/v1/falcon/indexes/:id/query` | Run a search query |

## サポート

Falcon に関するご質問は、製品チームまでご連絡いただくか、コミュニティフォーラムをご覧ください。
