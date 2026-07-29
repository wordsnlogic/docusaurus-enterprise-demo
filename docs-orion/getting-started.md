---
title: Getting Started
sidebar_position: 2
---

# Getting Started

## Prerequisites

Before you begin, make sure you have a Northwind Cloud account and API access enabled for Orion.

## Installation

Install the Orion SDK using your package manager of choice, then initialize it with your project API key.

```bash
npm install @northwind/orion
```

## Quick start

The fastest way to see Orion in action is to run the quick-start example in your local environment.

```js
import { Orion } from "@northwind/orion";

const client = new Orion({ apiKey: process.env.NORTHWIND_API_KEY });
```
