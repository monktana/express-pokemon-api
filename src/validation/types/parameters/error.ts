export class WrongParameterError extends Error {
  constructor(parameterName: string, format: string) {
    const message = `Value of parameter '${parameterName}' has to be: ${format}`
    super(message)
  }
}
