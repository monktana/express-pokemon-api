import { Model, InferAttributes, InferCreationAttributes, CreationOptional, BelongsToManyGetAssociationsMixin } from 'sequelize';
import { Pokemon } from '../pokemon/models';

export class Type extends Model<InferAttributes<Type>, InferCreationAttributes<Type>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare damageClass: string;

  declare pokemon: BelongsToManyGetAssociationsMixin<Pokemon>;
}