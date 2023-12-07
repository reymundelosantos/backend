const winston = require('winston');
const expressWinston = require('express-winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' })
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
});

const httpLogger = expressWinston.logger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/http.log' }),
  ],
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  meta: false,
  expressFormat: true,
  colorize: false,
});

module.exports = { logger, httpLogger };
