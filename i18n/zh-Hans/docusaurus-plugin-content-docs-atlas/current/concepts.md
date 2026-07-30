---
title: 核心概念
sidebar_position: 2
---

# 核心概念

Atlas 有四个核心对象。

## 事件（Events）

**事件**是关于用户操作的带时间戳的单条事实（如 `checkout_completed`、`page_viewed`）。字段：`name`
（保持命名一致，否则漏斗会悄悄失效）、`user_id`、`timestamp`（回填最多支持过去 24 小时内）、
`properties`（自由格式的 JSON 对象）。事件一旦写入即不可变——没有更新接口，发送有误就重新发送一条
修正后的事件。

## 身份（Identities）

Atlas 通过 `user_id`（由你控制的字符串）追踪用户。匿名访客后续登录时，不要用新 ID 重新发送历史事件，
而应使用[快速入门](./getting-started.md)中的身份合并接口。

## 漏斗（Funnels）

**漏斗**是一组有序的事件名称序列。Atlas 会计算每个步骤的完成人数及流失点。定义一次
（`POST /v1/atlas/funnels`），可反复查询（`GET /v1/atlas/funnels/:id`）。

## 群组（Cohorts）

**群组**是一个保存的定义（如"最近 30 天注册"）。每次查询都会重新计算，而非创建时的静态快照。
