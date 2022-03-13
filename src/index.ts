import express, { NextFunction, Request, Response } from 'express'
import { DataTypes, Sequelize } from 'sequelize'
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";
import config from "./config";
import { Pokemon, PokemonTypes } from './pokemon/models'
import * as pokemonRoutes from './pokemon/routes'
import { Type, TypeMatchup } from './types/models'
import * as typeRoutes from './types/routes'
import { ResourceNotFoundErrorHandler } from './validation/resource/middleware'
import { WrongParameterErrorHandler } from './validation/types/parameters/middleware'
import { logHandler, errorLogHandler } from './logging/middleware'

const app = express()

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app }),
  ],

  tracesSampleRate: 1.0,
});

if (!process.env.NODE_ENV) {
  throw new Error("NODE Environment not defined!")
}

const dbConfig : DBConfig = config;
let sequelize;
if (process.env.NODE_ENV === 'production') {
  delete dbConfig[process.env.NODE_ENV]['use_env_variable']
  sequelize = new Sequelize(process.env.DATABASE_URL!, dbConfig[process.env.NODE_ENV])
} else {
  sequelize = new Sequelize(dbConfig[process.env.NODE_ENV])
}

Pokemon.init(
  {
    id: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
      references: {
        model: Pokemon,
        key: 'id'
      }
    },
    typeId: {
      type: DataTypes.INTEGER,
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
      type: DataTypes.INTEGER,
      references: {
        model: Type,
        key: 'id'
      }
    },
    defendingTypeId: {
      type: DataTypes.INTEGER,
      references: {
        model: Type,
        key: 'id'
      }
    },
    effectiveness: {
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

app.disable('x-powered-by')

// Middleware
app.use(Sentry.Handlers.requestHandler())
app.use(Sentry.Handlers.tracingHandler())
app.use(function addID(request: Request, response: Response, next: NextFunction) {
  request.id = new Date().getTime()
  next()
})
app.use(logHandler)

// Routes
app.get('/pokemon', pokemonRoutes.list)
app.get('/pokemon/:id', pokemonRoutes.get)

app.get('/types', typeRoutes.list)
app.get('/types/:id', typeRoutes.get)

// ErrorHandlers
app.use(Sentry.Handlers.errorHandler())
app.use(errorLogHandler)
app.use(WrongParameterErrorHandler)
app.use(ResourceNotFoundErrorHandler)

app.listen(process.env.PORT, () => {
  console.log(`poke-api is listening on port ${process.env.PORT}`)
})
