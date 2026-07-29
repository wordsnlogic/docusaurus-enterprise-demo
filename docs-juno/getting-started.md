---
title: Getting Started
sidebar_position: 2
---

# Getting Started

## Prerequisites

Before you begin, make sure you have a Northwind Cloud account and API access enabled for Juno.

## Installation

Install the Juno SDK using your package manager of choice, then initialize it with your project API key.

```bash
npm install @northwind/juno
```

## Quick start

The fastest way to see Juno in action is to run the quick-start example in your local environment.

```js
import { Juno } from "@northwind/juno";

const client = new Juno({ apiKey: process.env.NORTHWIND_API_KEY });
```
