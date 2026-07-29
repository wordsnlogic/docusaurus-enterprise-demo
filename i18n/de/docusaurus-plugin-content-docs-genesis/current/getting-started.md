---
title: Erste Schritte
sidebar_position: 2
---

# Erste Schritte

## Voraussetzungen

Stellen Sie vor Beginn sicher, dass Sie über ein Northwind-Cloud-Konto und aktivierten API-Zugriff für Genesis verfügen.

## Installation

Installieren Sie das Genesis-SDK mit Ihrem bevorzugten Paketmanager und initialisieren Sie es mit Ihrem Projekt-API-Schlüssel.

```bash
npm install @northwind/genesis
```

## Schnellstart

Der schnellste Weg, Genesis in Aktion zu sehen, ist das Ausführen des Schnellstart-Beispiels in Ihrer lokalen Umgebung.

```js
import { Genesis } from "@northwind/genesis";

const client = new Genesis({ apiKey: process.env.NORTHWIND_API_KEY });
```
