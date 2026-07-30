---
title: Konzepte
sidebar_position: 2
---

# Konzepte

Atlas hat vier zentrale Objekte. Wenn Sie verstehen, wie sie zusammenhängen, wird der Rest der
API-Referenz deutlich verständlicher.

## Events

Ein **Event** ist eine einzelne, zeitgestempelte Tatsache über eine Aktion eines Nutzers —
`checkout_completed`, `page_viewed`, `signup_started`. Jedes Event hat:

- `name` — ein von Ihnen gewählter String in snake_case. Verwenden Sie ein kleines, konsistentes
  Vokabular; wenn dieselbe Aktion im Code als `checkout_completed` und `order_completed` auftaucht, ist
  das die häufigste Ursache für kaputte Funnels.
- `user_id` — die Identität, zu der das Event gehört (siehe **Identitäten** weiter unten).
- `timestamp` — wann es passiert ist. Atlas akzeptiert Events bis zu 24 Stunden in der Vergangenheit für
  Backfills; ältere Events werden zwar angenommen, aber aus Echtzeit-Funnels ausgeschlossen.
- `properties` — ein beliebiges JSON-Objekt mit Attributen zum Event (`revenue`, `plan`, `item_count`).

Events sind nach der Aufnahme unveränderlich. Es gibt keinen Update-Endpunkt — wenn Sie einen Fehler
gesendet haben, senden Sie ein korrigiertes Event, statt zu versuchen, das ursprüngliche zu bearbeiten.

## Identitäten

Atlas verfolgt Personen über `user_id`, einen String, den Sie selbst kontrollieren (Ihre eigene
Datenbank-Nutzer-ID, keine von Atlas vergebene). Wenn Sie zwei Identitäten zusammenführen müssen — ein
häufiger Fall ist ein anonymer Besucher, der sich später registriert — verwenden Sie das
Identity-Merge-Verhalten aus [Erste Schritte](./getting-started.md), statt historische
Events unter der neuen ID erneut zu senden.

## Funnels

Ein **Funnel** ist eine geordnete Abfolge von Event-Namen. Atlas berechnet über einen Zeitraum, wie viele
Identitäten Schritt 1, dann Schritt 2 usw. abgeschlossen haben — und wo sie abgesprungen sind. Funnels
werden einmal definiert (`POST /v1/atlas/funnels`) und wiederholt abgefragt (`GET
/v1/atlas/funnels/:id`); die Definition ändert sich bei jeder Abfrage nicht, nur das berechnete Ergebnis.

## Cohorts

Eine **Cohort** ist eine gespeicherte *Definition* von "Identitäten, die X getan haben" — z. B. "in den
letzten 30 Tagen registriert" oder "mindestens dreimal `checkout_completed` abgeschlossen". Cohorts werden
bei jedem Lesezugriff neu berechnet — die Mitgliedschaft spiegelt bei jeder Abfrage die aktuellen Daten
wider, nicht einen Snapshot vom Zeitpunkt der Erstellung.
