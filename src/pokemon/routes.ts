import { NextFunction, Request, Response } from 'express'
import { Pokemon, PokemonTypes } from './models';
import { Type } from '../types/models';

export async function list(request: Request, response: Response, next: NextFunction): Promise<void> {
  try {
    const {count, rows} = await Pokemon.findAndCountAll();
    response.status(200).send({count, rows});
  } catch (error) {
    next(error)
  }
}

export async function get(request: Request, response: Response, next: NextFunction): Promise<void> {
  const id = request.params.id;

  try {
    const pokemon = await Pokemon.findByPk(id, {include: {model: Type, as: 'types', through: {attributes: []}}});
    if (!pokemon) {
      throw new Error(`no ressource found with id ${id}`)
    }
    response.status(200).send(pokemon);
  } catch (error) {
    next(error)
  }
}