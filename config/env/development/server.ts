export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // Configuraciones específicas para desarrollo
  autoReload: {
    enabled: true,
  },
  watchIgnoreFiles: [
    './data/**/*.json',
    './public/uploads/**',
  ],
});