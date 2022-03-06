'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Types', [
      {
        "id": 1,
        "name": "bug",
        "damageClass": "physical"
      },
      {
        "id": 2,
        "name": "dark",
        "damageClass": "special"
      },
      {
        "id": 3,
        "name": "dragon",
        "damageClass": "special"
      },
      {
        "id": 4,
        "name": "electric",
        "damageClass": "special"
      },
      {
        "id": 5,
        "name": "fairy",
        "damageClass": "special"
      },
      {
        "id": 6,
        "name": "fighting",
        "damageClass": "physical"
      },
      {
        "id": 7,
        "name": "fire",
        "damageClass": "special"
      },
      {
        "id": 8,
        "name": "flying",
        "damageClass": "physical"
      },
      {
        "id": 9,
        "name": "ghost",
        "damageClass": "physical"
      },
      {
        "id": 10,
        "name": "grass",
        "damageClass": "special"
      },
      {
        "id": 11,
        "name": "ground",
        "damageClass": "physical"
      },
      {
        "id": 12,
        "name": "ice",
        "damageClass": "special"
      },
      {
        "id": 13,
        "name": "normal",
        "damageClass": "physical"
      },
      {
        "id": 14,
        "name": "poison",
        "damageClass": "physical"
      },
      {
        "id": 15,
        "name": "psychic",
        "damageClass": "special"
      },
      {
        "id": 16,
        "name": "rock",
        "damageClass": "physical"
      },
      {
        "id": 17,
        "name": "steel",
        "damageClass": "physical"
      },
      {
        "id": 18,
        "name": "water",
        "damageClass": "special"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Types', null, {});
  }
};
