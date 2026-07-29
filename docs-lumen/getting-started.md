---
title: Getting Started
sidebar_position: 2
---

# Getting Started

## Prerequisites

Before you begin, make sure you have a Northwind Cloud account and API access enabled for Lumen.

## Installation

Install the Lumen SDK using your package manager of choice, then initialize it with your project API key.

```bash
npm install @northwind/lumen
```

## Quick start

The fastest way to see Lumen in action is to run the quick-start example in your local environment.

```js
import { Lumen } from "@northwind/lumen";

const client = new Lumen({ apiKey: process.env.NORTHWIND_API_KEY });
```
