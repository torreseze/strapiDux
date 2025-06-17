/**
 * health router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/health',
      handler: 'health.index',
      config: {
        auth: false, // No requiere autenticación
        policies: [],
        middlewares: [],
      },
    },
  ],
}; 