---
title: Primeiros passos
sidebar_position: 2
---

# Primeiros passos

## Pré-requisitos

Antes de começar, garanta que você tem uma conta Northwind Cloud e acesso à API habilitado para Delta.

## Instalação

Instale o SDK do Delta usando o gerenciador de pacotes de sua preferência e inicialize-o com a chave de API do seu projeto.

```bash
npm install @northwind/delta
```

## Início rápido

A forma mais rápida de ver o Delta em ação é executar o exemplo de início rápido no seu ambiente local.

```js
import { Delta } from "@northwind/delta";

const client = new Delta({ apiKey: process.env.NORTHWIND_API_KEY });
```
