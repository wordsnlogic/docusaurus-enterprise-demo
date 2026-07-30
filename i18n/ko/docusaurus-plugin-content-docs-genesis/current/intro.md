---
title: 소개
sidebar_position: 1
---

# 소개

Genesis는 Northwind Cloud의 아이덴티티 플랫폼입니다 — 사용자 계정, 세션, 역할 기반 권한, 엔터프라이즈
SSO(SAML/OIDC)를 제공해 인증을 처음부터 만들 필요가 없습니다.

## 이런 분들께 적합합니다

B2C 제품이라면 세션과 패스키/매직링크 엔드포인트를 주로 사용합니다. 엔터프라이즈 고객이 있다면
[SSO 연결](./concepts.md)이 필요하며, 각 고객의 ID 공급자(Okta, Azure AD, Google Workspace)가
같은 SAML/OIDC 규격 내에서도 조금씩 다르게 동작하므로 통합 시간을 넉넉히 잡으세요.

## 주요 기능

- 고객 이메일 도메인 단위 SAML 및 OIDC SSO
- 비밀번호 없는 매직링크 및 WebAuthn 패스키 로그인
- 역할이 아닌 권한 기반의 세밀한 접근 제어

## 시작하기 전에

[개념](./concepts.md)에서 세션/토큰 모델과 SSO 도메인 강제 동작을 먼저 읽으세요 — 첫 통합에서 가장
흔히 걸려 넘어지는 부분입니다.
