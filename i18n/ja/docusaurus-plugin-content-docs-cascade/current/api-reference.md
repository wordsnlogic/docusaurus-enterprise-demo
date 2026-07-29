---
title: API リファレンス
sidebar_position: 3
---

# API リファレンス

## 認証

Cascade API へのすべてのリクエストには、Authorization ヘッダーに有効なベアラートークンを含める必要があります。

## エンドポイント

以下の表は、Cascade API が提供する主なエンドポイントの一覧です。

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/cascade/pipelines` | Create a data pipeline |
| GET | `/v1/cascade/runs/:id` | Get a pipeline run's status |
| POST | `/v1/cascade/pipelines/:id/trigger` | Manually trigger a pipeline run |

## サポート

Cascade に関するご質問は、製品チームまでご連絡いただくか、コミュニティフォーラムをご覧ください。
