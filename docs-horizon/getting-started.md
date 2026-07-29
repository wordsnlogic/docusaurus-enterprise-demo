---
title: Getting Started
sidebar_position: 2
---

# Getting Started

## Prerequisites

Before you begin, make sure you have a Northwind Cloud account and API access enabled for Horizon.

## Installation

Install the Horizon SDK using your package manager of choice, then initialize it with your project API key.

```bash
npm install @northwind/horizon
```

## Quick start

The fastest way to see Horizon in action is to run the quick-start example in your local environment.

```js
import { Horizon } from "@northwind/horizon";

const client = new Horizon({ apiKey: process.env.NORTHWIND_API_KEY });
```
