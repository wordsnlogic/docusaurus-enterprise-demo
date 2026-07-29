---
title: 使ってみる
sidebar_position: 2
---

# 使ってみる

## 前提条件

開始する前に、Northwind Cloud アカウントと Ion の API アクセスが有効になっていることを確認してください。

## インストール

お好みのパッケージマネージャーで Ion SDK をインストールし、プロジェクトの API キーで初期化してください。

```bash
npm install @northwind/ion
```

## クイックスタート

Ion を最も早く試す方法は、ローカル環境でクイックスタートのサンプルを実行することです。

```js
import { Ion } from "@northwind/ion";

const client = new Ion({ apiKey: process.env.NORTHWIND_API_KEY });
```
