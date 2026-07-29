---
title: API リファレンス
sidebar_position: 3
---

# API リファレンス

## 認証

Nova API へのすべてのリクエストには、Authorization ヘッダーに有効なベアラートークンを含める必要があります。

## エンドポイント

以下の表は、Nova API が提供する主なエンドポイントの一覧です。

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/nova/models` | Deploy a model |
| POST | `/v1/nova/models/:id/predict` | Run inference against a deployed model |
| GET | `/v1/nova/models/:id/metrics` | Get latency and throughput metrics |

## サポート

Nova に関するご質問は、製品チームまでご連絡いただくか、コミュニティフォーラムをご覧ください。
