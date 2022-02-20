import { Model, InferAttributes, InferCreationAttributes, CreationOptional, BelongsToManyGetAssociationsMixin } from 'sequelize'
import { Type } from '../types/models'

export class Pokemon extends Model<InferAttributes<Pokemon>, InferCreationAttributes<Pokemon>> {
  declare id: CreationOptional<number>
  declare name: string
  declare baseExperience: number
  declare height: number
  declare weight: number
  declare pokedexEntry: string | null

  declare types: BelongsToManyGetAssociationsMixin<Type>
}

export class PokemonTypes extends Model<InferAttributes<PokemonTypes>, InferCreationAttributes<PokemonTypes>> {
  declare pokemonId: CreationOptional<number>
  declare typeId: CreationOptional<number>
}
