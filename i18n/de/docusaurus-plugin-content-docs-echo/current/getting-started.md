---
title: Erste Schritte
sidebar_position: 2
---

# Erste Schritte

## Voraussetzungen

Stellen Sie vor Beginn sicher, dass Sie über ein Northwind-Cloud-Konto und aktivierten API-Zugriff für Echo verfügen.

## Installation

Installieren Sie das Echo-SDK mit Ihrem bevorzugten Paketmanager und initialisieren Sie es mit Ihrem Projekt-API-Schlüssel.

```bash
npm install @northwind/echo
```

## Schnellstart

Der schnellste Weg, Echo in Aktion zu sehen, ist das Ausführen des Schnellstart-Beispiels in Ihrer lokalen Umgebung.

```js
import { Echo } from "@northwind/echo";

const client = new Echo({ apiKey: process.env.NORTHWIND_API_KEY });
```
