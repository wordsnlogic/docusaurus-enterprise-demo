---
title: Erste Schritte
sidebar_position: 2
---

# Erste Schritte

## Voraussetzungen

Stellen Sie vor Beginn sicher, dass Sie über ein Northwind-Cloud-Konto und aktivierten API-Zugriff für Nova verfügen.

## Installation

Installieren Sie das Nova-SDK mit Ihrem bevorzugten Paketmanager und initialisieren Sie es mit Ihrem Projekt-API-Schlüssel.

```bash
npm install @northwind/nova
```

## Schnellstart

Der schnellste Weg, Nova in Aktion zu sehen, ist das Ausführen des Schnellstart-Beispiels in Ihrer lokalen Umgebung.

```js
import { Nova } from "@northwind/nova";

const client = new Nova({ apiKey: process.env.NORTHWIND_API_KEY });
```
