import { DataTypes, Sequelize } from 'sequelize';
import { NextFunction, Request, Response } from 'express'
import { Type } from './models';

const sequelize = new Sequelize(process.env.POSTGRES || '')

Type.init(
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
    damageClass: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      field: 'damage_class'
    },
  },
  {
    timestamps: false,
    tableName: 'types',
    sequelize,
  }
);

export async function list(request: Request, response: Response, next: NextFunction): Promise<void> {
  try {
    const types = await Type.findAll();
    console.log(`Found ${types.length} types.`);
    response.send(JSON.stringify(types));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}