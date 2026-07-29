---
title: Getting Started
sidebar_position: 2
---

# Getting Started

## Prerequisites

Before you begin, make sure you have a Northwind Cloud account and API access enabled for Atlas.

## Installation

Install the Atlas SDK using your package manager of choice, then initialize it with your project API key.

```bash
npm install @northwind/atlas
```

## Quick start

The fastest way to see Atlas in action is to run the quick-start example in your local environment.

```js
import { Atlas } from "@northwind/atlas";

const client = new Atlas({ apiKey: process.env.NORTHWIND_API_KEY });
```
