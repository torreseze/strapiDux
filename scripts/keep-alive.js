#!/usr/bin/env node

/**
 * Script para mantener el servidor activo
 * Este script hace una petición HTTP al endpoint de health check
 */

const https = require('https');
const http = require('http');

// Configuración - ajusta según tu deployment
const config = {
  // Para desarrollo local
  local: {
    protocol: 'http',
    host: 'localhost',
    port: 1337,
  },
  // Para producción - ajusta con tu URL real
  production: {
    protocol: 'https',
    host: 'strapidux.onrender.com', // Tu URL de Render
    port: 443,
  }
};

// Detectar entorno
const isProduction = process.env.NODE_ENV === 'production';
const env = isProduction ? config.production : config.local;

function makeHealthCheckRequest() {
  const client = env.protocol === 'https' ? https : http;
  const url = `${env.protocol}://${env.host}:${env.port}/api/health`;
  
  console.log(`[${new Date().toISOString()}] Haciendo health check a: ${url}`);
  
  const options = {
    hostname: env.host,
    port: env.port,
    path: '/api/health',
    method: 'GET',
    timeout: 10000, // 10 segundos de timeout
  };

  const req = client.request(options, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
      data += chunk;
    });
    
    res.on('end', () => {
      try {
        const response = JSON.parse(data);
        if (res.statusCode === 200 && response.status === 'ok') {
          console.log(`✅ Servidor activo - Uptime: ${Math.floor(response.uptime)}s`);
        } else {
          console.log(`⚠️  Respuesta inesperada: ${res.statusCode} - ${data}`);
        }
      } catch (error) {
        console.log(`❌ Error parseando respuesta: ${error.message}`);
      }
    });
  });

  req.on('error', (error) => {
    console.log(`❌ Error en la petición: ${error.message}`);
  });

  req.on('timeout', () => {
    console.log(`⏰ Timeout en la petición`);
    req.destroy();
  });

  req.end();
}

// Ejecutar la petición
makeHealthCheckRequest(); 