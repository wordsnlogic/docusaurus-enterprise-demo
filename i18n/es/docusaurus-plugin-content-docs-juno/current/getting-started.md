---
title: Primeros pasos
sidebar_position: 2
---

# Primeros pasos

## Requisitos previos

Antes de comenzar, asegúrate de tener una cuenta de Northwind Cloud y acceso a la API habilitado para Juno.

## Instalación

Instala el SDK de Juno con el gestor de paquetes que prefieras y luego inicialízalo con la clave de API de tu proyecto.

```bash
npm install @northwind/juno
```

## Inicio rápido

La forma más rápida de ver Juno en acción es ejecutar el ejemplo de inicio rápido en tu entorno local.

```js
import { Juno } from "@northwind/juno";

const client = new Juno({ apiKey: process.env.NORTHWIND_API_KEY });
```
