---
title: Primeros pasos
sidebar_position: 2
---

# Primeros pasos

## Requisitos previos

Antes de comenzar, asegúrate de tener una cuenta de Northwind Cloud y acceso a la API habilitado para Horizon.

## Instalación

Instala el SDK de Horizon con el gestor de paquetes que prefieras y luego inicialízalo con la clave de API de tu proyecto.

```bash
npm install @northwind/horizon
```

## Inicio rápido

La forma más rápida de ver Horizon en acción es ejecutar el ejemplo de inicio rápido en tu entorno local.

```js
import { Horizon } from "@northwind/horizon";

const client = new Horizon({ apiKey: process.env.NORTHWIND_API_KEY });
```
