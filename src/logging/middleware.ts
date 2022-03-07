import { Errback, ErrorRequestHandler, RequestHandler, NextFunction, Request, Response } from 'express'
import { logger, errorLogger } from "./logger";

export const logHandler: RequestHandler = function(request: Request, response: Response, next: NextFunction) {
  const {path, method, query, params} = request
  const requestTime = Date.now()

  logger.info(`[${method}] ${path}: query = ${query.toString()}, parameters = ${params.toString()}`)

  var end = response.end;
  response.end = function(chunk?: any, encoding?: any, callback?: (() => void) | undefined): Response<any, Record<string, any>> {
    const responseTime = (Date.now()) - requestTime;

    logger.info(`[${method}] ${path}: finished in ${responseTime}ms with status ${response.statusCode}`)

    response.end = end;
    return response.end(chunk, encoding, callback)
  }

  next()
}

export const errorLogHandler: ErrorRequestHandler = function(error: Errback, request: Request, response: Response, next: NextFunction) {
  const {path, method} = request
  errorLogger.error(`[${method}] ${path} failed: ${error.toString()}`)

  next(error)
}
