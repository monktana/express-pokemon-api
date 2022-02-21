import { WrongParameterError } from './error'
import { Errback, ErrorRequestHandler, NextFunction, Request, Response } from 'express'

export const WrongParameterErrorHandler: ErrorRequestHandler = function(err: Errback, request: Request, response: Response, next: NextFunction) {
  if (err instanceof WrongParameterError) {
    response.status(422).send({ error: err.message })
    return
  }
  next(err)
}
