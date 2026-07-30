---
title: Primeiros passos
sidebar_position: 2
---

# Primeiros passos

## Pré-requisitos

Antes de começar, garanta que você tem uma conta Northwind Cloud e acesso à API habilitado para Ion.

## Instalação

Instale o SDK do Ion usando o gerenciador de pacotes de sua preferência e inicialize-o com a chave de API do seu projeto.

```bash
npm install @northwind/ion
```

## Início rápido

A forma mais rápida de ver o Ion em ação é executar o exemplo de início rápido no seu ambiente local.

```js
import { Ion } from "@northwind/ion";

const client = new Ion({ apiKey: process.env.NORTHWIND_API_KEY });
```
