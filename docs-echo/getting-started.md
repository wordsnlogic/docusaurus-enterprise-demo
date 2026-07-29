---
title: Getting Started
sidebar_position: 2
---

# Getting Started

## Prerequisites

Before you begin, make sure you have a Northwind Cloud account and API access enabled for Echo.

## Installation

Install the Echo SDK using your package manager of choice, then initialize it with your project API key.

```bash
npm install @northwind/echo
```

## Quick start

The fastest way to see Echo in action is to run the quick-start example in your local environment.

```js
import { Echo } from "@northwind/echo";

const client = new Echo({ apiKey: process.env.NORTHWIND_API_KEY });
```
