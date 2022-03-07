import { Errback, ErrorRequestHandler, RequestHandler, NextFunction, Request, Response } from 'express'
import { logger } from "./logger";

export const logHandler: RequestHandler = function(request: Request, response: Response, next: NextFunction) {
  const {id, path, method, ip, query} = request
  const requestTime = Date.now()

  logger.info(`[${id}] ${method} ${path} | ip ${ip} query ${JSON.stringify(query)}`)

  var end = response.end;
  response.end = function(chunk?: any, encoding?: any, callback?: (() => void) | undefined): Response<any, Record<string, any>> {
    const responseTime = (Date.now()) - requestTime;

    logger.info(`[${id}] ${method} ${path}: finished in ${responseTime}ms with status ${response.statusCode}`)

    response.end = end;
    return response.end(chunk, encoding, callback)
  }

  next()
}

export const errorLogHandler: ErrorRequestHandler = function(error: Errback, request: Request, response: Response, next: NextFunction) {
  const {id, path, method} = request
  logger.error(`[${id}] ${method} ${path} | ${error.toString()}`)

  next(error)
}
