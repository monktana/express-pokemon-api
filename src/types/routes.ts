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
    response.status(200).send(types);
  } catch (error) {
    next(error)
  }
}

export async function get(request: Request, response: Response, next: NextFunction): Promise<void> {
  const id = request.params.id;

  try {
    const type = await Type.findByPk(id);
    if (!type) {
      throw new Error(`no ressource found with id ${id}`)
    }
    response.status(200).send(type);
  } catch (error) {
    next(error)
  }
}