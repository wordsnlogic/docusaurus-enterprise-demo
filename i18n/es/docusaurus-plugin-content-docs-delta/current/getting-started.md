---
title: Primeros pasos
sidebar_position: 2
---

# Primeros pasos

## Requisitos previos

Antes de comenzar, asegúrate de tener una cuenta de Northwind Cloud y acceso a la API habilitado para Delta.

## Instalación

Instala el SDK de Delta con el gestor de paquetes que prefieras y luego inicialízalo con la clave de API de tu proyecto.

```bash
npm install @northwind/delta
```

## Inicio rápido

La forma más rápida de ver Delta en acción es ejecutar el ejemplo de inicio rápido en tu entorno local.

```js
import { Delta } from "@northwind/delta";

const client = new Delta({ apiKey: process.env.NORTHWIND_API_KEY });
```
