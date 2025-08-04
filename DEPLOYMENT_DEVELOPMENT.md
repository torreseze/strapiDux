# 🚀 Deployment en Modo Desarrollo

Este documento explica cómo deployar Strapi en modo desarrollo.

## 📋 Opciones Disponibles

### 1. **Scripts NPM añadidos**

```bash
# Para desarrollo con auto-reload en deployment
npm run dev:deploy

# Para iniciar en modo desarrollo (sin auto-reload)
npm run start:dev
```

### 2. **Variables de Entorno Requeridas**

Crea un archivo `.env` con estas variables:

```bash
# Environment
NODE_ENV=development

# Database (PostgreSQL para deployment)
DATABASE_CLIENT=postgres
DATABASE_HOST=tu-host-de-base-de-datos
DATABASE_PORT=5432
DATABASE_NAME=strapi
DATABASE_USERNAME=tu-usuario
DATABASE_PASSWORD=tu-contraseña
DATABASE_SSL=true

# Server
HOST=0.0.0.0
PORT=1337

# Secrets (IMPORTANTE: Genera valores únicos)
APP_KEYS=key1,key2,key3,key4
ADMIN_JWT_SECRET=tu-admin-jwt-secret-unico
API_TOKEN_SALT=tu-api-token-salt-unico
TRANSFER_TOKEN_SALT=tu-transfer-token-salt-unico
ENCRYPTION_KEY=tu-encryption-key-unica

# Flags (Opcional)
FLAG_NPS=false
FLAG_PROMOTE_EE=false
```

### 3. **Configuración por Plataforma**

#### **Render.com**
En el dashboard de Render:
- Environment Variables → Add `NODE_ENV=development`
- Build Command: `npm install && npm run build`
- Start Command: `npm run dev:deploy`

#### **Railway**
```bash
railway add NODE_ENV=development
railway deploy
```

#### **Heroku**
```bash
heroku config:set NODE_ENV=development
git push heroku main
```

#### **Vercel**
En `vercel.json`:
```json
{
  "env": {
    "NODE_ENV": "development"
  }
}
```

## ⚠️ Consideraciones Importantes

### **Ventajas del Modo Desarrollo:**
- ✅ Auto-reload de cambios
- ✅ Logs más detallados
- ✅ Debugging habilitado
- ✅ Hot module replacement

### **Desventajas en Producción:**
- ❌ Menor rendimiento
- ❌ Mayor uso de memoria
- ❌ Logs pueden contener información sensible
- ❌ Menos optimizado para escalabilidad

## 🔄 Cambiar Entre Modos

### **Para cambiar a producción:**
```bash
# Cambiar variable de entorno
NODE_ENV=production

# Usar script de producción
npm run start
```

### **Para volver a desarrollo:**
```bash
# Cambiar variable de entorno
NODE_ENV=development

# Usar script de desarrollo
npm run dev:deploy
```

## 🛠️ Troubleshooting

### **Error de conexión a DB:**
Si ves errores como `getaddrinfo ENOTFOUND`, verifica:
1. Variables de entorno de base de datos
2. Configuración SSL
3. Whitelist de IPs en tu proveedor de DB

### **Problemas de memoria:**
En modo desarrollo, considera aumentar límites:
```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run dev:deploy
```

## 🎯 Recomendación

Para **true production** usa `NODE_ENV=production` por rendimiento y seguridad.
Usa `NODE_ENV=development` solo para:
- Testing en staging
- Debugging de issues específicos
- Desarrollo con base de datos remota