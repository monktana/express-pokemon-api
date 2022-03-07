import { format } from "winston";
import winston from "winston";

const formatLogEntry = format.printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level} : ${message}`;
});

export const logger: winston.Logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    formatLogEntry
  ),
  exitOnError: false,
  transports: [
    new winston.transports.File({ filename: 'info.log' })
  ]
})

export const errorLogger: winston.Logger = winston.createLogger({
  level: 'error',
  format: format.combine(
    format.timestamp(),
    formatLogEntry
  ),
  exitOnError: false,
  transports: [
    new winston.transports.File({ filename: 'errors.log' })
  ]
})