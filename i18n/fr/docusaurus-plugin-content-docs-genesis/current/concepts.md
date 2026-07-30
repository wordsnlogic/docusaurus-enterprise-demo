---
title: Concepts
sidebar_position: 2
---

# Concepts

## Utilisateurs, sessions et tokens

Un **utilisateur** est une personne ; une **session** est une connexion authentifiée avec un
`expires_at`. Créer une session (`POST /v1/genesis/sessions`) renvoie un `token` JWT de courte durée à
joindre aux requêtes suivantes — contrairement aux appels service à service, Genesis n'utilise pas de
clés API longue durée pour l'authentification utilisateur final (voir
[Authentification](./api-reference.md)).

## Rôles et permissions

Genesis utilise un contrôle d'accès basé sur les rôles : un utilisateur a un ou plusieurs **rôles**, et
chaque rôle accorde un ensemble de **permissions** (`billing:read`, `users:write`, etc.). Vérifiez les
permissions, pas les noms de rôles, dans votre logique d'autorisation — le mapping rôle-permission peut
changer, et du code avec `role === "admin"` en dur casse silencieusement si les rôles sont restructurés.

## Connexions SSO

Une **connexion SSO** configure comment les utilisateurs d'un client s'authentifient via leur propre
fournisseur d'identité (SAML ou OIDC), limitée à un domaine e-mail. Une fois qu'un domaine a une
connexion active, ses utilisateurs doivent s'authentifier via SSO — la connexion par mot de passe est
désactivée, pas simplement optionnelle. Testez d'abord avec un domaine hors production.

## MFA et passkeys

Genesis prend en charge le MFA basé sur TOTP et les passkeys WebAuthn. Une session créée sans avoir
complété un défi MFA requis est rejetée avec `403 mfa_required`, sans être silencieusement rétrogradée
en session non vérifiée.
