import { format } from "winston";
import winston from "winston";

const formatLogEntry = format.printf(({ level, message, timestamp }) => {
  const levelString = `[${level}]`.padEnd(9, " ")
  return `${timestamp} ${levelString} | ${message}`;
});

export const logger: winston.Logger = winston.createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    formatLogEntry
  ),
  exitOnError: false,
  transports: [
    new winston.transports.File({ filename: './docs/logs/info.log' })
  ]
})