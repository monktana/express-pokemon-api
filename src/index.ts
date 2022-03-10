import express from 'express'
import { Errback, NextFunction, Request } from 'express'
import { DataTypes, Sequelize } from 'sequelize'
import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";
import { Pokemon, PokemonTypes } from './pokemon/models'
import * as pokemonRoutes from './pokemon/routes'
import { Type, TypeMatchup } from './types/models'
import * as typeRoutes from './types/routes'
import { ResourceNotFoundErrorHandler } from './validation/resource/middleware'
import { WrongParameterErrorHandler } from './validation/types/parameters/middleware'
import { logHandler, errorLogHandler } from './logging/middleware'

const port = 3000
const app = express()

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [
    new Sentry.Integrations.Http({ tracing: true }),
    new Tracing.Integrations.Express({ app }),
  ],

  tracesSampleRate: 1.0,
});

const sequelize = new Sequelize(process.env.DATABASE_URL || '')
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
app.use(function addID(request: Request, response: any, next: NextFunction) {
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

app.use(function onError(error: Errback, request: Request, response: any, next: NextFunction) {
  response.statusCode = 500;
  response.end("Internal Server Error.");
});

app.listen(port, () => {
  console.log(`poke-api is listening on port ${port}`)
})
