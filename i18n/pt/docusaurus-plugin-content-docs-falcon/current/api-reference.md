---
title: Referência da API
sidebar_position: 3
---

# Referência da API

## Autenticação

Todas as requisições à API do Falcon devem incluir um token bearer válido no cabeçalho Authorization.

## Endpoints

A tabela abaixo lista os principais endpoints expostos pela API do Falcon.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/falcon/indexes` | Create a search index |
| POST | `/v1/falcon/indexes/:id/documents` | Index a batch of documents |
| POST | `/v1/falcon/indexes/:id/query` | Run a search query |

## Suporte

Para dúvidas sobre o Falcon, entre em contato com a equipe de produto ou visite o fórum da comunidade.
