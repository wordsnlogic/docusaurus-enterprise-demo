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
| POST | `/v1/juno/jobs` | Schedule a job |
| GET | `/v1/juno/jobs/:id/runs` | List a job's execution history |
| POST | `/v1/juno/jobs/:id/pause` | Pause a scheduled job |

## サポート

Juno に関するご質問は、製品チームまでご連絡いただくか、コミュニティフォーラムをご覧ください。
