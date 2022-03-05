'use strict';

module.exports = {
 async up(queryInterface, Sequelize) {
  await queryInterface.createTable('Types', 
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
      damageClass: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      schema: 'public',
      comment: 'my table',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Types');
  }
}
