---
title: 使ってみる
sidebar_position: 2
---

# 使ってみる

## 前提条件

開始する前に、Northwind Cloud アカウントと Cascade の API アクセスが有効になっていることを確認してください。

## インストール

お好みのパッケージマネージャーで Cascade SDK をインストールし、プロジェクトの API キーで初期化してください。

```bash
npm install @northwind/cascade
```

## クイックスタート

Cascade を最も早く試す方法は、ローカル環境でクイックスタートのサンプルを実行することです。

```js
import { Cascade } from "@northwind/cascade";

const client = new Cascade({ apiKey: process.env.NORTHWIND_API_KEY });
```
