---
title: Primeiros passos
sidebar_position: 3
---

# Primeiros passos

## Pré-requisitos

Uma conta Northwind Cloud com Genesis habilitado e uma chave de API serviço a serviço (**Configurações →
Chaves de API**).

## Criando um usuário

**cURL**

```bash
curl https://api.northwind.cloud/v1/genesis/users \
  -H "Authorization: Bearer $GENESIS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "email": "jordan@acme.com", "roles": ["member"] }'
```

**Node.js**

```js
import { Genesis } from "@northwind/genesis";

const genesis = new Genesis({ apiKey: process.env.GENESIS_API_KEY });

const user = await genesis.users.create({
  email: "jordan@acme.com",
  roles: ["member"],
});
```

**Python**

```python
from northwind_genesis import Genesis

genesis = Genesis(api_key=os.environ["GENESIS_API_KEY"])

user = genesis.users.create(email="jordan@acme.com", roles=["member"])
```

## Iniciando uma sessão (login)

Sessões são criadas com um fluxo separado voltado ao usuário — normalmente chamado a partir do envio do
seu formulário de login, não com sua chave de API de serviço:

```bash
curl https://api.northwind.cloud/v1/genesis/sessions \
  -H "Content-Type: application/json" \
  -d '{ "email": "jordan@acme.com", "password": "user-entered-password" }'
```

Uma resposta de sucesso inclui um `token` de curta duração. Se a conta tiver MFA ativado, essa chamada
retorna `403 mfa_required` em vez disso — veja o passo de verificação MFA em
[Referência da API](./api-reference.md).

## Configurando SSO para um domínio de cliente

```bash
curl https://api.northwind.cloud/v1/genesis/sso/connections \
  -H "Authorization: Bearer $GENESIS_API_KEY" \
  -d '{ "domain": "acme.com", "protocol": "saml", "metadata_url": "https://acme.okta.com/app/.../sso/saml/metadata" }'
```

**Teste isso primeiro com um domínio que não seja de produção.** Uma vez que a conexão estiver ativa, o
login por senha é desabilitado para todos os usuários daquele domínio — veja por quê em
[Conceitos](./concepts.md).
