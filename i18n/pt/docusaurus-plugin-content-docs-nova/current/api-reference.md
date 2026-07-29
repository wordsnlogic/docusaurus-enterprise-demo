---
title: Referência da API
sidebar_position: 3
---

# Referência da API

## Autenticação

Todas as requisições à API do Nova devem incluir um token bearer válido no cabeçalho Authorization.

## Endpoints

A tabela abaixo lista os principais endpoints expostos pela API do Nova.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/nova/models` | Deploy a model |
| POST | `/v1/nova/models/:id/predict` | Run inference against a deployed model |
| GET | `/v1/nova/models/:id/metrics` | Get latency and throughput metrics |

## Suporte

Para dúvidas sobre o Nova, entre em contato com a equipe de produto ou visite o fórum da comunidade.
