---
title: Referência da API
sidebar_position: 3
---

# Referência da API

## Autenticação

Todas as requisições à API do Juno devem incluir um token bearer válido no cabeçalho Authorization.

## Endpoints

A tabela abaixo lista os principais endpoints expostos pela API do Juno.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/juno/jobs` | Schedule a job |
| GET | `/v1/juno/jobs/:id/runs` | List a job's execution history |
| POST | `/v1/juno/jobs/:id/pause` | Pause a scheduled job |

## Suporte

Para dúvidas sobre o Juno, entre em contato com a equipe de produto ou visite o fórum da comunidade.
