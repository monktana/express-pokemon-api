import QueryString from 'qs'
import { WrongParameterError } from '../validation/types/parameters/error'

enum QUERYDEFAULTS {
  START = 0,
  LIMIT = 10000
}

interface Filter {
  paramterName: string,
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
    { paramterName: 'name', validationRegx: /^[a-zA-Z-]*$/gm, parsingMethod: (x: string): string => x },
    { paramterName: 'ids', validationRegx: /^[0-9,]*$/gm, parsingMethod: QueryParameters.parseIDs }
  ];

  constructor(query: QueryString.ParsedQs) {
    QueryParameters.PAGINATION.forEach((parameter: string) => {
      if (query[parameter]) {
        const parameterAsString = query[parameter]!.toString()
        if (parameterAsString.match(/\D/))
          throw new WrongParameterError(parameter, parameterAsString, 'not an positive integer')

        const parameterAsInt = parseInt(parameterAsString)
        if (!Number.isInteger(parameterAsInt))
          throw new WrongParameterError(parameter, parameterAsInt, 'not an integer')
        
        this[parameter] = parameterAsInt
      }
    })

    QueryParameters.FILTER.forEach((filter: Filter) => {
      const { paramterName, validationRegx, parsingMethod } = filter

      if (query[paramterName]) {
        const parameterValue = query[paramterName]!
        if (Array.isArray(parameterValue))
          throw new WrongParameterError(paramterName, parameterValue, 'multiple values')
  
        if (typeof parameterValue === 'object')
          throw new WrongParameterError(paramterName, parameterValue, 'sent as an object')
  
        if (!parameterValue.toString().match(validationRegx))
          throw new WrongParameterError(paramterName, parameterValue, 'a comma seperated list of strings')
        
        this[paramterName] = parsingMethod(parameterValue)
      }
    })
  }

  private static parseIDs(ids: string): Array<number> {
    return ids.split(',').map(x => parseInt(x))
  }
}