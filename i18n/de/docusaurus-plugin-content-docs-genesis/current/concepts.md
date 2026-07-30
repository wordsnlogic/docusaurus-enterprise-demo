---
title: Konzepte
sidebar_position: 2
---

# Konzepte

## Nutzer, Sessions und Tokens

Ein **Nutzer** ist eine Person; eine **Session** ist ein authentifizierter Login dieser Person mit einem
`expires_at`. Das Erstellen einer Session (`POST /v1/genesis/sessions`) liefert ein kurzlebiges
JWT-`token`, das Sie an nachfolgende Anfragen anhängen — Genesis verwendet für Nutzer-Auth keine
langlebigen API-Schlüssel, anders als bei Server-zu-Server-Aufrufen (siehe
[Authentifizierung](./api-reference.md)).

## Rollen und Berechtigungen

Genesis verwendet rollenbasierte Zugriffskontrolle: Ein Nutzer hat eine oder mehrere **Rollen**, und jede
Rolle gewährt eine Menge von **Berechtigungen** (`billing:read`, `users:write` usw.). Prüfen Sie in Ihrer
Autorisierungslogik Berechtigungen, nicht Rollennamen — Rollen-zu-Berechtigung-Zuordnungen können sich
ändern, und Code, der `if (role === "admin")` hartcodiert, bricht unbemerkt, wenn Rollen umstrukturiert
werden.

## SSO-Verbindungen

Eine **SSO-Verbindung** konfiguriert, wie sich die Nutzer eines Kunden über dessen eigenen
Identity-Provider authentifizieren (SAML oder OIDC), begrenzt auf eine E-Mail-Domain. Sobald eine Domain
eine aktive Verbindung hat, müssen sich Nutzer dieser Domain über SSO authentifizieren — Passwort-Login
ist für diese Domain dann deaktiviert, nicht nur optional. Das ist eine häufige Falle beim SSO-Rollout:
Testen Sie zuerst mit einer Nicht-Produktions-Domain.

## MFA und Passkeys

Genesis unterstützt TOTP-basierte MFA und WebAuthn-Passkeys. Eine Session, die ohne Abschluss einer
erforderlichen MFA-Challenge erstellt wird, wird mit `403 mfa_required` abgelehnt — sie wird nicht still
zu einer unverifizierten Session herabgestuft. Es gibt keinen Ihrer Anwendung zugänglichen
Teilauthentifizierungs-Zustand.
