---
title: Getting Started
sidebar_position: 2
---

# Getting Started

## Prerequisites

Before you begin, make sure you have a Northwind Cloud account and API access enabled for Meridian.

## Installation

Install the Meridian SDK using your package manager of choice, then initialize it with your project API key.

```bash
npm install @northwind/meridian
```

## Quick start

The fastest way to see Meridian in action is to run the quick-start example in your local environment.

```js
import { Meridian } from "@northwind/meridian";

const client = new Meridian({ apiKey: process.env.NORTHWIND_API_KEY });
```
