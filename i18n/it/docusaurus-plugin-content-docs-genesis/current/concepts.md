---
title: Concetti
sidebar_position: 2
---

# Concetti

## Utenti, sessioni e token

Un **utente** è una persona; una **sessione** è un login autenticato con `expires_at`. Creare una
sessione (`POST /v1/genesis/sessions`) restituisce un `token` JWT di breve durata per le richieste
successive — a differenza delle chiamate da servizio a servizio, Genesis non usa chiavi API di lunga
durata per l'autenticazione dell'utente finale (vedi
[Autenticazione](./api-reference.md)).

## Ruoli e permessi

Genesis usa il controllo degli accessi basato sui ruoli: un utente ha uno o più **ruoli**, e ogni ruolo
concede un insieme di **permessi** (`billing:read`, `users:write`, ecc.). Controlla i permessi, non i
nomi dei ruoli, nella logica di autorizzazione — la mappatura ruolo-permesso può cambiare, e codice con
`role === "admin"` hardcoded si rompe silenziosamente quando i ruoli vengono ristrutturati.

## Connessioni SSO

Una **connessione SSO** configura come gli utenti di un cliente si autenticano tramite il proprio
identity provider (SAML o OIDC), limitata a un dominio email. Una volta che un dominio ha una
connessione attiva, i suoi utenti devono autenticarsi via SSO — il login con password viene disabilitato,
non è semplicemente opzionale. Testa prima con un dominio non di produzione.

## MFA e passkey

Genesis supporta MFA basato su TOTP e passkey WebAuthn. Una sessione creata senza completare una sfida
MFA richiesta viene rifiutata con `403 mfa_required`, non viene silenziosamente declassata a sessione
non verificata.
