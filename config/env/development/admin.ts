export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', false), // Desactivado en desarrollo
    promoteEE: env.bool('FLAG_PROMOTE_EE', false), // Desactivado en desarrollo
  },
  // Configuraciones específicas para desarrollo
  watchIgnoreFiles: [
    './data/**/*.json',
    './public/uploads/**',
  ],
});