import { transports, format, createLogger } from 'winston';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const { combine, timestamp, printf } = format;

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

export default logger;
