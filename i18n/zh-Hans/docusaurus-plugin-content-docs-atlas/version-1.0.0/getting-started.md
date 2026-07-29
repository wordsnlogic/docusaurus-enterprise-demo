---
title: 快速入门
sidebar_position: 2
---

# 快速入门

## 前提条件

开始之前，请确保您已拥有 Northwind Cloud 账户，并已为 Atlas 启用 API 访问权限。

## 安装

使用您常用的包管理器安装 Atlas SDK，然后使用项目的 API 密钥进行初始化。

```bash
npm install @northwind/atlas
```

## 快速开始

体验 Atlas 最快的方式是在本地环境中运行快速入门示例。

```js
import { Atlas } from "@northwind/atlas";

const client = new Atlas({ apiKey: process.env.NORTHWIND_API_KEY });
```
