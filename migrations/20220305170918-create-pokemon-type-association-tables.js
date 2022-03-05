'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('TypeMatchups', 
    { 
      attackingTypeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Types',
          key: 'id'
        },
        allowNull: false,
        onDelete: 'cascade'
      },
      defendingTypeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Types',
          key: 'id'
        },
        allowNull: false,
        onDelete: 'cascade'
      },
      damageClass: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      schema: 'public',
      comment: 'my table',
    });

    await queryInterface.createTable('PokemonTypes', 
    { 
      pokemonId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Pokemon',
          key: 'id'
        },
        allowNull: false,
        onDelete: 'cascade'
      },
      typeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Types',
          key: 'id'
        },
        allowNull: false,
        onDelete: 'cascade'
      }
    },
    {
      schema: 'public',
      comment: 'my table',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('TypeMatchups');
    await queryInterface.dropTable('PokemonTypes');
  }
};
