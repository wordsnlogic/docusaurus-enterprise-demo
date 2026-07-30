---
title: Getting Started
sidebar_position: 2
---

# Getting Started

## Prerequisites

Before you begin, make sure you have a Northwind Cloud account and API access enabled for Genesis.

## Installation

Install the Genesis SDK using your package manager of choice, then initialize it with your project API key.

```bash
npm install @northwind/genesis
```

## Quick start

The fastest way to see Genesis in action is to run the quick-start example in your local environment.

```js
import { Genesis } from "@northwind/genesis";

const client = new Genesis({ apiKey: process.env.NORTHWIND_API_KEY });
```
