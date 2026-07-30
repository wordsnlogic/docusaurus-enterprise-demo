---
title: Avvio rapido
sidebar_position: 3
---

# Avvio rapido

## Prerequisiti

Un account Northwind Cloud con Genesis abilitato e una chiave API da servizio a servizio
(**Impostazioni → Chiavi API**).

## Crea un utente

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

## Avvia una sessione (login)

Le sessioni vengono create con un flusso separato rivolto all'utente — tipicamente chiamato dal gestore
di invio del tuo form di login, non con la tua chiave API di servizio:

```bash
curl https://api.northwind.cloud/v1/genesis/sessions \
  -H "Content-Type: application/json" \
  -d '{ "email": "jordan@acme.com", "password": "user-entered-password" }'
```

Una risposta di successo include un `token` di breve durata. Se l'account ha MFA attivo, questa chiamata
restituisce invece `403 mfa_required` — vedi il passaggio di verifica MFA in
[Riferimento API](./api-reference.md).

## Configura SSO per un dominio cliente

```bash
curl https://api.northwind.cloud/v1/genesis/sso/connections \
  -H "Authorization: Bearer $GENESIS_API_KEY" \
  -d '{ "domain": "acme.com", "protocol": "saml", "metadata_url": "https://acme.okta.com/app/.../sso/saml/metadata" }'
```

**Testa prima con un dominio non di produzione.** Una volta attiva la connessione, il login con
password viene disabilitato per tutti gli utenti di quel dominio — vedi perché in
[Concetti](./concepts.md).
