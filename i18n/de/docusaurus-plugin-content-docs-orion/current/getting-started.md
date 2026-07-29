---
title: Erste Schritte
sidebar_position: 2
---

# Erste Schritte

## Voraussetzungen

Stellen Sie vor Beginn sicher, dass Sie über ein Northwind-Cloud-Konto und aktivierten API-Zugriff für Orion verfügen.

## Installation

Installieren Sie das Orion-SDK mit Ihrem bevorzugten Paketmanager und initialisieren Sie es mit Ihrem Projekt-API-Schlüssel.

```bash
npm install @northwind/orion
```

## Schnellstart

Der schnellste Weg, Orion in Aktion zu sehen, ist das Ausführen des Schnellstart-Beispiels in Ihrer lokalen Umgebung.

```js
import { Orion } from "@northwind/orion";

const client = new Orion({ apiKey: process.env.NORTHWIND_API_KEY });
```
