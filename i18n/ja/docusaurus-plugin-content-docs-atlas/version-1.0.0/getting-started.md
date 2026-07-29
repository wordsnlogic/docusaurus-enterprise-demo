---
title: 使ってみる
sidebar_position: 2
---

# 使ってみる

## 前提条件

開始する前に、Northwind Cloud アカウントと Atlas の API アクセスが有効になっていることを確認してください。

## インストール

お好みのパッケージマネージャーで Atlas SDK をインストールし、プロジェクトの API キーで初期化してください。

```bash
npm install @northwind/atlas
```

## クイックスタート

Atlas を最も早く試す方法は、ローカル環境でクイックスタートのサンプルを実行することです。

```js
import { Atlas } from "@northwind/atlas";

const client = new Atlas({ apiKey: process.env.NORTHWIND_API_KEY });
```
