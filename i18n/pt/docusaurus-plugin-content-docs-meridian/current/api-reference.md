---
title: Referência da API
sidebar_position: 3
---

# Referência da API

## Autenticação

Todas as requisições à API do Meridian devem incluir um token bearer válido no cabeçalho Authorization.

## Endpoints

A tabela abaixo lista os principais endpoints expostos pela API do Meridian.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/meridian/workflows` | Create a workflow |
| POST | `/v1/meridian/workflows/:id/runs` | Trigger a workflow run |
| GET | `/v1/meridian/workflows/:id/runs/:runId` | Get run status and step output |

## Suporte

Para dúvidas sobre o Meridian, entre em contato com a equipe de produto ou visite o fórum da comunidade.
