import { NextFunction, Request, Response } from 'express'
import { Type } from './models'
import { Pokemon } from '../pokemon/models'

export async function list(request: Request, response: Response, next: NextFunction): Promise<void> {
  try {
    const { count, rows } = await Type.findAndCountAll()
    response.status(200).send({ count, rows })
  } catch (error) {
    next(error)
  }
}

export async function get(request: Request, response: Response, next: NextFunction): Promise<void> {
  const id = request.params.id

  try {
    const type = await Type.findByPk(id, 
      {
        include: [
          {
            model: Pokemon, 
            as: 'pokemon', 
            through: {
              attributes: []
            }
          },{
            model: Type, 
            as: 'matchups', 
            through: {
              attributes: ['effectiveness']
            }
          }
        ]
      }
    )

    if (!type) 
      throw new Error(`no ressource found with id ${id}`)
    
    response.status(200).send(type)
  } catch (error) {
    next(error)
  }
}
