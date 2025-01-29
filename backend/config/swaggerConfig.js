const swaggerJsdoc = require('swagger-jsdoc');
require('dotenv').config();
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Test Project',
      version: '1.0.0',
      description: 'API documentation for the catalog service project',
    },
    servers: [
      {
        url: 'http://localhost:'+(process.env.PORT || 8000), // Replace with your base URL
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Path to your route files
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;