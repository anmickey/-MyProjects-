const { transports, format, createLogger } = require('winston');
const { combine, timestamp, printf } = format;
const path = require('path');

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(timestamp(), myFormat),

  transports: [
    new transports.Console(),
    new transports.File({ level: 'info', filename: path.resolve(__dirname, '..', 'logs', 'application.log') }),
    new transports.File({
      level: 'error',
      filename: path.resolve(__dirname, '..', 'logs', 'error.log'),
    }),
  ],
});

module.exports = logger;
