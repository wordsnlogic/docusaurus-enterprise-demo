---
title: Getting Started
sidebar_position: 2
---

# Getting Started

## Prerequisites

Before you begin, make sure you have a Northwind Cloud account and API access enabled for Kepler.

## Installation

Install the Kepler SDK using your package manager of choice, then initialize it with your project API key.

```bash
npm install @northwind/kepler
```

## Quick start

The fastest way to see Kepler in action is to run the quick-start example in your local environment.

```js
import { Kepler } from "@northwind/kepler";

const client = new Kepler({ apiKey: process.env.NORTHWIND_API_KEY });
```
