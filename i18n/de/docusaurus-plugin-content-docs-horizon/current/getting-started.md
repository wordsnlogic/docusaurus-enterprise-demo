---
title: Erste Schritte
sidebar_position: 2
---

# Erste Schritte

## Voraussetzungen

Stellen Sie vor Beginn sicher, dass Sie über ein Northwind-Cloud-Konto und aktivierten API-Zugriff für Horizon verfügen.

## Installation

Installieren Sie das Horizon-SDK mit Ihrem bevorzugten Paketmanager und initialisieren Sie es mit Ihrem Projekt-API-Schlüssel.

```bash
npm install @northwind/horizon
```

## Schnellstart

Der schnellste Weg, Horizon in Aktion zu sehen, ist das Ausführen des Schnellstart-Beispiels in Ihrer lokalen Umgebung.

```js
import { Horizon } from "@northwind/horizon";

const client = new Horizon({ apiKey: process.env.NORTHWIND_API_KEY });
```
