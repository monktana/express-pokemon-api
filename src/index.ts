import express from 'express'
import { DataTypes, Sequelize } from 'sequelize'
import { Pokemon, PokemonTypes } from './pokemon/models'
import * as pokemonRoutes from './pokemon/routes'
import { Type, TypeMatchup } from './types/models'
import * as typeRoutes from './types/routes'
import { ResourceNotFoundErrorHandler } from './validation/resource/middleware'
import { WrongParameterErrorHandler } from './validation/types/parameters/middleware'

const port = 3000
const app = express()
const sequelize = new Sequelize(process.env.POSTGRES || '')

Pokemon.init(
  {
    id: {
      type: DataTypes.SMALLINT,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    baseExperience: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    height: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    weight: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    pokedexEntry: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    tableName: 'Pokemon',
    timestamps: false,
    sequelize
  }
)

Type.init(
  {
    id: {
      type: DataTypes.SMALLINT,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    damageClass: {
      type: DataTypes.CHAR(50),
      allowNull: false
    }
  },
  {
    timestamps: false,
    sequelize
  }
)

PokemonTypes.init(
  {
    pokemonId: {
      type: DataTypes.SMALLINT,
      references: {
        model: Pokemon,
        key: 'id'
      }
    },
    typeId: {
      type: DataTypes.SMALLINT,
      references: {
        model: Type,
        key: 'id'
      }
    }
  },
  {
    timestamps: false,
    sequelize
  }
)

TypeMatchup.init(
  {
    attackingTypeId: {
      type: DataTypes.SMALLINT,
      references: {
        model: Type,
        key: 'id'
      }
    },
    defendingTypeId: {
      type: DataTypes.SMALLINT,
      references: {
        model: Type,
        key: 'id'
      }
    },
    damageClass: {
      type: DataTypes.REAL
    }
  },
  {
    timestamps: false,
    sequelize
  }
)

Pokemon.belongsToMany(Type, { as: 'types', through: PokemonTypes, foreignKey: 'pokemonId', otherKey: 'typeId' })
Type.belongsToMany(Pokemon, { as: 'pokemon', through: PokemonTypes, foreignKey: 'typeId', otherKey: 'pokemonId' })
Type.belongsToMany(Type, { as: 'matchups', through: TypeMatchup, foreignKey: 'attackingTypeId', otherKey: 'defendingTypeId' })

app.get('/pokemon', pokemonRoutes.list)
app.get('/pokemon/:id', pokemonRoutes.get)

app.get('/types', typeRoutes.list)
app.get('/types/:id([0-9]*$)', typeRoutes.get)

app.use(WrongParameterErrorHandler)
app.use(ResourceNotFoundErrorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
