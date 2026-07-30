---
title: Erste Schritte
sidebar_position: 3
---

# Erste Schritte

## Voraussetzungen

Sie benötigen ein Northwind-Cloud-Konto und einen Atlas-API-Schlüssel, den Sie unter **Einstellungen →
API-Schlüssel** im Dashboard erzeugen. Atlas-Schlüssel sind pro Projekt begrenzt — verwenden Sie separate
Schlüssel für Staging und Produktion, damit ein geleakter Staging-Schlüssel nicht in Produktionsdaten
schreiben kann.

## Ihr erstes Event senden

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

Alle drei tun dasselbe: Die SDKs sind dünne Wrapper um denselben Endpunkt `POST /v1/atlas/events`,
dokumentiert in [API-Referenz](./api-reference.md) — falls Ihre Sprache nicht dabei ist,
reicht das cURL-Beispiel, um einen eigenen Client gegen denselben Endpunkt zu bauen.

## Nutzer identifizieren

Wenn ein Besucher zunächst anonym ist und sich später anmeldet, senden Sie dessen historische Events nicht
unter der neuen `user_id` erneut — rufen Sie stattdessen den Identity-Merge-Endpunkt auf, damit bestehende
Funnel-/Cohort-Daten erhalten bleiben:

```bash
curl https://api.northwind.cloud/v1/atlas/identities/merge \
  -H "Authorization: Bearer $ATLAS_API_KEY" \
  -d '{ "anonymous_id": "anon_x92k1", "user_id": "usr_8f3a1c" }'
```

## Überprüfen, ob es funktioniert hat

Events sind innerhalb einer Sekunde nach der Aufnahme abfragbar. Fragen Sie sie zur Bestätigung ab:

```bash
curl "https://api.northwind.cloud/v1/atlas/events?user_id=usr_8f3a1c&limit=1" \
  -H "Authorization: Bearer $ATLAS_API_KEY"
```

Wenn Sie ein leeres `data`-Array zurückbekommen, prüfen Sie zuerst die Umgebung des API-Schlüssels
(Staging-Schlüssel können keine Produktionsevents lesen), bevor Sie von einem Ingestion-Fehler ausgehen.
