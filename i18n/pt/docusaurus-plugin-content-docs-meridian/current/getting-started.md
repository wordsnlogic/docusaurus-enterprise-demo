---
title: Primeiros passos
sidebar_position: 2
---

# Primeiros passos

## Pré-requisitos

Antes de começar, garanta que você tem uma conta Northwind Cloud e acesso à API habilitado para Meridian.

## Instalação

Instale o SDK do Meridian usando o gerenciador de pacotes de sua preferência e inicialize-o com a chave de API do seu projeto.

```bash
npm install @northwind/meridian
```

## Início rápido

A forma mais rápida de ver o Meridian em ação é executar o exemplo de início rápido no seu ambiente local.

```js
import { Meridian } from "@northwind/meridian";

const client = new Meridian({ apiKey: process.env.NORTHWIND_API_KEY });
```
