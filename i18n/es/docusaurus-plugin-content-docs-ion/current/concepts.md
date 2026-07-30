---
title: Conceptos
sidebar_position: 2
---

# Conceptos

## Los importes son enteros

Todo importe en la API de Ion es un entero en la unidad más pequeña de la moneda — centavos para USD,
yenes para JPY (que no tiene subunidad, así que ¥500 es `500`, no `50000`). `amount: 4200` con
`currency: "usd"` es $42.00.

## Charges (cargos)

Un **charge** es un intento único de mover dinero de un cliente hacia ti. Se crea en una llamada y se
liquida de forma asíncrona — `succeeded` significa que fue autorizado, no necesariamente que los fondos
ya se liquidaron.

## Clientes y métodos de pago

Un **cliente** es un registro reutilizable al que se le asocian uno o más **métodos de pago**. Crear un
cliente por adelantado — en vez de pasar datos de tarjeta en cada charge — habilita el checkout con
tarjeta guardada y las suscripciones.

## Claves de idempotencia

Todo endpoint de escritura acepta un `idempotency_key`. Si una solicitud expira y la reintentas con la
misma clave, Ion devuelve el resultado original en vez de crear un charge duplicado. Reutilizar una
clave con un cuerpo **diferente** se trata como error (ver [Errores](./api-reference.md)). Genera
las claves del lado del cliente, ligadas a la acción de negocio (tu propio ID de pedido), no al azar.

## Suscripciones

Una **suscripción** vincula un cliente a un plan y cobra periódicamente. Tiene un `current_period_end`;
si el cobro automático falla, pasa a `past_due` (no se cancela de inmediato), dándote una ventana de
dunning.

## Reembolsos

Los reembolsos referencian un charge y pueden ser parciales. Se pueden emitir varios reembolsos
parciales mientras su suma no exceda el importe original.
