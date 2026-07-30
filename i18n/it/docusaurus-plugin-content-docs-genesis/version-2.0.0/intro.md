---
title: Introduzione
sidebar_position: 1
---

# Introduzione

Genesis è la piattaforma di identità di Northwind Cloud: account utente, sessioni, permessi basati sui
ruoli e SSO enterprise (SAML/OIDC), così non devi costruire l'autenticazione da zero.

## A chi è rivolto

Se stai costruendo un prodotto B2C, userai principalmente gli endpoint di sessione e passkey/magic-link.
Se vendi alle aziende, avrai bisogno anche delle [connessioni SSO](./concepts.md) —
riserva tempo extra per l'integrazione, poiché l'identity provider di ogni cliente (Okta, Azure AD,
Google Workspace) si comporta in modo leggermente diverso anche sotto la stessa specifica SAML/OIDC.

## Caratteristiche principali

- SSO SAML e OIDC, delimitato per dominio email del cliente
- Login senza password con magic-link e passkey WebAuthn
- Controllo degli accessi granulare basato sui permessi, non sui nomi dei ruoli

## Prima di iniziare

[Concetti](./concepts.md) copre il modello sessione/token e il comportamento di enforcement del dominio
SSO su cui inciampano la maggior parte delle prime integrazioni — leggilo prima di
[Avvio rapido](./getting-started.md).
