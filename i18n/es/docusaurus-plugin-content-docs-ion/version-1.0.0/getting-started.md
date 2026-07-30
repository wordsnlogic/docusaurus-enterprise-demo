---
title: Primeros pasos
sidebar_position: 2
---

# Primeros pasos

## Requisitos previos

Antes de comenzar, asegúrate de tener una cuenta de Northwind Cloud y acceso a la API habilitado para Ion.

## Instalación

Instala el SDK de Ion con el gestor de paquetes que prefieras y luego inicialízalo con la clave de API de tu proyecto.

```bash
npm install @northwind/ion
```

## Inicio rápido

La forma más rápida de ver Ion en acción es ejecutar el ejemplo de inicio rápido en tu entorno local.

```js
import { Ion } from "@northwind/ion";

const client = new Ion({ apiKey: process.env.NORTHWIND_API_KEY });
```
