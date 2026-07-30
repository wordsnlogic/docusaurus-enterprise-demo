---
title: Erste Schritte
sidebar_position: 3
---

# Erste Schritte

## Voraussetzungen

Ein Northwind-Cloud-Konto mit aktiviertem Genesis und ein Server-zu-Server-API-Schlüssel aus
**Einstellungen → API-Schlüssel** (zum serverseitigen Anlegen von Nutzern — Endnutzer authentifizieren
sich über Sessions, nicht mit diesem Schlüssel).

## Einen Nutzer erstellen

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

## Eine Session starten (Login)

Sessions werden über einen separaten, nutzerseitigen Flow erstellt — typischerweise aus dem
Submit-Handler Ihres Login-Formulars aufgerufen, nicht mit Ihrem Service-API-Schlüssel:

```bash
curl https://api.northwind.cloud/v1/genesis/sessions \
  -H "Content-Type: application/json" \
  -d '{ "email": "jordan@acme.com", "password": "user-entered-password" }'
```

Eine erfolgreiche Antwort enthält ein kurzlebiges `token` — hängen Sie es als Bearer-Token an
nachfolgende Anfragen im Namen dieses Nutzers an. Wenn das Konto MFA aktiviert hat, liefert dieser Aufruf
stattdessen `403 mfa_required`, und Sie benötigen den MFA-Verifizierungsschritt aus der
[API-Referenz](./api-reference.md).

## SSO für eine Kunden-Domain einrichten

```bash
curl https://api.northwind.cloud/v1/genesis/sso/connections \
  -H "Authorization: Bearer $GENESIS_API_KEY" \
  -d '{ "domain": "acme.com", "protocol": "saml", "metadata_url": "https://acme.okta.com/app/.../sso/saml/metadata" }'
```

**Testen Sie das zuerst mit einer Nicht-Produktions-Domain.** Sobald eine Verbindung für eine Domain
aktiv ist, ist Passwort-Login für jeden Nutzer dieser Domain deaktiviert — siehe
[Konzepte](./concepts.md), warum das nicht optional ist.
