/**
 * health controller
 */

export default {
  async index(ctx) {
    try {
      // Verificar que Strapi esté funcionando
      const serverTime = new Date().toISOString();
      
      // Verificar conexión a la base de datos de forma simple
      await strapi.db.connection.raw('SELECT 1');
      
      ctx.body = {
        status: 'ok',
        message: 'Servidor activo y funcionando',
        timestamp: serverTime,
        uptime: process.uptime(),
        version: process.env.npm_package_version || '1.0.0'
      };
      
      ctx.status = 200;
    } catch (error) {
      ctx.body = {
        status: 'error',
        message: 'Error en el servidor',
        timestamp: new Date().toISOString(),
        error: error.message
      };
      
      ctx.status = 500;
    }
  },
}; 