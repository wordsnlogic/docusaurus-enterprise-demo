---
title: Primeros pasos
sidebar_position: 2
---

# Primeros pasos

## Requisitos previos

Antes de comenzar, asegúrate de tener una cuenta de Northwind Cloud y acceso a la API habilitado para Genesis.

## Instalación

Instala el SDK de Genesis con el gestor de paquetes que prefieras y luego inicialízalo con la clave de API de tu proyecto.

```bash
npm install @northwind/genesis
```

## Inicio rápido

La forma más rápida de ver Genesis en acción es ejecutar el ejemplo de inicio rápido en tu entorno local.

```js
import { Genesis } from "@northwind/genesis";

const client = new Genesis({ apiKey: process.env.NORTHWIND_API_KEY });
```
