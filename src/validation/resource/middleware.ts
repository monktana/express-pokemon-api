import { ResourceNotFoundError } from './error'
import { Errback, ErrorRequestHandler, NextFunction, Request, Response } from 'express'

export const ResourceNotFoundErrorHandler: ErrorRequestHandler = function(error: Errback, request: Request, response: Response, next: NextFunction) {
  if (error instanceof ResourceNotFoundError) {
    response.status(404).send({ error: error.message })
    return
  }
  next(error)
}
