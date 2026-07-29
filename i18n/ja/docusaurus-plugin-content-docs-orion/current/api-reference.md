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
| PUT | `/v1/orion/buckets/:bucket/objects/:key` | Upload an object |
| GET | `/v1/orion/buckets/:bucket/objects/:key` | Retrieve an object |
| POST | `/v1/orion/buckets/:bucket/purge` | Purge CDN cache for a path |

## サポート

Orion に関するご質問は、製品チームまでご連絡いただくか、コミュニティフォーラムをご覧ください。
