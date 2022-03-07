import { WrongParameterError } from './error'
import { Errback, ErrorRequestHandler, NextFunction, Request, Response } from 'express'

export const WrongParameterErrorHandler: ErrorRequestHandler = function(error: Errback, request: Request, response: Response, next: NextFunction) {
  if (error instanceof WrongParameterError) {
    response.status(422).send({ error: error.message })
    return
  }
  next(error)
}
