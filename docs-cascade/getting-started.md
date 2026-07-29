---
title: Getting Started
sidebar_position: 2
---

# Getting Started

## Prerequisites

Before you begin, make sure you have a Northwind Cloud account and API access enabled for Cascade.

## Installation

Install the Cascade SDK using your package manager of choice, then initialize it with your project API key.

```bash
npm install @northwind/cascade
```

## Quick start

The fastest way to see Cascade in action is to run the quick-start example in your local environment.

```js
import { Cascade } from "@northwind/cascade";

const client = new Cascade({ apiKey: process.env.NORTHWIND_API_KEY });
```
