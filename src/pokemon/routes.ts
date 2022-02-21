import { NextFunction, Request, Response } from 'express'
import { Pokemon } from './models'
import { Type } from '../types/models'
import { QueryParameters } from './queryParameters'
import { Op } from 'sequelize'
import { ResourceNotFoundError } from '../validation/resource/error'

export async function list(request: Request, response: Response, next: NextFunction): Promise<void> {
  try {
    const queryParameters = new QueryParameters(request.query)
    const query = {
      include: {
        model: Type,
        as: 'types',
        where: {},
        through: {
          attributes: []
        }
      },
      where: {},
      order: ['id'],
      limit: queryParameters.limit,
      offset: queryParameters.start
    }

    const joinWhereClause: {[k: string]: string[]} = {}
    if (queryParameters.types)
      joinWhereClause.name = queryParameters.types

    query.include.where = joinWhereClause

    const whereClause: {[k: symbol]: object[]} = {
      [Op.and]: []
    }

    if (queryParameters.ids) 
      whereClause[Op.and].push({ id: queryParameters.ids })
    
    if (queryParameters.name) 
      whereClause[Op.and].push({ name: queryParameters.name })

    query.where = whereClause

    const rows = await Pokemon.findAll(query)
    response.status(200).send({ count: rows.length, results: rows })
  } catch (error) {
    next(error)
  }
}

export async function get(request: Request, response: Response, next: NextFunction): Promise<void> {
  const id = request.params.id

  try {
    const pokemon = await Pokemon.findByPk(id, { include: { model: Type, as: 'types', through: { attributes: [] } } })
    if (!pokemon) 
      throw new ResourceNotFoundError(id)
    
    response.status(200).send(pokemon)
  } catch (error) {
    next(error)
  }
}
