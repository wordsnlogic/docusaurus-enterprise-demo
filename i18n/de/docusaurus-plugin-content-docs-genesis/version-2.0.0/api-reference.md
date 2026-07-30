---
title: API-Referenz
sidebar_position: 4
---

# API-Referenz

## Authentifizierung

Zwei unterschiedliche Credential-Typen, die Sie nicht verwechseln sollten:

- **Service-API-Schlüssel** (`Authorization: Bearer $GENESIS_API_KEY`) — für Server-zu-Server-Aufrufe wie
  das Anlegen von Nutzern oder das Konfigurieren von SSO. Niemals in clientseitigem Code offenlegen.
- **Session-Token** — kurzlebig, geliefert von `POST /v1/genesis/sessions`, zum Handeln im Namen eines
  eingeloggten Nutzers.

## Einen Nutzer erstellen

`POST /v1/genesis/users`

```json
{
  "email": "jordan@acme.com",
  "roles": ["member"]
}
```

**Antwort** — `201 Created`

```json
{
  "id": "usr_3f8a2c",
  "email": "jordan@acme.com",
  "roles": ["member"],
  "created": "2026-07-20T09:14:22Z"
}
```

## Eine Session starten

`POST /v1/genesis/sessions`

```json
{
  "email": "jordan@acme.com",
  "password": "user-entered-password"
}
```

**Antwort** — `200 OK`

```json
{
  "session_id": "sess_6k2p9x",
  "user_id": "usr_3f8a2c",
  "expires_at": "2026-07-21T09:14:22Z",
  "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Wenn MFA für das Konto aktiviert ist, liefert dieser Aufruf stattdessen `403 mfa_required` — senden Sie
erneut an `/v1/genesis/sessions/mfa` mit denselben Credentials plus `mfa_code`, um den Login
abzuschließen.

## SSO konfigurieren

`POST /v1/genesis/sso/connections`

```json
{
  "domain": "acme.com",
  "protocol": "saml",
  "metadata_url": "https://acme.okta.com/app/exkabc123/sso/saml/metadata"
}
```

`protocol` ist `"saml"` oder `"oidc"`. Sobald erstellt und aktiv, ist Passwort-Login für jeden Nutzer
dieser Domain deaktiviert.

## Fehler

| HTTP-Status | `code` | Bedeutung |
| --- | --- | --- |
| 401 | `invalid_credentials` | E-Mail/Passwort stimmten nicht überein |
| 403 | `mfa_required` | Credentials waren korrekt; MFA-Challenge muss zum Login-Abschluss erfüllt werden |
| 403 | `sso_required` | Die Domain dieser E-Mail hat eine aktive SSO-Verbindung; Passwort-Login ist deaktiviert |
| 429 | `too_many_attempts` | Konto nach 5 fehlgeschlagenen Versuchen innerhalb von 15 Minuten temporär gesperrt |

`too_many_attempts`-Sperren werden nach 15 Minuten automatisch aufgehoben — es gibt bewusst keinen
manuellen Entsperr-Endpunkt, um keinen Angriffsvektor über Support-initiierte Entsperrungen zu schaffen.

## Ratenbegrenzungen

20 Login-Versuche/Minute pro IP-Adresse, unabhängig von der kontobezogenen Sperre oben — das begrenzt
Credential-Stuffing-Versuche über viele Konten aus einer Quelle.

## Support

Bei Fragen zu Genesis wenden Sie sich an das Produktteam oder besuchen Sie das Community-Forum.
