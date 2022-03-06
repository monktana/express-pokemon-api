'use strict';

module.exports = {
 async up(queryInterface, Sequelize) {
  await queryInterface.createTable('Pokemon', 
    { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      baseExperience: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      height: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      weight: {
        type: Sequelize.SMALLINT,
        allowNull: false
      },
      pokedexEntry: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      schema: 'public',
      comment: 'Contains the base information of each pokemon',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pokemon');
  }
}
