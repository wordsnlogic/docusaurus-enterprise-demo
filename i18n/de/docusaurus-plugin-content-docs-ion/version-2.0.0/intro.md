---
title: Einführung
sidebar_position: 1
---

# Einführung

Ion ist die Payments-API von Northwind Cloud: Charges, gespeicherte Zahlungsmethoden, Abonnements und
Rückerstattungen in über 135 Währungen, mit PCI-DSS-Level-1-konformer Kartenspeicherung, sodass rohe
Kartennummern nie Ihre eigenen Server erreichen.

## Testmodus vs. Livemodus

Jedes Ion-Konto hat separate Test- und Live-API-Schlüssel (Präfixe `sk_test_` und `sk_live_`).
Test-Charges verwenden dieselbe API und dieselben Validierungsregeln wie der Livemodus, bewegen aber nie
echtes Geld — bauen und testen Sie Ihre gesamte Integration, einschließlich Fehlerpfaden, im Testmodus,
bevor Sie die Schlüssel wechseln.

## Hauptfunktionen

- Über 135 Währungen und lokale Zahlungsmethoden
- PCI-DSS-Level-1-konforme Kartenspeicherung — Kartennummern erreichen nie Ihre Server
- Nutzungsbasierte und Abonnement-Abrechnung mit automatischem Dunning bei fehlgeschlagenen
  Verlängerungen

## Bevor Sie beginnen

Lesen Sie [Konzepte](./concepts.md) — insbesondere, wie Beträge als Ganzzahlen dargestellt werden und wie
Idempotenzschlüssel funktionieren — bevor Sie Code zur Charge-Erstellung schreiben. Beide Punkte sind
leicht einmal falsch zu machen und in Produktion teuer zu korrigieren.
