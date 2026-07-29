---
title: Referência da API
sidebar_position: 3
---

# Referência da API

## Autenticação

Todas as requisições à API do Horizon devem incluir um token bearer válido no cabeçalho Authorization.

## Endpoints

A tabela abaixo lista os principais endpoints expostos pela API do Horizon.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/v1/horizon/dashboards` | Create a dashboard |
| GET | `/v1/horizon/dashboards/:id/embed-token` | Generate a signed embed token |
| GET | `/v1/horizon/datasets` | List connected datasets |

## Suporte

Para dúvidas sobre o Horizon, entre em contato com a equipe de produto ou visite o fórum da comunidade.
