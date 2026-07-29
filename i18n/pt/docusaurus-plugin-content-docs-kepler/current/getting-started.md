---
title: Primeiros passos
sidebar_position: 2
---

# Primeiros passos

## Pré-requisitos

Antes de começar, garanta que você tem uma conta Northwind Cloud e acesso à API habilitado para Kepler.

## Instalação

Instale o SDK do Kepler usando o gerenciador de pacotes de sua preferência e inicialize-o com a chave de API do seu projeto.

```bash
npm install @northwind/kepler
```

## Início rápido

A forma mais rápida de ver o Kepler em ação é executar o exemplo de início rápido no seu ambiente local.

```js
import { Kepler } from "@northwind/kepler";

const client = new Kepler({ apiKey: process.env.NORTHWIND_API_KEY });
```
