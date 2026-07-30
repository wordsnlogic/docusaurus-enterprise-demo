---
title: Concepts
sidebar_position: 2
---

# Concepts

## Les montants sont des entiers

Tout montant dans l'API Ion est un entier dans la plus petite unité de la devise — centimes pour USD,
yens pour JPY (qui n'a pas de sous-unité, donc ¥500 est `500`, pas `50000`). `amount: 4200` avec
`currency: "usd"` signifie 42,00 $.

## Charges

Une **charge** est une tentative unique de transférer de l'argent d'un client vers vous. Créée en un
appel, réglée de façon asynchrone — `succeeded` signifie autorisée, pas nécessairement que les fonds
sont déjà réglés.

## Clients et moyens de paiement

Un **client** est un enregistrement réutilisable auquel vous associez un ou plusieurs **moyens de
paiement**. Créer le client à l'avance — plutôt que de transmettre les données de carte à chaque charge
— permet le paiement avec carte enregistrée et les abonnements.

## Clés d'idempotence

Chaque endpoint d'écriture accepte une `idempotency_key`. Si une requête expire et que vous la réessayez
avec la même clé, Ion renvoie le résultat original au lieu de créer une charge en double. Réutiliser une
clé avec un corps **différent** est traité comme une erreur (voir [Erreurs](./api-reference.md)). Générez
les clés côté client, liées à l'action métier (votre propre ID de commande), pas aléatoirement.

## Abonnements

Un **abonnement** lie un client à un plan et facture périodiquement. Il a un `current_period_end` ; en
cas d'échec de paiement, il passe à `past_due` (pas annulé immédiatement), offrant une fenêtre de
relance.

## Remboursements

Les remboursements référencent une charge et peuvent être partiels. Plusieurs remboursements partiels
peuvent être émis tant que leur somme ne dépasse pas le montant d'origine.
