---
title: Einführung
sidebar_position: 1
---

# Einführung

Genesis ist die Identity-Plattform von Northwind Cloud: Nutzerkonten, Sessions, rollenbasierte
Berechtigungen und Enterprise-SSO (SAML/OIDC) — Sie bauen Auth nicht von Grund auf und verschicken kein
eigenes Passwort-Hashing.

## Für wen das gedacht ist

Wenn Sie ein B2C-Produkt bauen, nutzen Sie hauptsächlich die Session- und Passkey-/Magic-Link-Endpunkte
von Genesis. Wenn Sie an Unternehmen verkaufen, benötigen Sie zusätzlich
[SSO-Verbindungen](./concepts.md) — planen Sie dafür extra Integrationszeit ein, denn der
Identity-Provider jedes Kunden (Okta, Azure AD, Google Workspace) verhält sich selbst innerhalb derselben
SAML-/OIDC-Spezifikation leicht unterschiedlich.

## Hauptfunktionen

- SAML und OIDC SSO, begrenzt pro Kunden-E-Mail-Domain
- Passwortloser Magic-Link- und WebAuthn-Passkey-Login
- Feingranulare rollenbasierte Zugriffskontrolle — autorisieren Sie nach Berechtigungen, nicht nach
  Rollennamen

## Bevor Sie beginnen

[Konzepte](./concepts.md) behandelt das Session-/Token-Modell und das SSO-Domain-Erzwingungsverhalten,
über das die meisten Erstintegrationen stolpern — lesen Sie das vor [Erste
Schritte](./getting-started.md).
