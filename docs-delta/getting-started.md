---
title: Getting Started
sidebar_position: 2
---

# Getting Started

## Prerequisites

Before you begin, make sure you have a Northwind Cloud account and API access enabled for Delta.

## Installation

Install the Delta SDK using your package manager of choice, then initialize it with your project API key.

```bash
npm install @northwind/delta
```

## Quick start

The fastest way to see Delta in action is to run the quick-start example in your local environment.

```js
import { Delta } from "@northwind/delta";

const client = new Delta({ apiKey: process.env.NORTHWIND_API_KEY });
```
