---
title: API リファレンス
sidebar_position: 3
---

# API リファレンス

## 認証

Horizon API へのすべてのリクエストには、Authorization ヘッダーに有効なベアラートークンを含める必要があります。

## エンドポイント

以下の表は、Horizon API が提供する主なエンドポイントの一覧です。

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/horizon/dashboards` | Create a dashboard |
| GET | `/v1/horizon/dashboards/:id/embed-token` | Generate a signed embed token |
| GET | `/v1/horizon/datasets` | List connected datasets |

## サポート

Horizon に関するご質問は、製品チームまでご連絡いただくか、コミュニティフォーラムをご覧ください。
