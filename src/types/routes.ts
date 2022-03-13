import { NextFunction, Request, Response } from 'express'
import { Type } from './models'
import { Pokemon } from '../pokemon/models'
import { QueryParameters } from './queryParameters'
import { Op, OrderItem } from 'sequelize'
import { WrongParameterError } from '../validation/types/parameters/error'
import { ResourceNotFoundError } from '../validation/resource/error'

export async function list(request: Request, response: Response, next: NextFunction): Promise<void> {
  try {
    const queryParameters = new QueryParameters(request.query)
    
    const order: OrderItem | OrderItem[] = [
      ['id', 'ASC'],
      [{model: Pokemon, as: 'pokemon'}, 'id', 'ASC'],
      [{model: Type, as: 'matchups'}, 'id', 'ASC'],
    ];

    const where: {[k: symbol]: object[]} = {
      [Op.and]: []
    }

    if (queryParameters.ids) 
      where[Op.and].push({ id: queryParameters.ids })
    
    if (queryParameters.name) 
      where[Op.and].push({ name: queryParameters.name })

    const query = {
      include: [
        {
          model: Pokemon, 
          as: 'pokemon',
          attributes: ['id', 'name'],
          through: {
            attributes: []
          }
        },{
          model: Type, 
          as: 'matchups',
          attributes: ['id', 'name'],
          through: {
            as: 'matchup',
            attributes: ['effectiveness']
          }
        }
      ],
      where,
      order,
      limit: queryParameters.limit,
      offset: queryParameters.start
    }

    const rows = await Type.findAll(query)
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

    const order: OrderItem | OrderItem[] = [
      [{model: Pokemon, as: 'pokemon'}, 'id', 'ASC'],
      [{model: Type, as: 'matchups'}, 'id', 'ASC'],
    ];
    const type = await Type.findByPk(id, 
      {
        include: [
          {
            model: Pokemon, 
            as: 'pokemon',
            attributes: ['id', 'name'],
            through: {
              attributes: []
            }
          },{
            model: Type, 
            as: 'matchups',
            attributes: ['id', 'name'],
            through: {
              as: 'matchup',
              attributes: ['effectiveness']
            }
          }
        ],
        order
      }
    )

    if (!type) 
      throw new ResourceNotFoundError(id)
    
    response.status(200).send(type)
  } catch (error) {
    next(error)
  }
}
