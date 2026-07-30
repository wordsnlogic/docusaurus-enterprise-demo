---
title: Primeros pasos
sidebar_position: 3
---

# Primeros pasos

## Requisitos previos

Una cuenta de Northwind Cloud con Genesis habilitado y una clave de API de servicio a servicio
(**Configuración → Claves de API**).

## Crear un usuario

**cURL**

```bash
curl https://api.northwind.cloud/v1/genesis/users \
  -H "Authorization: Bearer $GENESIS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "email": "jordan@acme.com", "roles": ["member"] }'
```

**Node.js**

```js
import { Genesis } from "@northwind/genesis";

const genesis = new Genesis({ apiKey: process.env.GENESIS_API_KEY });

const user = await genesis.users.create({
  email: "jordan@acme.com",
  roles: ["member"],
});
```

**Python**

```python
from northwind_genesis import Genesis

genesis = Genesis(api_key=os.environ["GENESIS_API_KEY"])

user = genesis.users.create(email="jordan@acme.com", roles=["member"])
```

## Iniciar una sesión (login)

Las sesiones se crean con un flujo separado orientado al usuario — normalmente desde el envío de tu
formulario de login, no con tu clave de API de servicio:

```bash
curl https://api.northwind.cloud/v1/genesis/sessions \
  -H "Content-Type: application/json" \
  -d '{ "email": "jordan@acme.com", "password": "user-entered-password" }'
```

Una respuesta exitosa incluye un `token` de corta duración. Si la cuenta tiene MFA activado, esta
llamada devuelve `403 mfa_required` en su lugar — ver el paso de verificación MFA en
[Referencia de la API](./api-reference.md).

## Configurar SSO para un dominio de cliente

```bash
curl https://api.northwind.cloud/v1/genesis/sso/connections \
  -H "Authorization: Bearer $GENESIS_API_KEY" \
  -d '{ "domain": "acme.com", "protocol": "saml", "metadata_url": "https://acme.okta.com/app/.../sso/saml/metadata" }'
```

**Prueba esto primero con un dominio que no sea de producción.** Una vez activa la conexión, el login
con contraseña queda deshabilitado para todos los usuarios de ese dominio — ver por qué en
[Conceptos](./concepts.md).
