import { Model, InferAttributes, InferCreationAttributes, CreationOptional, BelongsToManyGetAssociationsMixin } from 'sequelize'
import { Pokemon } from '../pokemon/models'

export class Type extends Model<InferAttributes<Type>, InferCreationAttributes<Type>> {
  declare id: CreationOptional<number>
  declare name: string
  declare damageClass: string

  declare pokemon: BelongsToManyGetAssociationsMixin<Pokemon>
  declare matchups: BelongsToManyGetAssociationsMixin<Type>
}

export class TypeMatchup extends Model<InferAttributes<TypeMatchup>, InferCreationAttributes<TypeMatchup>> {
  declare attackingTypeId: CreationOptional<number>
  declare defendingTypeId: CreationOptional<number>
  declare damageClass: number
}
