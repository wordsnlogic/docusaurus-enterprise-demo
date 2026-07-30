---
title: Konzepte
sidebar_position: 2
---

# Konzepte

## Beträge sind Ganzzahlen

Jeder Betrag in der Ion-API ist eine Ganzzahl in der kleinsten Einheit der Währung — Cent bei USD, Yen bei
JPY (das keine Untereinheit hat, ¥500 ist also `500`, nicht `50000`). So werden Rundungsfehler bei
Fließkommazahlen vermieden. `amount: 4200` bei `currency: "usd"` bedeutet 42,00 $.

## Charges

Eine **Charge** ist ein einzelner Versuch, Geld von einem Kunden zu Ihnen zu bewegen. Charges werden in
einem Aufruf erstellt und settlen asynchronisch — ein Status `succeeded` bedeutet, dass die Charge
autorisiert wurde, nicht zwingend, dass die Gelder bereits auf Ihrem Auszahlungskonto angekommen sind.

## Kunden und Zahlungsmethoden

Ein **Kunde** ist ein wiederverwendbarer Datensatz, dem Sie eine oder mehrere **Zahlungsmethoden**
zuordnen (Karten, Bankkonten). Einen Kunden vorab anzulegen — statt bei jeder Charge rohe Kartendaten zu
übergeben — ermöglicht gespeichertes Checkout und Abonnements.

## Idempotenzschlüssel

Jeder schreibende Endpunkt (`charges`, `refunds`, `subscriptions`) akzeptiert einen `idempotency_key`.
Wenn eine Anfrage timeoutet und Sie sie mit demselben Schlüssel wiederholen, liefert Ion das ursprüngliche
Ergebnis zurück, statt eine doppelte Charge zu erstellen. Denselben Schlüssel mit einem **anderen**
Anfragekörper wiederzuverwenden gilt als Fehler — siehe [Fehler](./api-reference.md). Erzeugen Sie
Idempotenzschlüssel immer clientseitig, gebunden an die Geschäftsaktion (z. B. Ihre eigene
Bestellnummer), nicht zufällig pro HTTP-Versuch.

## Abonnements

Ein **Abonnement** bindet einen Kunden an einen Plan und rechnet regelmäßig ab. Abonnements haben ein
`current_period_end`; Ion versucht, an dieser Grenze automatisch abzurechnen, und setzt das Abonnement bei
fehlgeschlagener Zahlung auf `past_due` (nicht sofort `canceled`) — das gibt Ihnen ein Dunning-Fenster,
bevor der Zugriff entzogen wird.

## Rückerstattungen

Rückerstattungen beziehen sich auf eine Charge und können teilweise erfolgen. Eine Charge kann mehrere
Teilrückerstattungen erhalten, solange deren Summe den ursprünglichen Betrag nicht übersteigt.
