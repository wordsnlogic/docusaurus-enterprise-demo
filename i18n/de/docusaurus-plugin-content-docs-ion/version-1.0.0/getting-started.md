---
title: Erste Schritte
sidebar_position: 2
---

# Erste Schritte

## Voraussetzungen

Stellen Sie vor Beginn sicher, dass Sie über ein Northwind-Cloud-Konto und aktivierten API-Zugriff für Ion verfügen.

## Installation

Installieren Sie das Ion-SDK mit Ihrem bevorzugten Paketmanager und initialisieren Sie es mit Ihrem Projekt-API-Schlüssel.

```bash
npm install @northwind/ion
```

## Schnellstart

Der schnellste Weg, Ion in Aktion zu sehen, ist das Ausführen des Schnellstart-Beispiels in Ihrer lokalen Umgebung.

```js
import { Ion } from "@northwind/ion";

const client = new Ion({ apiKey: process.env.NORTHWIND_API_KEY });
```
