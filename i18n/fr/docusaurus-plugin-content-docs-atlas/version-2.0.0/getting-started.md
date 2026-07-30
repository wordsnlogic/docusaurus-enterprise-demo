---
title: Bien démarrer
sidebar_position: 3
---

# Bien démarrer

## Prérequis

Un compte Northwind Cloud et une clé API Atlas (**Paramètres → Clés API**). Utilisez des clés séparées
pour staging et production.

## Envoyer votre premier event

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

Les trois font la même chose : de simples wrappers autour de `POST /v1/atlas/events`
([référence API](./api-reference.md)).

## Identifier les utilisateurs

Pour fusionner un visiteur anonyme avec un compte connecté, utilisez la fusion d'identité plutôt que de
renvoyer l'historique :

```bash
curl https://api.northwind.cloud/v1/atlas/identities/merge \
  -H "Authorization: Bearer $ATLAS_API_KEY" \
  -d '{ "anonymous_id": "anon_x92k1", "user_id": "usr_8f3a1c" }'
```

## Vérifier que ça a fonctionné

```bash
curl "https://api.northwind.cloud/v1/atlas/events?user_id=usr_8f3a1c&limit=1" \
  -H "Authorization: Bearer $ATLAS_API_KEY"
```

Un tableau `data` vide ? Vérifiez l'environnement de la clé avant de conclure à un échec d'ingestion.
