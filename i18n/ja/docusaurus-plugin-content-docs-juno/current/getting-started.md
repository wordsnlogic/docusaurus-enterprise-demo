---
title: 使ってみる
sidebar_position: 2
---

# 使ってみる

## 前提条件

開始する前に、Northwind Cloud アカウントと Juno の API アクセスが有効になっていることを確認してください。

## インストール

お好みのパッケージマネージャーで Juno SDK をインストールし、プロジェクトの API キーで初期化してください。

```bash
npm install @northwind/juno
```

## クイックスタート

Juno を最も早く試す方法は、ローカル環境でクイックスタートのサンプルを実行することです。

```js
import { Juno } from "@northwind/juno";

const client = new Juno({ apiKey: process.env.NORTHWIND_API_KEY });
```
