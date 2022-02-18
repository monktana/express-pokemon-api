import { DataTypes, Sequelize } from 'sequelize';
import { NextFunction, Request, Response } from 'express'
import { Pokemon } from './models';

const sequelize = new Sequelize(process.env.POSTGRES || '')

Pokemon.init(
  {
    id: {
      type: DataTypes.SMALLINT,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.CHAR(50),
      allowNull: false,
    },
    baseExperience: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      field: 'base_experience'
    },
    height: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    weight: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    pokedexEntry: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'pokedex_entry'
    },
  },
  {
    tableName: "pokemon",
    timestamps: false,
    sequelize,
  }
);

export async function list(request: Request, response: Response, next: NextFunction): Promise<void> {
  try {
    const pokemon = await Pokemon.findAll();
    console.log(`Found ${pokemon.length} pokemon.`);
    response.send(JSON.stringify(pokemon));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}