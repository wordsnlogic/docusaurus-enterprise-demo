---
title: Referência da API
sidebar_position: 4
---

# Referência da API

## Autenticação

Dois tipos de credenciais diferentes, não os confunda:

- **Chave de API de serviço** — para chamadas serviço a serviço como criar usuários ou configurar SSO.
  Nunca exponha em código do lado cliente.
- **Token de sessão** — de curta duração, retornado por `POST /v1/genesis/sessions`, para agir em nome
  de um usuário logado.

## Criando um usuário

`POST /v1/genesis/users`

```json
{ "email": "jordan@acme.com", "roles": ["member"] }
```

**Resposta** — `201 Created`

```json
{ "id": "usr_3f8a2c", "email": "jordan@acme.com", "roles": ["member"], "created": "2026-07-20T09:14:22Z" }
```

## Iniciando uma sessão

`POST /v1/genesis/sessions`

```json
{ "email": "jordan@acme.com", "password": "user-entered-password" }
```

**Resposta** — `200 OK`

```json
{
  "session_id": "sess_6k2p9x",
  "user_id": "usr_3f8a2c",
  "expires_at": "2026-07-21T09:14:22Z",
  "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Se a conta tiver MFA ativado, essa chamada retorna `403 mfa_required` — reenvie para
`/v1/genesis/sessions/mfa` com as mesmas credenciais mais `mfa_code` para completar o login.

## Configurando SSO

`POST /v1/genesis/sso/connections`

```json
{ "domain": "acme.com", "protocol": "saml", "metadata_url": "https://acme.okta.com/app/exkabc123/sso/saml/metadata" }
```

`protocol` é `"saml"` ou `"oidc"`. Uma vez criada e ativa, o login por senha é desabilitado para todos os
usuários daquele domínio.

## Erros

| Status HTTP | `code` | Significado |
| --- | --- | --- |
| 401 | `invalid_credentials` | E-mail/senha não conferem |
| 403 | `mfa_required` | Credenciais corretas; desafio MFA precisa ser completado |
| 403 | `sso_required` | O domínio deste e-mail tem uma conexão SSO ativa; login por senha desabilitado |
| 429 | `too_many_attempts` | Conta bloqueada temporariamente após 5 tentativas falhas em 15 minutos |

Bloqueios por `too_many_attempts` são liberados automaticamente após 15 minutos — não há endpoint de
desbloqueio manual, por design, para evitar um vetor de tomada de conta via suporte.

## Limites de taxa

20 tentativas de login/minuto por endereço IP, independente do bloqueio por conta acima.

## Suporte

Para dúvidas sobre o Genesis, entre em contato com a equipe de produto ou visite o fórum da comunidade.
