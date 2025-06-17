#!/bin/bash

# Script para configurar el cron job que mantiene el servidor activo

echo "🔧 Configurando cron job para mantener el servidor activo..."

# Obtener la ruta absoluta del proyecto
PROJECT_PATH="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SCRIPT_PATH="$PROJECT_PATH/scripts/keep-alive.js"

echo "📁 Ruta del proyecto: $PROJECT_PATH"
echo "📄 Script: $SCRIPT_PATH"

# Verificar que el script existe
if [ ! -f "$SCRIPT_PATH" ]; then
    echo "❌ Error: No se encuentra el script keep-alive.js"
    exit 1
fi

# Crear una entrada temporal para el crontab
CRON_ENTRY="*/10 * * * * cd $PROJECT_PATH && node $SCRIPT_PATH >> $PROJECT_PATH/logs/keep-alive.log 2>&1"

echo "📝 Entrada de cron que se agregará:"
echo "$CRON_ENTRY"
echo ""

# Crear directorio de logs si no existe
mkdir -p "$PROJECT_PATH/logs"

# Backup del crontab actual
echo "💾 Haciendo backup del crontab actual..."
crontab -l > "$PROJECT_PATH/logs/crontab_backup_$(date +%Y%m%d_%H%M%S).txt" 2>/dev/null || echo "No hay crontab previo"

# Agregar la nueva entrada al crontab
echo "➕ Agregando entrada al crontab..."
(crontab -l 2>/dev/null; echo "$CRON_ENTRY") | crontab -

if [ $? -eq 0 ]; then
    echo "✅ ¡Cron job configurado exitosamente!"
    echo ""
    echo "📊 El servidor recibirá un health check cada 10 minutos"
    echo "📝 Los logs se guardarán en: $PROJECT_PATH/logs/keep-alive.log"
    echo ""
    echo "🔍 Para ver el crontab actual ejecuta: crontab -l"
    echo "📋 Para ver los logs en tiempo real: tail -f $PROJECT_PATH/logs/keep-alive.log"
    echo "🗑️  Para remover el cron job: crontab -e (y elimina la línea manualmente)"
else
    echo "❌ Error configurando el cron job"
    exit 1
fi 