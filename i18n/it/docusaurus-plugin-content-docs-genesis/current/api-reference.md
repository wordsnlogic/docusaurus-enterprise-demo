---
title: Riferimento API
sidebar_position: 4
---

# Riferimento API

## Autenticazione

Due tipi di credenziali diverse, non confonderle:

- **Chiave API di servizio** — per chiamate da servizio a servizio come creare utenti o configurare SSO.
  Non esporla mai nel codice lato client.
- **Token di sessione** — di breve durata, restituito da `POST /v1/genesis/sessions`, per agire per
  conto di un utente loggato.

## Crea un utente

`POST /v1/genesis/users`

```json
{ "email": "jordan@acme.com", "roles": ["member"] }
```

**Risposta** — `201 Created`

```json
{ "id": "usr_3f8a2c", "email": "jordan@acme.com", "roles": ["member"], "created": "2026-07-20T09:14:22Z" }
```

## Avvia una sessione

`POST /v1/genesis/sessions`

```json
{ "email": "jordan@acme.com", "password": "user-entered-password" }
```

**Risposta** — `200 OK`

```json
{
  "session_id": "sess_6k2p9x",
  "user_id": "usr_3f8a2c",
  "expires_at": "2026-07-21T09:14:22Z",
  "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Se l'account ha MFA attivo, questa chiamata restituisce `403 mfa_required` — reinvia a
`/v1/genesis/sessions/mfa` con le stesse credenziali più `mfa_code` per completare il login.

## Configura SSO

`POST /v1/genesis/sso/connections`

```json
{ "domain": "acme.com", "protocol": "saml", "metadata_url": "https://acme.okta.com/app/exkabc123/sso/saml/metadata" }
```

`protocol` è `"saml"` o `"oidc"`. Una volta creata e attiva, il login con password viene disabilitato
per tutti gli utenti di quel dominio.

## Errori

| Stato HTTP | `code` | Significato |
| --- | --- | --- |
| 401 | `invalid_credentials` | Email/password non corrispondenti |
| 403 | `mfa_required` | Credenziali corrette; la sfida MFA deve essere completata |
| 403 | `sso_required` | Il dominio di questa email ha una connessione SSO attiva; login con password disabilitato |
| 429 | `too_many_attempts` | Account temporaneamente bloccato dopo 5 tentativi falliti in 15 minuti |

I blocchi per `too_many_attempts` si sbloccano automaticamente dopo 15 minuti — non esiste un endpoint
di sblocco manuale, di proposito, per evitare un vettore di account takeover tramite il supporto.

## Limiti di frequenza

20 tentativi di login/minuto per indirizzo IP, indipendentemente dal blocco per account sopra.

## Supporto

Per domande su Genesis, contatta il team di prodotto o visita il forum della community.
