---
title: API 참조
sidebar_position: 3
---

# API 참조

## 인증

Kepler API에 대한 모든 요청에는 Authorization 헤더에 유효한 베어러 토큰이 포함되어야 합니다.

## 엔드포인트

아래 표는 Kepler API가 제공하는 주요 엔드포인트를 나열한 것입니다.

| Method | Path | Description |
| --- | --- | --- |
| GET | `/v1/kepler/status` | Health/status check |
| GET | `/v1/kepler/resources` | List resources |
| POST | `/v1/kepler/resources` | Create a resource |
| DELETE | `/v1/kepler/resources/:id` | Delete a resource |

## 지원

Kepler에 대한 문의는 제품 팀에 연락하거나 커뮤니티 포럼을 방문해 주세요.
