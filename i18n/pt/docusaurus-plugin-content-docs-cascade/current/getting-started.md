---
title: Primeiros passos
sidebar_position: 2
---

# Primeiros passos

## Pré-requisitos

Antes de começar, garanta que você tem uma conta Northwind Cloud e acesso à API habilitado para Cascade.

## Instalação

Instale o SDK do Cascade usando o gerenciador de pacotes de sua preferência e inicialize-o com a chave de API do seu projeto.

```bash
npm install @northwind/cascade
```

## Início rápido

A forma mais rápida de ver o Cascade em ação é executar o exemplo de início rápido no seu ambiente local.

```js
import { Cascade } from "@northwind/cascade";

const client = new Cascade({ apiKey: process.env.NORTHWIND_API_KEY });
```
