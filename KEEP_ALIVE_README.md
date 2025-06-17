# 🚀 Sistema Keep-Alive para Strapi

Este sistema mantiene tu servidor Strapi activo mediante peticiones periódicas a un endpoint de health check.

## 📋 ¿Qué incluye?

1. **Endpoint de Health Check** (`/api/health`)
2. **Script de Keep-Alive** (`scripts/keep-alive.js`)
3. **Configuración automática de Cron** (`scripts/setup-cron.sh`)

## 🔧 Configuración

### Paso 1: Configurar el endpoint (Ya hecho)

El endpoint `/api/health` ya está configurado y verificará:
- ✅ Estado del servidor Strapi
- ✅ Conexión a la base de datos
- ✅ Tiempo de actividad (uptime)

### Paso 2: Configurar el script para tu entorno

Edita `scripts/keep-alive.js` y ajusta la configuración para producción:

```javascript
production: {
  protocol: 'https',
  host: 'tu-dominio.com', // ⚠️ CAMBIA ESTO
  port: 443,
}
```

### Paso 3: Configurar el cron job

```bash
# Ejecuta el script de configuración
./scripts/setup-cron.sh
```

Esto configurará un cron job que ejecutará cada 10 minutos.

## 🎯 Uso

### Probar manualmente
```bash
# Probar el health check
curl http://localhost:1337/api/health

# Ejecutar el script keep-alive
npm run keep-alive
```

### Ver los logs
```bash
# Ver logs en tiempo real
tail -f logs/keep-alive.log

# Ver el crontab actual
crontab -l
```

## ⚙️ Personalización

### Cambiar frecuencia del cron

Edita el crontab manualmente:
```bash
crontab -e
```

Ejemplos de frecuencias:
- `*/5 * * * *` - Cada 5 minutos
- `*/15 * * * *` - Cada 15 minutos
- `0 */1 * * *` - Cada hora

### Cambiar configuración para diferentes entornos

Puedes usar variables de entorno:
```bash
# Para producción
NODE_ENV=production npm run keep-alive

# Para desarrollo (por defecto)
npm run keep-alive
```

## 🔍 Troubleshooting

### El cron no funciona
1. Verifica que el cron está activo: `crontab -l`
2. Revisa los logs: `tail -f logs/keep-alive.log`
3. Verifica que el servidor esté corriendo

### Error de conexión
1. Verifica la URL en la configuración
2. Asegúrate de que el servidor esté accesible
3. Revisa los firewalls/proxies

### Problemas de permisos
```bash
# Dar permisos al script
chmod +x scripts/keep-alive.js
chmod +x scripts/setup-cron.sh
```

## 📊 Monitoreo

El endpoint de health check devuelve información útil:

```json
{
  "status": "ok",
  "message": "Servidor activo y funcionando",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "uptime": 3600,
  "version": "1.0.0"
}
```

## 🗑️ Desinstalar

Para remover el cron job:
```bash
crontab -e
# Elimina la línea del keep-alive manualmente
```

## 💡 Recomendaciones

1. **Para servicios como Heroku/Railway**: Usa la configuración de producción
2. **Para servidores VPS**: Puedes usar tanto local como producción según tu setup
3. **Logs**: Revisa los logs periódicamente para asegurar que todo funciona
4. **Backup**: El script hace backup automático de tu crontab antes de modificarlo 