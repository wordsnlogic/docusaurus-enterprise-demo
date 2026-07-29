---
title: Erste Schritte
sidebar_position: 2
---

# Erste Schritte

## Voraussetzungen

Stellen Sie vor Beginn sicher, dass Sie über ein Northwind-Cloud-Konto und aktivierten API-Zugriff für Meridian verfügen.

## Installation

Installieren Sie das Meridian-SDK mit Ihrem bevorzugten Paketmanager und initialisieren Sie es mit Ihrem Projekt-API-Schlüssel.

```bash
npm install @northwind/meridian
```

## Schnellstart

Der schnellste Weg, Meridian in Aktion zu sehen, ist das Ausführen des Schnellstart-Beispiels in Ihrer lokalen Umgebung.

```js
import { Meridian } from "@northwind/meridian";

const client = new Meridian({ apiKey: process.env.NORTHWIND_API_KEY });
```
