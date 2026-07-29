---
title: Erste Schritte
sidebar_position: 2
---

# Erste Schritte

## Voraussetzungen

Stellen Sie vor Beginn sicher, dass Sie über ein Northwind-Cloud-Konto und aktivierten API-Zugriff für Beacon verfügen.

## Installation

Installieren Sie das Beacon-SDK mit Ihrem bevorzugten Paketmanager und initialisieren Sie es mit Ihrem Projekt-API-Schlüssel.

```bash
npm install @northwind/beacon
```

## Schnellstart

Der schnellste Weg, Beacon in Aktion zu sehen, ist das Ausführen des Schnellstart-Beispiels in Ihrer lokalen Umgebung.

```js
import { Beacon } from "@northwind/beacon";

const client = new Beacon({ apiKey: process.env.NORTHWIND_API_KEY });
```
