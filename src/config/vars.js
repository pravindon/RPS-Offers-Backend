const path = require('path');

// // import .env variables
// require('dotenv-safe').load({
//   path: path.join(__dirname, '../../.env'),
//   sample: path.join(__dirname, '../../.env'),
// });

require('dotenv-flow').config({
  path: path.join(__dirname, '../../env'),
  node_env: process.env.NODE_ENV || 'development'
});

// require('dotenv-flow').config({
//   path: path.join(__dirname, '../../env'),
//   node_env: process.env.NODE_ENV || 'development'
// });

module.exports = {
  env: process.env.NODE_ENV,
  port:process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_EXPIRATION_MINUTES,
  mongo: {
    uri:process.env.MONGO_URI,
  },
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  emailConfig: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    username: process.env.EMAIL_USERNAME,
    password: process.env.EMAIL_PASSWORD,
  },
};
