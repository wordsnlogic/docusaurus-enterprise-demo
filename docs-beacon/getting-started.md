---
title: Getting Started
sidebar_position: 2
---

# Getting Started

## Prerequisites

Before you begin, make sure you have a Northwind Cloud account and API access enabled for Beacon.

## Installation

Install the Beacon SDK using your package manager of choice, then initialize it with your project API key.

```bash
npm install @northwind/beacon
```

## Quick start

The fastest way to see Beacon in action is to run the quick-start example in your local environment.

```js
import { Beacon } from "@northwind/beacon";

const client = new Beacon({ apiKey: process.env.NORTHWIND_API_KEY });
```
