import { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';

export class Pokemon extends Model<InferAttributes<Pokemon>, InferCreationAttributes<Pokemon>> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare baseExperience: number;
  declare height: number;
  declare weight: number;
  declare pokedexEntry: string | null;
}