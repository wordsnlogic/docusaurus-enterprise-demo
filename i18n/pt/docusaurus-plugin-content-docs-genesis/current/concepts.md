---
title: Conceitos
sidebar_position: 2
---

# Conceitos

## Usuários, sessões e tokens

Um **usuário** é uma pessoa; uma **sessão** é um login autenticado com `expires_at`. Criar uma sessão
(`POST /v1/genesis/sessions`) retorna um `token` JWT de curta duração para as próximas requisições — ao
contrário de chamadas serviço a serviço, o Genesis não usa chaves de API de longa duração para
autenticação de usuário final (ver [Autenticação](./api-reference.md)).

## Papéis e permissões

O Genesis usa controle de acesso baseado em papéis: um usuário tem um ou mais **papéis**, e cada papel
concede um conjunto de **permissões** (`billing:read`, `users:write`, etc.). Verifique permissões, não
nomes de papéis, na sua lógica de autorização — o mapeamento papel-permissão pode mudar, e código com
`role === "admin"` fixo quebra silenciosamente quando os papéis são reestruturados.

## Conexões SSO

Uma **conexão SSO** configura como os usuários de um cliente se autenticam via seu próprio provedor de
identidade (SAML ou OIDC), delimitada por domínio de e-mail. Uma vez que um domínio tenha uma conexão
ativa, seus usuários são obrigados a autenticar via SSO — o login por senha fica desabilitado, não
apenas opcional. Teste primeiro com um domínio que não seja de produção.

## MFA e passkeys

O Genesis suporta MFA baseado em TOTP e passkeys WebAuthn. Uma sessão criada sem completar um desafio
MFA obrigatório é rejeitada com `403 mfa_required`, não é rebaixada silenciosamente para uma sessão não
verificada.
