const config = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "pokemon_api",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "postgres",
    password: "postgres",
    database: "pokemon_api",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false
      },
    }
  }
};

export default config;
module.exports = config; // sequelize expects the config to be exported as module.exports = {...}