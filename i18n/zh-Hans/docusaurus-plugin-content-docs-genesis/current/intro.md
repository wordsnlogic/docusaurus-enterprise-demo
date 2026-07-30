---
title: 简介
sidebar_position: 1
---

# 简介

Genesis 是 Northwind Cloud 的身份平台：用户账户、会话、基于角色的权限，以及企业级 SSO
（SAML/OIDC），让你无需从零构建认证系统。

## 适用对象

如果你在构建 B2C 产品，主要会用到会话和通行密钥/魔法链接接口。如果面向企业客户，还需要
[SSO 连接](./concepts.md)——请预留额外集成时间，因为即使遵循相同的 SAML/OIDC 规范，每个
客户的身份提供商（Okta、Azure AD、Google Workspace）行为都略有差异。

## 核心功能

- 按客户邮箱域名配置 SAML 与 OIDC SSO
- 无密码魔法链接与 WebAuthn 通行密钥登录
- 基于权限而非角色名称的精细访问控制

## 开始之前

请先阅读[核心概念](./concepts.md)，了解会话/令牌模型及 SSO 域名强制机制——这是大多数首次集成最容易
踩坑的地方。
