---
title: 소개
sidebar_position: 1
---

# 소개

Atlas는 Northwind Cloud의 제품 분석 API입니다. 이벤트를 전송하면 퍼널, 리텐션 코호트, 조회 가능한 원시
데이터를 얻을 수 있습니다.

## Atlas가 아닌 것

Atlas는 이벤트 API이며 완전한 CDP가 아닙니다 — reverse-ETL이나 다중 대상 팬아웃은 지원하지 않습니다.
파이프라인/웨어하우스 작업이 필요하면 [Cascade](/docs/cascade/intro)와 함께 사용하세요.

## 주요 기능

- 1초 이내 실시간 이벤트 스트리밍
- 배치가 아닌 실시간으로 계산되는 퍼널과 코호트
- [쿼리 엔드포인트](./api-reference.md)를 통한 SQL 기반 애드혹 쿼리

## 시작하기 전에

[시작하기](./getting-started.md)로 넘어가기 전에 [개념](./concepts.md)을 먼저 읽으세요 — 가장 흔한
통합 실수인 이벤트 이름 불일치로 인한 퍼널 붕괴를 미리 방지할 수 있습니다.
