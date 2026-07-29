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
| POST | `/v1/delta/syncs` | Create a sync link between two services |
| GET | `/v1/delta/syncs/:id/status` | Check sync lag and health |
| DELETE | `/v1/delta/syncs/:id` | Tear down a sync link |

## サポート

Delta に関するご質問は、製品チームまでご連絡いただくか、コミュニティフォーラムをご覧ください。
