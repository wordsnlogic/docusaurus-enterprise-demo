---
title: Primeros pasos
sidebar_position: 2
---

# Primeros pasos

## Requisitos previos

Antes de comenzar, asegúrate de tener una cuenta de Northwind Cloud y acceso a la API habilitado para Beacon.

## Instalación

Instala el SDK de Beacon con el gestor de paquetes que prefieras y luego inicialízalo con la clave de API de tu proyecto.

```bash
npm install @northwind/beacon
```

## Inicio rápido

La forma más rápida de ver Beacon en acción es ejecutar el ejemplo de inicio rápido en tu entorno local.

```js
import { Beacon } from "@northwind/beacon";

const client = new Beacon({ apiKey: process.env.NORTHWIND_API_KEY });
```
