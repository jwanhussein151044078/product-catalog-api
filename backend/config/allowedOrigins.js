require('dotenv').config();
const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://localhost:3000',
    'http://localhost:'+(process.env.PORT || 8000)
];

module.exports = allowedOrigins;