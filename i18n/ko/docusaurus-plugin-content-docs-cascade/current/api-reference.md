---
title: API 참조
sidebar_position: 3
---

# API 참조

## 인증

Cascade API에 대한 모든 요청에는 Authorization 헤더에 유효한 베어러 토큰이 포함되어야 합니다.

## 엔드포인트

아래 표는 Cascade API가 제공하는 주요 엔드포인트를 나열한 것입니다.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/cascade/pipelines` | Create a data pipeline |
| GET | `/v1/cascade/runs/:id` | Get a pipeline run's status |
| POST | `/v1/cascade/pipelines/:id/trigger` | Manually trigger a pipeline run |

## 지원

Cascade에 대한 문의는 제품 팀에 연락하거나 커뮤니티 포럼을 방문해 주세요.
