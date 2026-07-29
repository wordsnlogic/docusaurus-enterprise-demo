---
title: Referência da API
sidebar_position: 3
---

# Referência da API

## Autenticação

Todas as requisições à API do Orion devem incluir um token bearer válido no cabeçalho Authorization.

## Endpoints

A tabela abaixo lista os principais endpoints expostos pela API do Orion.

| Method | Path | Description |
| --- | --- | --- |
| PUT | `/v1/orion/buckets/:bucket/objects/:key` | Upload an object |
| GET | `/v1/orion/buckets/:bucket/objects/:key` | Retrieve an object |
| POST | `/v1/orion/buckets/:bucket/purge` | Purge CDN cache for a path |

## Suporte

Para dúvidas sobre o Orion, entre em contato com a equipe de produto ou visite o fórum da comunidade.
