---
title: 시작하기
sidebar_position: 2
---

# 시작하기

## 사전 준비 사항

시작하기 전에 Northwind Cloud 계정과 Lumen에 대한 API 접근 권한이 활성화되어 있는지 확인하세요.

## 설치

원하는 패키지 관리자를 사용하여 Lumen SDK를 설치한 다음, 프로젝트 API 키로 초기화하세요.

```bash
npm install @northwind/lumen
```

## 빠른 시작

Lumen를 가장 빠르게 체험하는 방법은 로컬 환경에서 빠른 시작 예제를 실행하는 것입니다.

```js
import { Lumen } from "@northwind/lumen";

const client = new Lumen({ apiKey: process.env.NORTHWIND_API_KEY });
```
