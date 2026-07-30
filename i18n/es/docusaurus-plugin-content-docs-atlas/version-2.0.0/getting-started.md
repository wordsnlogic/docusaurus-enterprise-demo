---
title: Primeros pasos
sidebar_position: 3
---

# Primeros pasos

## Requisitos previos

Una cuenta de Northwind Cloud y una clave de API de Atlas (**Configuración → Claves de API**). Use
claves separadas para staging y producción.

## Enviar tu primer evento

**cURL**

```bash
curl https://api.northwind.cloud/v1/atlas/events \
  -H "Authorization: Bearer $ATLAS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "events": [{
      "name": "checkout_completed",
      "user_id": "usr_8f3a1c",
      "timestamp": "2026-07-15T14:32:00Z",
      "properties": { "revenue": 84.50, "currency": "USD", "items": 3 }
    }]
  }'
```

**Node.js**

```js
import { Atlas } from "@northwind/atlas";

const atlas = new Atlas({ apiKey: process.env.ATLAS_API_KEY });

await atlas.track({
  name: "checkout_completed",
  userId: "usr_8f3a1c",
  properties: { revenue: 84.50, currency: "USD", items: 3 },
});
```

**Python**

```python
from northwind_atlas import Atlas

atlas = Atlas(api_key=os.environ["ATLAS_API_KEY"])

atlas.track(
    name="checkout_completed",
    user_id="usr_8f3a1c",
    properties={"revenue": 84.50, "currency": "USD", "items": 3},
)
```

Los tres hacen lo mismo: son envoltorios delgados sobre `POST /v1/atlas/events`
([referencia de la API](./api-reference.md)).

## Identificar usuarios

Si un visitante anónimo luego inicia sesión, no reenvíe sus eventos históricos bajo el nuevo `user_id` —
use el endpoint de fusión de identidades:

```bash
curl https://api.northwind.cloud/v1/atlas/identities/merge \
  -H "Authorization: Bearer $ATLAS_API_KEY" \
  -d '{ "anonymous_id": "anon_x92k1", "user_id": "usr_8f3a1c" }'
```

## Verificar que funcionó

```bash
curl "https://api.northwind.cloud/v1/atlas/events?user_id=usr_8f3a1c&limit=1" \
  -H "Authorization: Bearer $ATLAS_API_KEY"
```

Si obtienes un array `data` vacío, verifica primero el entorno de la clave antes de asumir un fallo de
ingestión.
