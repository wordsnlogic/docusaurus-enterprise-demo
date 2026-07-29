---
title: Primeros pasos
sidebar_position: 2
---

# Primeros pasos

## Requisitos previos

Antes de comenzar, asegúrate de tener una cuenta de Northwind Cloud y acceso a la API habilitado para Echo.

## Instalación

Instala el SDK de Echo con el gestor de paquetes que prefieras y luego inicialízalo con la clave de API de tu proyecto.

```bash
npm install @northwind/echo
```

## Inicio rápido

La forma más rápida de ver Echo en acción es ejecutar el ejemplo de inicio rápido en tu entorno local.

```js
import { Echo } from "@northwind/echo";

const client = new Echo({ apiKey: process.env.NORTHWIND_API_KEY });
```
