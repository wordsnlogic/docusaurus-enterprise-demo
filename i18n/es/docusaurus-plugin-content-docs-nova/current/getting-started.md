---
title: Primeros pasos
sidebar_position: 2
---

# Primeros pasos

## Requisitos previos

Antes de comenzar, asegúrate de tener una cuenta de Northwind Cloud y acceso a la API habilitado para Nova.

## Instalación

Instala el SDK de Nova con el gestor de paquetes que prefieras y luego inicialízalo con la clave de API de tu proyecto.

```bash
npm install @northwind/nova
```

## Inicio rápido

La forma más rápida de ver Nova en acción es ejecutar el ejemplo de inicio rápido en tu entorno local.

```js
import { Nova } from "@northwind/nova";

const client = new Nova({ apiKey: process.env.NORTHWIND_API_KEY });
```
