---
title: Referência da API
sidebar_position: 3
---

# Referência da API

## Autenticação

Todas as requisições à API do Delta devem incluir um token bearer válido no cabeçalho Authorization.

## Endpoints

A tabela abaixo lista os principais endpoints expostos pela API do Delta.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/delta/syncs` | Create a sync link between two services |
| GET | `/v1/delta/syncs/:id/status` | Check sync lag and health |
| DELETE | `/v1/delta/syncs/:id` | Tear down a sync link |

## Suporte

Para dúvidas sobre o Delta, entre em contato com a equipe de produto ou visite o fórum da comunidade.
