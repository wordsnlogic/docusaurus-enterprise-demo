---
title: Getting Started
sidebar_position: 2
---

# Getting Started

## Prerequisites

Before you begin, make sure you have a Northwind Cloud account and API access enabled for Falcon.

## Installation

Install the Falcon SDK using your package manager of choice, then initialize it with your project API key.

```bash
npm install @northwind/falcon
```

## Quick start

The fastest way to see Falcon in action is to run the quick-start example in your local environment.

```js
import { Falcon } from "@northwind/falcon";

const client = new Falcon({ apiKey: process.env.NORTHWIND_API_KEY });
```
