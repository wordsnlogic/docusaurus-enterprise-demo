---
title: Einführung
sidebar_position: 1
---

# Einführung

Atlas ist die Product-Analytics-API von Northwind Cloud: Sie senden Events (`checkout_completed`,
`feature_used`, welche Aktionen für Ihr Produkt auch immer relevant sind) und erhalten dafür Funnels,
Retention-Cohorts und abfragbare Rohdaten zurück. Atlas ist für Teams gedacht, die Analytics-Infrastruktur
wollen, ohne eine eigene Event-Pipeline zu betreiben.

## Was Atlas nicht ist

Atlas ist eine Events-API, keine vollständige Customer-Data-Plattform — es gibt kein CDP-artiges
Reverse-ETL, keine Warehouse-Synchronisation, kein Destination-Fan-out. Wenn Sie das brauchen, kombinieren
Sie Atlas mit [Cascade](/docs/cascade/intro) für Pipeline-/Warehouse-Aufgaben; Atlas konzentriert sich
darauf, der schnellste Weg von "Nutzer hat etwas getan" zu "in einem Funnel abfragbar" zu sein.

## Hauptfunktionen

- Echtzeit-Event-Streaming mit Ingestion unter einer Sekunde (p99 &lt; 400 ms von `POST` bis abfragbar)
- Individuelle Funnels und Retention-Cohorts, live berechnet — keine Batch-Jobs, auf die Sie warten müssen
- SQL-basierte Ad-hoc-Abfragen über Rohdaten via den [Query-Endpunkt](./api-reference.md)

## Bevor Sie beginnen

Lesen Sie zuerst [Konzepte](./concepts.md) — insbesondere, wie Atlas Events und Identitäten modelliert —
bevor Sie zu [Erste Schritte](./getting-started.md) springen. Zehn Minuten dort ersparen Ihnen den
häufigsten Integrationsfehler: inkonsistente Event-Benennung, die Funnels erst Wochen später unbemerkt
zerstört.
