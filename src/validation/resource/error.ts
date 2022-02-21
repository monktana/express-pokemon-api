export class ResourceNotFoundError extends Error {
  constructor(identifier: number | string) {
    const message = `Unknown identifier '${identifier}'`
    super(message)
  }
}
