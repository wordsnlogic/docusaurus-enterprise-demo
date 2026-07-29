---
title: 快速入门
sidebar_position: 2
---

# 快速入门

## 前提条件

开始之前，请确保您已拥有 Northwind Cloud 账户，并已为 Orion 启用 API 访问权限。

## 安装

使用您常用的包管理器安装 Orion SDK，然后使用项目的 API 密钥进行初始化。

```bash
npm install @northwind/orion
```

## 快速开始

体验 Orion 最快的方式是在本地环境中运行快速入门示例。

```js
import { Orion } from "@northwind/orion";

const client = new Orion({ apiKey: process.env.NORTHWIND_API_KEY });
```
