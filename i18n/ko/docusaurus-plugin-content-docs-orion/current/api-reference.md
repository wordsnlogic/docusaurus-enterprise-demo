---
title: API 참조
sidebar_position: 3
---

# API 참조

## 인증

Orion API에 대한 모든 요청에는 Authorization 헤더에 유효한 베어러 토큰이 포함되어야 합니다.

## 엔드포인트

아래 표는 Orion API가 제공하는 주요 엔드포인트를 나열한 것입니다.

| Method | Path | Description |
| --- | --- | --- |
| PUT | `/v1/orion/buckets/:bucket/objects/:key` | Upload an object |
| GET | `/v1/orion/buckets/:bucket/objects/:key` | Retrieve an object |
| POST | `/v1/orion/buckets/:bucket/purge` | Purge CDN cache for a path |

## 지원

Orion에 대한 문의는 제품 팀에 연락하거나 커뮤니티 포럼을 방문해 주세요.
