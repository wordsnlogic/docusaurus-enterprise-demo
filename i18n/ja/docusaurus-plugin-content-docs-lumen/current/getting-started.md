---
title: 使ってみる
sidebar_position: 2
---

# 使ってみる

## 前提条件

開始する前に、Northwind Cloud アカウントと Lumen の API アクセスが有効になっていることを確認してください。

## インストール

お好みのパッケージマネージャーで Lumen SDK をインストールし、プロジェクトの API キーで初期化してください。

```bash
npm install @northwind/lumen
```

## クイックスタート

Lumen を最も早く試す方法は、ローカル環境でクイックスタートのサンプルを実行することです。

```js
import { Lumen } from "@northwind/lumen";

const client = new Lumen({ apiKey: process.env.NORTHWIND_API_KEY });
```
