import {Request} from 'express'

declare global {
  namespace Express {
    export interface Request {
      id?: number
    }
  }

  export interface DBConfig {
    [key: string]: DBConfigValue
  }

  export interface DBConfigValue {
    [key: string]: string | integer | boolean | {[key: string]: DBConfigValue}
  }
}
