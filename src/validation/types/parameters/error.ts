export class WrongParameterError extends Error {
  constructor(parameterName: string, parameterValue: number | string | Record<string, unknown> | Array<unknown>, reason: string) {
    const message = `Recieved value '${parameterValue}' for parameter '${parameterName}' is invalid because: ${reason}`
    super(message)
  }
}
