---
title: API 참조
sidebar_position: 3
---

# API 참조

## 인증

Meridian API에 대한 모든 요청에는 Authorization 헤더에 유효한 베어러 토큰이 포함되어야 합니다.

## 엔드포인트

아래 표는 Meridian API가 제공하는 주요 엔드포인트를 나열한 것입니다.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/meridian/workflows` | Create a workflow |
| POST | `/v1/meridian/workflows/:id/runs` | Trigger a workflow run |
| GET | `/v1/meridian/workflows/:id/runs/:runId` | Get run status and step output |

## 지원

Meridian에 대한 문의는 제품 팀에 연락하거나 커뮤니티 포럼을 방문해 주세요.
