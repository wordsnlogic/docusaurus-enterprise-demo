---
title: Concetti
sidebar_position: 2
---

# Concetti

## Gli importi sono interi

Ogni importo nell'API di Ion è un intero nell'unità più piccola della valuta — centesimi per USD, yen
per JPY (che non ha sottounità, quindi ¥500 è `500`, non `50000`). `amount: 4200` con `currency: "usd"`
è $42,00.

## Charge

Una **charge** è un singolo tentativo di spostare denaro da un cliente a te. Creata in una chiamata,
si liquida in modo asincrono — `succeeded` significa autorizzata, non necessariamente che i fondi
siano già stati liquidati.

## Clienti e metodi di pagamento

Un **cliente** è un record riutilizzabile a cui associ uno o più **metodi di pagamento**. Creare un
cliente in anticipo — invece di passare i dati grezzi della carta a ogni charge — abilita il checkout
con carta salvata e gli abbonamenti.

## Chiavi di idempotenza

Ogni endpoint di scrittura accetta una `idempotency_key`. Se una richiesta va in timeout e la ripeti con
la stessa chiave, Ion restituisce il risultato originale invece di creare una charge duplicata.
Riutilizzare una chiave con un corpo **diverso** è trattato come errore (vedi
[Errori](./api-reference.md)). Genera le chiavi lato client, legate all'azione di business (il
tuo ID ordine), non casualmente.

## Abbonamenti

Un **abbonamento** collega un cliente a un piano e addebita periodicamente. Ha un `current_period_end`;
se l'addebito automatico fallisce, passa a `past_due` (non cancellato immediatamente), dandoti una
finestra di dunning.

## Rimborsi

I rimborsi fanno riferimento a una charge e possono essere parziali. Possono essere emessi più volte
sulla stessa charge finché la somma non supera l'importo originale.
