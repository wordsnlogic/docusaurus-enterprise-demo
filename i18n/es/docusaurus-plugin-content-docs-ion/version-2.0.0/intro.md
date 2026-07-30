---
title: Introducción
sidebar_position: 1
---

# Introducción

Ion es la API de pagos de Northwind Cloud: charges, métodos de pago guardados, suscripciones y
reembolsos en más de 135 monedas, con almacenamiento de tarjetas conforme a PCI-DSS Nivel 1, para que
los números de tarjeta nunca toquen tus servidores.

## Modo de prueba vs. modo real

Cada cuenta de Ion tiene claves separadas de prueba (`sk_test_`) y reales (`sk_live_`). El modo de
prueba usa las mismas reglas de validación que el real pero nunca mueve dinero real — construye y
prueba toda tu integración, incluidos los casos de fallo, en modo de prueba antes de cambiar de clave.

## Características clave

- Más de 135 monedas y métodos de pago locales
- Almacenamiento de tarjetas conforme a PCI-DSS Nivel 1
- Facturación por uso y por suscripción, con dunning automático en fallos

## Antes de empezar

Lee [Conceptos](./concepts.md) — en particular cómo se representan los importes como enteros y cómo
funcionan las claves de idempotencia — antes de escribir código de creación de charges.
