---
title: Erste Schritte
sidebar_position: 2
---

# Erste Schritte

## Voraussetzungen

Stellen Sie vor Beginn sicher, dass Sie über ein Northwind-Cloud-Konto und aktivierten API-Zugriff für Delta verfügen.

## Installation

Installieren Sie das Delta-SDK mit Ihrem bevorzugten Paketmanager und initialisieren Sie es mit Ihrem Projekt-API-Schlüssel.

```bash
npm install @northwind/delta
```

## Schnellstart

Der schnellste Weg, Delta in Aktion zu sehen, ist das Ausführen des Schnellstart-Beispiels in Ihrer lokalen Umgebung.

```js
import { Delta } from "@northwind/delta";

const client = new Delta({ apiKey: process.env.NORTHWIND_API_KEY });
```
