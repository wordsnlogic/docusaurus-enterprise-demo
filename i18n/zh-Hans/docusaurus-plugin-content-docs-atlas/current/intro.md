---
title: 简介
sidebar_position: 1
---

# 简介

Atlas 是 Northwind Cloud 的产品分析 API：发送事件，即可获得漏斗、留存群组和可查询的原始数据。

## Atlas 不是什么

Atlas 是事件 API，不是完整的 CDP——不支持反向 ETL 或多目的地分发。如需这些能力，请搭配
[Cascade](/docs/cascade/intro) 使用。

## 核心功能

- 亚秒级实时事件流
- 实时计算的漏斗与留存群组，而非批处理任务
- 通过[查询接口](./api-reference.md)进行 SQL 临时查询

## 开始之前

请先阅读[核心概念](./concepts.md)，再进入[快速入门](./getting-started.md)——这能帮你避免最常见的
集成错误：事件命名不一致导致漏斗数周后悄然失效。
