import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';

export class Type extends Model<InferAttributes<Type>, InferCreationAttributes<Type>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare damageClass: string;
}