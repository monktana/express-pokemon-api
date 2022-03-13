import QueryString from 'qs'
import { WrongParameterError } from '../validation/types/parameters/error'

export enum QUERYDEFAULTS {
  START = 0,
  LIMIT = 10000
}

interface Filter {
  paramterName: string,
  format: string,
  validationRegx: RegExp,
  parsingMethod: (input: string) => string | number | Array<number>
}

/**
 * Class to wrap the query parameters of /pokemon
 */
export class QueryParameters {
  ids: Array<number> | undefined;
  name: string | undefined;

  start: number = QUERYDEFAULTS.START;
  limit: number = QUERYDEFAULTS.LIMIT;
  
  [ key: string ]: string | number | number[] | undefined;

  static readonly PAGINATION: string[] = ['start', 'limit'];
  static readonly FILTER: Filter[] = [
    { paramterName: 'name', format: 'single alphabetical string', validationRegx: /^[a-zA-Z]*$/gm, parsingMethod: (x: string): string => x },
    { paramterName: 'ids', format: 'a comma seperated list of integers', validationRegx: /^[0-9,]*$/gm, parsingMethod: QueryParameters.parseIDs }
  ];

  constructor(query: QueryString.ParsedQs) {
    QueryParameters.PAGINATION.forEach((parameter: string) => {
      if (query[parameter]) {
        const parameterAsString = query[parameter]!.toString()
        if (parameterAsString.match(/\D/))
          throw new WrongParameterError(parameter, 'a positive integer')

        const parameterAsInt = parseInt(parameterAsString)
        this[parameter] = parameterAsInt
      }
    })

    QueryParameters.FILTER.forEach((filter: Filter) => {
      const { paramterName, format, validationRegx, parsingMethod } = filter

      if (query[paramterName]) {
        const parameterValue = query[paramterName]!
        if (typeof parameterValue === 'object')
          throw new WrongParameterError(paramterName, format)
  
        if (!parameterValue.toString().match(validationRegx))
          throw new WrongParameterError(paramterName, format)
        
        this[paramterName] = parsingMethod(parameterValue)
      }
    })
  }

  private static parseIDs(ids: string): Array<number> {
    return ids.split(',').map(x => parseInt(x))
  }
}
