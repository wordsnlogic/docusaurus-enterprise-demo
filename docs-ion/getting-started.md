---
title: Getting Started
sidebar_position: 2
---

# Getting Started

## Prerequisites

Before you begin, make sure you have a Northwind Cloud account and API access enabled for Ion.

## Installation

Install the Ion SDK using your package manager of choice, then initialize it with your project API key.

```bash
npm install @northwind/ion
```

## Quick start

The fastest way to see Ion in action is to run the quick-start example in your local environment.

```js
import { Ion } from "@northwind/ion";

const client = new Ion({ apiKey: process.env.NORTHWIND_API_KEY });
```
