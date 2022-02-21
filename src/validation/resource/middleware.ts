import { ResourceNotFoundError } from './error'
import { Errback, ErrorRequestHandler, NextFunction, Request, Response } from 'express'

export const ResourceNotFoundErrorHandler: ErrorRequestHandler = function(err: Errback, request: Request, response: Response, next: NextFunction) {
  if (err instanceof ResourceNotFoundError) {
    response.status(404).send({ error: err.message })
    return
  }
  next(err)
}
