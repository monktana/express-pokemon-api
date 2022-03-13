import { NextFunction, Request, Response } from 'express'
import { Pokemon } from './models'
import { Type } from '../types/models'
import { QueryParameters } from './queryParameters'
import sequelize, { Op, OrderItem } from 'sequelize'
import { ResourceNotFoundError } from '../validation/resource/error'
import { WrongParameterError } from '../validation/types/parameters/error'


export async function list(request: Request, response: Response, next: NextFunction): Promise<void> {
  try {
    const queryParameters = new QueryParameters(request.query)

    let includeWhere: sequelize.Utils.Literal | undefined = undefined
    if (queryParameters.types) {
      const typeIds = (await Type.findAll({ attributes:['id'], where: { name: queryParameters.types } })).map(type => type.id)
      if (typeIds.length === 0) {
        response.status(200).send({ count: 0, results: [] })
        return
      }

      includeWhere = sequelize.literal(`ARRAY(SELECT "typeId" FROM "PokemonTypes" WHERE "pokemonId" = "Pokemon"."id") @> ARRAY[${typeIds}]`)
    }

    const where: {[k: symbol]: object[]} = {
      [Op.and]: []
    }

    if (queryParameters.ids) 
      where[Op.and].push({ id: queryParameters.ids })
    
    if (queryParameters.name) 
      where[Op.and].push({ name: queryParameters.name })

    const order: OrderItem | OrderItem[] = [
      ['id', 'ASC'],
      [{model: Type, as: 'types'}, 'id', 'ASC'],
    ];

    const query = {
      include: {
        model: Type,
        as: 'types',
        where: includeWhere || {},
        through: {
          attributes: []
        }
      },
      where,
      order,
      limit: queryParameters.limit,
      offset: queryParameters.start
    }
    const rows = await Pokemon.findAll(query)
    response.status(200).send({ count: rows.length, results: rows })
  } catch (error) {
    next(error)
  }
}

export async function get(request: Request, response: Response, next: NextFunction): Promise<void> {
  try {
    const id = request.params.id

    if (id.match(/\D/) || !Number.isInteger(parseInt(id)))
      throw new WrongParameterError('id', 'a positive integer')

    const pokemon = await Pokemon.findByPk(id, { include: { model: Type, as: 'types', through: { attributes: [] } } })
    if (!pokemon) 
      throw new ResourceNotFoundError(id)
    
    response.status(200).send(pokemon)
  } catch (error) {
    next(error)
  }
}
