'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PokemonTypes', [
      {
        "pokemonId": 1,
        "typeId": 10
      },
      {
        "pokemonId": 1,
        "typeId": 14
      },
      {
        "pokemonId": 2,
        "typeId": 10
      },
      {
        "pokemonId": 2,
        "typeId": 14
      },
      {
        "pokemonId": 3,
        "typeId": 10
      },
      {
        "pokemonId": 3,
        "typeId": 14
      },
      {
        "pokemonId": 4,
        "typeId": 7
      },
      {
        "pokemonId": 5,
        "typeId": 7
      },
      {
        "pokemonId": 6,
        "typeId": 7
      },
      {
        "pokemonId": 6,
        "typeId": 8
      },
      {
        "pokemonId": 7,
        "typeId": 18
      },
      {
        "pokemonId": 8,
        "typeId": 18
      },
      {
        "pokemonId": 9,
        "typeId": 18
      },
      {
        "pokemonId": 10,
        "typeId": 1
      },
      {
        "pokemonId": 11,
        "typeId": 1
      },
      {
        "pokemonId": 12,
        "typeId": 1
      },
      {
        "pokemonId": 12,
        "typeId": 8
      },
      {
        "pokemonId": 13,
        "typeId": 1
      },
      {
        "pokemonId": 13,
        "typeId": 14
      },
      {
        "pokemonId": 14,
        "typeId": 1
      },
      {
        "pokemonId": 14,
        "typeId": 14
      },
      {
        "pokemonId": 15,
        "typeId": 1
      },
      {
        "pokemonId": 15,
        "typeId": 14
      },
      {
        "pokemonId": 16,
        "typeId": 13
      },
      {
        "pokemonId": 16,
        "typeId": 8
      },
      {
        "pokemonId": 17,
        "typeId": 13
      },
      {
        "pokemonId": 17,
        "typeId": 8
      },
      {
        "pokemonId": 18,
        "typeId": 13
      },
      {
        "pokemonId": 18,
        "typeId": 8
      },
      {
        "pokemonId": 19,
        "typeId": 13
      },
      {
        "pokemonId": 20,
        "typeId": 13
      },
      {
        "pokemonId": 21,
        "typeId": 13
      },
      {
        "pokemonId": 21,
        "typeId": 8
      },
      {
        "pokemonId": 22,
        "typeId": 13
      },
      {
        "pokemonId": 22,
        "typeId": 8
      },
      {
        "pokemonId": 23,
        "typeId": 14
      },
      {
        "pokemonId": 24,
        "typeId": 14
      },
      {
        "pokemonId": 25,
        "typeId": 4
      },
      {
        "pokemonId": 26,
        "typeId": 4
      },
      {
        "pokemonId": 27,
        "typeId": 11
      },
      {
        "pokemonId": 28,
        "typeId": 11
      },
      {
        "pokemonId": 29,
        "typeId": 14
      },
      {
        "pokemonId": 30,
        "typeId": 14
      },
      {
        "pokemonId": 31,
        "typeId": 14
      },
      {
        "pokemonId": 31,
        "typeId": 11
      },
      {
        "pokemonId": 32,
        "typeId": 14
      },
      {
        "pokemonId": 33,
        "typeId": 14
      },
      {
        "pokemonId": 34,
        "typeId": 14
      },
      {
        "pokemonId": 34,
        "typeId": 11
      },
      {
        "pokemonId": 35,
        "typeId": 5
      },
      {
        "pokemonId": 36,
        "typeId": 5
      },
      {
        "pokemonId": 37,
        "typeId": 7
      },
      {
        "pokemonId": 38,
        "typeId": 7
      },
      {
        "pokemonId": 39,
        "typeId": 13
      },
      {
        "pokemonId": 39,
        "typeId": 5
      },
      {
        "pokemonId": 40,
        "typeId": 13
      },
      {
        "pokemonId": 40,
        "typeId": 5
      },
      {
        "pokemonId": 41,
        "typeId": 14
      },
      {
        "pokemonId": 41,
        "typeId": 8
      },
      {
        "pokemonId": 42,
        "typeId": 14
      },
      {
        "pokemonId": 42,
        "typeId": 8
      },
      {
        "pokemonId": 43,
        "typeId": 10
      },
      {
        "pokemonId": 43,
        "typeId": 14
      },
      {
        "pokemonId": 44,
        "typeId": 10
      },
      {
        "pokemonId": 44,
        "typeId": 14
      },
      {
        "pokemonId": 45,
        "typeId": 10
      },
      {
        "pokemonId": 45,
        "typeId": 14
      },
      {
        "pokemonId": 46,
        "typeId": 1
      },
      {
        "pokemonId": 46,
        "typeId": 10
      },
      {
        "pokemonId": 47,
        "typeId": 1
      },
      {
        "pokemonId": 47,
        "typeId": 10
      },
      {
        "pokemonId": 48,
        "typeId": 1
      },
      {
        "pokemonId": 48,
        "typeId": 14
      },
      {
        "pokemonId": 49,
        "typeId": 1
      },
      {
        "pokemonId": 49,
        "typeId": 14
      },
      {
        "pokemonId": 50,
        "typeId": 11
      },
      {
        "pokemonId": 51,
        "typeId": 11
      },
      {
        "pokemonId": 52,
        "typeId": 13
      },
      {
        "pokemonId": 53,
        "typeId": 13
      },
      {
        "pokemonId": 54,
        "typeId": 18
      },
      {
        "pokemonId": 55,
        "typeId": 18
      },
      {
        "pokemonId": 56,
        "typeId": 6
      },
      {
        "pokemonId": 57,
        "typeId": 6
      },
      {
        "pokemonId": 58,
        "typeId": 7
      },
      {
        "pokemonId": 59,
        "typeId": 7
      },
      {
        "pokemonId": 60,
        "typeId": 18
      },
      {
        "pokemonId": 61,
        "typeId": 18
      },
      {
        "pokemonId": 62,
        "typeId": 18
      },
      {
        "pokemonId": 62,
        "typeId": 6
      },
      {
        "pokemonId": 63,
        "typeId": 15
      },
      {
        "pokemonId": 64,
        "typeId": 15
      },
      {
        "pokemonId": 65,
        "typeId": 15
      },
      {
        "pokemonId": 66,
        "typeId": 6
      },
      {
        "pokemonId": 67,
        "typeId": 6
      },
      {
        "pokemonId": 68,
        "typeId": 6
      },
      {
        "pokemonId": 69,
        "typeId": 10
      },
      {
        "pokemonId": 69,
        "typeId": 14
      },
      {
        "pokemonId": 70,
        "typeId": 10
      },
      {
        "pokemonId": 70,
        "typeId": 14
      },
      {
        "pokemonId": 71,
        "typeId": 10
      },
      {
        "pokemonId": 71,
        "typeId": 14
      },
      {
        "pokemonId": 72,
        "typeId": 18
      },
      {
        "pokemonId": 72,
        "typeId": 14
      },
      {
        "pokemonId": 73,
        "typeId": 18
      },
      {
        "pokemonId": 73,
        "typeId": 14
      },
      {
        "pokemonId": 74,
        "typeId": 16
      },
      {
        "pokemonId": 74,
        "typeId": 11
      },
      {
        "pokemonId": 75,
        "typeId": 16
      },
      {
        "pokemonId": 75,
        "typeId": 11
      },
      {
        "pokemonId": 76,
        "typeId": 16
      },
      {
        "pokemonId": 76,
        "typeId": 11
      },
      {
        "pokemonId": 77,
        "typeId": 7
      },
      {
        "pokemonId": 78,
        "typeId": 7
      },
      {
        "pokemonId": 79,
        "typeId": 18
      },
      {
        "pokemonId": 79,
        "typeId": 15
      },
      {
        "pokemonId": 80,
        "typeId": 18
      },
      {
        "pokemonId": 80,
        "typeId": 15
      },
      {
        "pokemonId": 81,
        "typeId": 4
      },
      {
        "pokemonId": 81,
        "typeId": 17
      },
      {
        "pokemonId": 82,
        "typeId": 4
      },
      {
        "pokemonId": 82,
        "typeId": 17
      },
      {
        "pokemonId": 83,
        "typeId": 13
      },
      {
        "pokemonId": 83,
        "typeId": 8
      },
      {
        "pokemonId": 84,
        "typeId": 13
      },
      {
        "pokemonId": 84,
        "typeId": 8
      },
      {
        "pokemonId": 85,
        "typeId": 13
      },
      {
        "pokemonId": 85,
        "typeId": 8
      },
      {
        "pokemonId": 86,
        "typeId": 18
      },
      {
        "pokemonId": 87,
        "typeId": 18
      },
      {
        "pokemonId": 87,
        "typeId": 12
      },
      {
        "pokemonId": 88,
        "typeId": 14
      },
      {
        "pokemonId": 89,
        "typeId": 14
      },
      {
        "pokemonId": 90,
        "typeId": 18
      },
      {
        "pokemonId": 91,
        "typeId": 18
      },
      {
        "pokemonId": 91,
        "typeId": 12
      },
      {
        "pokemonId": 92,
        "typeId": 9
      },
      {
        "pokemonId": 92,
        "typeId": 14
      },
      {
        "pokemonId": 93,
        "typeId": 9
      },
      {
        "pokemonId": 93,
        "typeId": 14
      },
      {
        "pokemonId": 94,
        "typeId": 9
      },
      {
        "pokemonId": 94,
        "typeId": 14
      },
      {
        "pokemonId": 95,
        "typeId": 16
      },
      {
        "pokemonId": 95,
        "typeId": 11
      },
      {
        "pokemonId": 96,
        "typeId": 15
      },
      {
        "pokemonId": 97,
        "typeId": 15
      },
      {
        "pokemonId": 98,
        "typeId": 18
      },
      {
        "pokemonId": 99,
        "typeId": 18
      },
      {
        "pokemonId": 100,
        "typeId": 4
      },
      {
        "pokemonId": 101,
        "typeId": 4
      },
      {
        "pokemonId": 102,
        "typeId": 10
      },
      {
        "pokemonId": 102,
        "typeId": 15
      },
      {
        "pokemonId": 103,
        "typeId": 10
      },
      {
        "pokemonId": 103,
        "typeId": 15
      },
      {
        "pokemonId": 104,
        "typeId": 11
      },
      {
        "pokemonId": 105,
        "typeId": 11
      },
      {
        "pokemonId": 106,
        "typeId": 6
      },
      {
        "pokemonId": 107,
        "typeId": 6
      },
      {
        "pokemonId": 108,
        "typeId": 13
      },
      {
        "pokemonId": 109,
        "typeId": 14
      },
      {
        "pokemonId": 110,
        "typeId": 14
      },
      {
        "pokemonId": 111,
        "typeId": 11
      },
      {
        "pokemonId": 111,
        "typeId": 16
      },
      {
        "pokemonId": 112,
        "typeId": 11
      },
      {
        "pokemonId": 112,
        "typeId": 16
      },
      {
        "pokemonId": 113,
        "typeId": 13
      },
      {
        "pokemonId": 114,
        "typeId": 10
      },
      {
        "pokemonId": 115,
        "typeId": 13
      },
      {
        "pokemonId": 116,
        "typeId": 18
      },
      {
        "pokemonId": 117,
        "typeId": 18
      },
      {
        "pokemonId": 118,
        "typeId": 18
      },
      {
        "pokemonId": 119,
        "typeId": 18
      },
      {
        "pokemonId": 120,
        "typeId": 18
      },
      {
        "pokemonId": 121,
        "typeId": 18
      },
      {
        "pokemonId": 121,
        "typeId": 15
      },
      {
        "pokemonId": 122,
        "typeId": 15
      },
      {
        "pokemonId": 122,
        "typeId": 5
      },
      {
        "pokemonId": 123,
        "typeId": 1
      },
      {
        "pokemonId": 123,
        "typeId": 8
      },
      {
        "pokemonId": 124,
        "typeId": 12
      },
      {
        "pokemonId": 124,
        "typeId": 15
      },
      {
        "pokemonId": 125,
        "typeId": 4
      },
      {
        "pokemonId": 126,
        "typeId": 7
      },
      {
        "pokemonId": 127,
        "typeId": 1
      },
      {
        "pokemonId": 128,
        "typeId": 13
      },
      {
        "pokemonId": 129,
        "typeId": 18
      },
      {
        "pokemonId": 130,
        "typeId": 18
      },
      {
        "pokemonId": 130,
        "typeId": 8
      },
      {
        "pokemonId": 131,
        "typeId": 18
      },
      {
        "pokemonId": 131,
        "typeId": 12
      },
      {
        "pokemonId": 132,
        "typeId": 13
      },
      {
        "pokemonId": 133,
        "typeId": 13
      },
      {
        "pokemonId": 134,
        "typeId": 18
      },
      {
        "pokemonId": 135,
        "typeId": 4
      },
      {
        "pokemonId": 136,
        "typeId": 7
      },
      {
        "pokemonId": 137,
        "typeId": 13
      },
      {
        "pokemonId": 138,
        "typeId": 16
      },
      {
        "pokemonId": 138,
        "typeId": 18
      },
      {
        "pokemonId": 139,
        "typeId": 16
      },
      {
        "pokemonId": 139,
        "typeId": 18
      },
      {
        "pokemonId": 140,
        "typeId": 16
      },
      {
        "pokemonId": 140,
        "typeId": 18
      },
      {
        "pokemonId": 141,
        "typeId": 16
      },
      {
        "pokemonId": 141,
        "typeId": 18
      },
      {
        "pokemonId": 142,
        "typeId": 16
      },
      {
        "pokemonId": 142,
        "typeId": 8
      },
      {
        "pokemonId": 143,
        "typeId": 13
      },
      {
        "pokemonId": 144,
        "typeId": 12
      },
      {
        "pokemonId": 144,
        "typeId": 8
      },
      {
        "pokemonId": 145,
        "typeId": 4
      },
      {
        "pokemonId": 145,
        "typeId": 8
      },
      {
        "pokemonId": 146,
        "typeId": 7
      },
      {
        "pokemonId": 146,
        "typeId": 8
      },
      {
        "pokemonId": 147,
        "typeId": 3
      },
      {
        "pokemonId": 148,
        "typeId": 3
      },
      {
        "pokemonId": 149,
        "typeId": 3
      },
      {
        "pokemonId": 149,
        "typeId": 8
      },
      {
        "pokemonId": 150,
        "typeId": 15
      },
      {
        "pokemonId": 151,
        "typeId": 15
      },
      {
        "pokemonId": 152,
        "typeId": 10
      },
      {
        "pokemonId": 153,
        "typeId": 10
      },
      {
        "pokemonId": 154,
        "typeId": 10
      },
      {
        "pokemonId": 155,
        "typeId": 7
      },
      {
        "pokemonId": 156,
        "typeId": 7
      },
      {
        "pokemonId": 157,
        "typeId": 7
      },
      {
        "pokemonId": 158,
        "typeId": 18
      },
      {
        "pokemonId": 159,
        "typeId": 18
      },
      {
        "pokemonId": 160,
        "typeId": 18
      },
      {
        "pokemonId": 161,
        "typeId": 13
      },
      {
        "pokemonId": 162,
        "typeId": 13
      },
      {
        "pokemonId": 163,
        "typeId": 13
      },
      {
        "pokemonId": 163,
        "typeId": 8
      },
      {
        "pokemonId": 164,
        "typeId": 13
      },
      {
        "pokemonId": 164,
        "typeId": 8
      },
      {
        "pokemonId": 165,
        "typeId": 1
      },
      {
        "pokemonId": 165,
        "typeId": 8
      },
      {
        "pokemonId": 166,
        "typeId": 1
      },
      {
        "pokemonId": 166,
        "typeId": 8
      },
      {
        "pokemonId": 167,
        "typeId": 1
      },
      {
        "pokemonId": 167,
        "typeId": 14
      },
      {
        "pokemonId": 168,
        "typeId": 1
      },
      {
        "pokemonId": 168,
        "typeId": 14
      },
      {
        "pokemonId": 169,
        "typeId": 14
      },
      {
        "pokemonId": 169,
        "typeId": 8
      },
      {
        "pokemonId": 170,
        "typeId": 18
      },
      {
        "pokemonId": 170,
        "typeId": 4
      },
      {
        "pokemonId": 171,
        "typeId": 18
      },
      {
        "pokemonId": 171,
        "typeId": 4
      },
      {
        "pokemonId": 172,
        "typeId": 4
      },
      {
        "pokemonId": 173,
        "typeId": 5
      },
      {
        "pokemonId": 174,
        "typeId": 13
      },
      {
        "pokemonId": 174,
        "typeId": 5
      },
      {
        "pokemonId": 175,
        "typeId": 5
      },
      {
        "pokemonId": 176,
        "typeId": 5
      },
      {
        "pokemonId": 176,
        "typeId": 8
      },
      {
        "pokemonId": 177,
        "typeId": 15
      },
      {
        "pokemonId": 177,
        "typeId": 8
      },
      {
        "pokemonId": 178,
        "typeId": 15
      },
      {
        "pokemonId": 178,
        "typeId": 8
      },
      {
        "pokemonId": 179,
        "typeId": 4
      },
      {
        "pokemonId": 180,
        "typeId": 4
      },
      {
        "pokemonId": 181,
        "typeId": 4
      },
      {
        "pokemonId": 182,
        "typeId": 10
      },
      {
        "pokemonId": 183,
        "typeId": 18
      },
      {
        "pokemonId": 183,
        "typeId": 5
      },
      {
        "pokemonId": 184,
        "typeId": 18
      },
      {
        "pokemonId": 184,
        "typeId": 5
      },
      {
        "pokemonId": 185,
        "typeId": 16
      },
      {
        "pokemonId": 186,
        "typeId": 18
      },
      {
        "pokemonId": 187,
        "typeId": 10
      },
      {
        "pokemonId": 187,
        "typeId": 8
      },
      {
        "pokemonId": 188,
        "typeId": 10
      },
      {
        "pokemonId": 188,
        "typeId": 8
      },
      {
        "pokemonId": 189,
        "typeId": 10
      },
      {
        "pokemonId": 189,
        "typeId": 8
      },
      {
        "pokemonId": 190,
        "typeId": 13
      },
      {
        "pokemonId": 191,
        "typeId": 10
      },
      {
        "pokemonId": 192,
        "typeId": 10
      },
      {
        "pokemonId": 193,
        "typeId": 1
      },
      {
        "pokemonId": 193,
        "typeId": 8
      },
      {
        "pokemonId": 194,
        "typeId": 18
      },
      {
        "pokemonId": 194,
        "typeId": 11
      },
      {
        "pokemonId": 195,
        "typeId": 18
      },
      {
        "pokemonId": 195,
        "typeId": 11
      },
      {
        "pokemonId": 196,
        "typeId": 15
      },
      {
        "pokemonId": 197,
        "typeId": 2
      },
      {
        "pokemonId": 198,
        "typeId": 2
      },
      {
        "pokemonId": 198,
        "typeId": 8
      },
      {
        "pokemonId": 199,
        "typeId": 18
      },
      {
        "pokemonId": 199,
        "typeId": 15
      },
      {
        "pokemonId": 200,
        "typeId": 9
      },
      {
        "pokemonId": 201,
        "typeId": 15
      },
      {
        "pokemonId": 202,
        "typeId": 15
      },
      {
        "pokemonId": 203,
        "typeId": 13
      },
      {
        "pokemonId": 203,
        "typeId": 15
      },
      {
        "pokemonId": 204,
        "typeId": 1
      },
      {
        "pokemonId": 205,
        "typeId": 1
      },
      {
        "pokemonId": 205,
        "typeId": 17
      },
      {
        "pokemonId": 206,
        "typeId": 13
      },
      {
        "pokemonId": 207,
        "typeId": 11
      },
      {
        "pokemonId": 207,
        "typeId": 8
      },
      {
        "pokemonId": 208,
        "typeId": 17
      },
      {
        "pokemonId": 208,
        "typeId": 11
      },
      {
        "pokemonId": 209,
        "typeId": 5
      },
      {
        "pokemonId": 210,
        "typeId": 5
      },
      {
        "pokemonId": 211,
        "typeId": 18
      },
      {
        "pokemonId": 211,
        "typeId": 14
      },
      {
        "pokemonId": 212,
        "typeId": 1
      },
      {
        "pokemonId": 212,
        "typeId": 17
      },
      {
        "pokemonId": 213,
        "typeId": 1
      },
      {
        "pokemonId": 213,
        "typeId": 16
      },
      {
        "pokemonId": 214,
        "typeId": 1
      },
      {
        "pokemonId": 214,
        "typeId": 6
      },
      {
        "pokemonId": 215,
        "typeId": 2
      },
      {
        "pokemonId": 215,
        "typeId": 12
      },
      {
        "pokemonId": 216,
        "typeId": 13
      },
      {
        "pokemonId": 217,
        "typeId": 13
      },
      {
        "pokemonId": 218,
        "typeId": 7
      },
      {
        "pokemonId": 219,
        "typeId": 7
      },
      {
        "pokemonId": 219,
        "typeId": 16
      },
      {
        "pokemonId": 220,
        "typeId": 12
      },
      {
        "pokemonId": 220,
        "typeId": 11
      },
      {
        "pokemonId": 221,
        "typeId": 12
      },
      {
        "pokemonId": 221,
        "typeId": 11
      },
      {
        "pokemonId": 222,
        "typeId": 18
      },
      {
        "pokemonId": 222,
        "typeId": 16
      },
      {
        "pokemonId": 223,
        "typeId": 18
      },
      {
        "pokemonId": 224,
        "typeId": 18
      },
      {
        "pokemonId": 225,
        "typeId": 12
      },
      {
        "pokemonId": 225,
        "typeId": 8
      },
      {
        "pokemonId": 226,
        "typeId": 18
      },
      {
        "pokemonId": 226,
        "typeId": 8
      },
      {
        "pokemonId": 227,
        "typeId": 17
      },
      {
        "pokemonId": 227,
        "typeId": 8
      },
      {
        "pokemonId": 228,
        "typeId": 2
      },
      {
        "pokemonId": 228,
        "typeId": 7
      },
      {
        "pokemonId": 229,
        "typeId": 2
      },
      {
        "pokemonId": 229,
        "typeId": 7
      },
      {
        "pokemonId": 230,
        "typeId": 18
      },
      {
        "pokemonId": 230,
        "typeId": 3
      },
      {
        "pokemonId": 231,
        "typeId": 11
      },
      {
        "pokemonId": 232,
        "typeId": 11
      },
      {
        "pokemonId": 233,
        "typeId": 13
      },
      {
        "pokemonId": 234,
        "typeId": 13
      },
      {
        "pokemonId": 235,
        "typeId": 13
      },
      {
        "pokemonId": 236,
        "typeId": 6
      },
      {
        "pokemonId": 237,
        "typeId": 6
      },
      {
        "pokemonId": 238,
        "typeId": 12
      },
      {
        "pokemonId": 238,
        "typeId": 15
      },
      {
        "pokemonId": 239,
        "typeId": 4
      },
      {
        "pokemonId": 240,
        "typeId": 7
      },
      {
        "pokemonId": 241,
        "typeId": 13
      },
      {
        "pokemonId": 242,
        "typeId": 13
      },
      {
        "pokemonId": 243,
        "typeId": 4
      },
      {
        "pokemonId": 244,
        "typeId": 7
      },
      {
        "pokemonId": 245,
        "typeId": 18
      },
      {
        "pokemonId": 246,
        "typeId": 16
      },
      {
        "pokemonId": 246,
        "typeId": 11
      },
      {
        "pokemonId": 247,
        "typeId": 16
      },
      {
        "pokemonId": 247,
        "typeId": 11
      },
      {
        "pokemonId": 248,
        "typeId": 16
      },
      {
        "pokemonId": 248,
        "typeId": 2
      },
      {
        "pokemonId": 249,
        "typeId": 15
      },
      {
        "pokemonId": 249,
        "typeId": 8
      },
      {
        "pokemonId": 250,
        "typeId": 7
      },
      {
        "pokemonId": 250,
        "typeId": 8
      },
      {
        "pokemonId": 251,
        "typeId": 15
      },
      {
        "pokemonId": 251,
        "typeId": 10
      },
      {
        "pokemonId": 252,
        "typeId": 10
      },
      {
        "pokemonId": 253,
        "typeId": 10
      },
      {
        "pokemonId": 254,
        "typeId": 10
      },
      {
        "pokemonId": 255,
        "typeId": 7
      },
      {
        "pokemonId": 256,
        "typeId": 7
      },
      {
        "pokemonId": 256,
        "typeId": 6
      },
      {
        "pokemonId": 257,
        "typeId": 7
      },
      {
        "pokemonId": 257,
        "typeId": 6
      },
      {
        "pokemonId": 258,
        "typeId": 18
      },
      {
        "pokemonId": 259,
        "typeId": 18
      },
      {
        "pokemonId": 259,
        "typeId": 11
      },
      {
        "pokemonId": 260,
        "typeId": 18
      },
      {
        "pokemonId": 260,
        "typeId": 11
      },
      {
        "pokemonId": 261,
        "typeId": 2
      },
      {
        "pokemonId": 262,
        "typeId": 2
      },
      {
        "pokemonId": 263,
        "typeId": 13
      },
      {
        "pokemonId": 264,
        "typeId": 13
      },
      {
        "pokemonId": 265,
        "typeId": 1
      },
      {
        "pokemonId": 266,
        "typeId": 1
      },
      {
        "pokemonId": 267,
        "typeId": 1
      },
      {
        "pokemonId": 267,
        "typeId": 8
      },
      {
        "pokemonId": 268,
        "typeId": 1
      },
      {
        "pokemonId": 269,
        "typeId": 1
      },
      {
        "pokemonId": 269,
        "typeId": 14
      },
      {
        "pokemonId": 270,
        "typeId": 18
      },
      {
        "pokemonId": 270,
        "typeId": 10
      },
      {
        "pokemonId": 271,
        "typeId": 18
      },
      {
        "pokemonId": 271,
        "typeId": 10
      },
      {
        "pokemonId": 272,
        "typeId": 18
      },
      {
        "pokemonId": 272,
        "typeId": 10
      },
      {
        "pokemonId": 273,
        "typeId": 10
      },
      {
        "pokemonId": 274,
        "typeId": 10
      },
      {
        "pokemonId": 274,
        "typeId": 2
      },
      {
        "pokemonId": 275,
        "typeId": 10
      },
      {
        "pokemonId": 275,
        "typeId": 2
      },
      {
        "pokemonId": 276,
        "typeId": 13
      },
      {
        "pokemonId": 276,
        "typeId": 8
      },
      {
        "pokemonId": 277,
        "typeId": 13
      },
      {
        "pokemonId": 277,
        "typeId": 8
      },
      {
        "pokemonId": 278,
        "typeId": 18
      },
      {
        "pokemonId": 278,
        "typeId": 8
      },
      {
        "pokemonId": 279,
        "typeId": 18
      },
      {
        "pokemonId": 279,
        "typeId": 8
      },
      {
        "pokemonId": 280,
        "typeId": 15
      },
      {
        "pokemonId": 280,
        "typeId": 5
      },
      {
        "pokemonId": 281,
        "typeId": 15
      },
      {
        "pokemonId": 281,
        "typeId": 5
      },
      {
        "pokemonId": 282,
        "typeId": 15
      },
      {
        "pokemonId": 282,
        "typeId": 5
      },
      {
        "pokemonId": 283,
        "typeId": 1
      },
      {
        "pokemonId": 283,
        "typeId": 18
      },
      {
        "pokemonId": 284,
        "typeId": 1
      },
      {
        "pokemonId": 284,
        "typeId": 8
      },
      {
        "pokemonId": 285,
        "typeId": 10
      },
      {
        "pokemonId": 286,
        "typeId": 10
      },
      {
        "pokemonId": 286,
        "typeId": 6
      },
      {
        "pokemonId": 287,
        "typeId": 13
      },
      {
        "pokemonId": 288,
        "typeId": 13
      },
      {
        "pokemonId": 289,
        "typeId": 13
      },
      {
        "pokemonId": 290,
        "typeId": 1
      },
      {
        "pokemonId": 290,
        "typeId": 11
      },
      {
        "pokemonId": 291,
        "typeId": 1
      },
      {
        "pokemonId": 291,
        "typeId": 8
      },
      {
        "pokemonId": 292,
        "typeId": 1
      },
      {
        "pokemonId": 292,
        "typeId": 9
      },
      {
        "pokemonId": 293,
        "typeId": 13
      },
      {
        "pokemonId": 294,
        "typeId": 13
      },
      {
        "pokemonId": 295,
        "typeId": 13
      },
      {
        "pokemonId": 296,
        "typeId": 6
      },
      {
        "pokemonId": 297,
        "typeId": 6
      },
      {
        "pokemonId": 298,
        "typeId": 13
      },
      {
        "pokemonId": 298,
        "typeId": 5
      },
      {
        "pokemonId": 299,
        "typeId": 16
      },
      {
        "pokemonId": 300,
        "typeId": 13
      },
      {
        "pokemonId": 301,
        "typeId": 13
      },
      {
        "pokemonId": 302,
        "typeId": 2
      },
      {
        "pokemonId": 302,
        "typeId": 9
      },
      {
        "pokemonId": 303,
        "typeId": 17
      },
      {
        "pokemonId": 303,
        "typeId": 5
      },
      {
        "pokemonId": 304,
        "typeId": 17
      },
      {
        "pokemonId": 304,
        "typeId": 16
      },
      {
        "pokemonId": 305,
        "typeId": 17
      },
      {
        "pokemonId": 305,
        "typeId": 16
      },
      {
        "pokemonId": 306,
        "typeId": 17
      },
      {
        "pokemonId": 306,
        "typeId": 16
      },
      {
        "pokemonId": 307,
        "typeId": 6
      },
      {
        "pokemonId": 307,
        "typeId": 15
      },
      {
        "pokemonId": 308,
        "typeId": 6
      },
      {
        "pokemonId": 308,
        "typeId": 15
      },
      {
        "pokemonId": 309,
        "typeId": 4
      },
      {
        "pokemonId": 310,
        "typeId": 4
      },
      {
        "pokemonId": 311,
        "typeId": 4
      },
      {
        "pokemonId": 312,
        "typeId": 4
      },
      {
        "pokemonId": 313,
        "typeId": 1
      },
      {
        "pokemonId": 314,
        "typeId": 1
      },
      {
        "pokemonId": 315,
        "typeId": 10
      },
      {
        "pokemonId": 315,
        "typeId": 14
      },
      {
        "pokemonId": 316,
        "typeId": 14
      },
      {
        "pokemonId": 317,
        "typeId": 14
      },
      {
        "pokemonId": 318,
        "typeId": 18
      },
      {
        "pokemonId": 318,
        "typeId": 2
      },
      {
        "pokemonId": 319,
        "typeId": 18
      },
      {
        "pokemonId": 319,
        "typeId": 2
      },
      {
        "pokemonId": 320,
        "typeId": 18
      },
      {
        "pokemonId": 321,
        "typeId": 18
      },
      {
        "pokemonId": 322,
        "typeId": 7
      },
      {
        "pokemonId": 322,
        "typeId": 11
      },
      {
        "pokemonId": 323,
        "typeId": 7
      },
      {
        "pokemonId": 323,
        "typeId": 11
      },
      {
        "pokemonId": 324,
        "typeId": 7
      },
      {
        "pokemonId": 325,
        "typeId": 15
      },
      {
        "pokemonId": 326,
        "typeId": 15
      },
      {
        "pokemonId": 327,
        "typeId": 13
      },
      {
        "pokemonId": 328,
        "typeId": 11
      },
      {
        "pokemonId": 329,
        "typeId": 11
      },
      {
        "pokemonId": 329,
        "typeId": 3
      },
      {
        "pokemonId": 330,
        "typeId": 11
      },
      {
        "pokemonId": 330,
        "typeId": 3
      },
      {
        "pokemonId": 331,
        "typeId": 10
      },
      {
        "pokemonId": 332,
        "typeId": 10
      },
      {
        "pokemonId": 332,
        "typeId": 2
      },
      {
        "pokemonId": 333,
        "typeId": 13
      },
      {
        "pokemonId": 333,
        "typeId": 8
      },
      {
        "pokemonId": 334,
        "typeId": 3
      },
      {
        "pokemonId": 334,
        "typeId": 8
      },
      {
        "pokemonId": 335,
        "typeId": 13
      },
      {
        "pokemonId": 336,
        "typeId": 14
      },
      {
        "pokemonId": 337,
        "typeId": 16
      },
      {
        "pokemonId": 337,
        "typeId": 15
      },
      {
        "pokemonId": 338,
        "typeId": 16
      },
      {
        "pokemonId": 338,
        "typeId": 15
      },
      {
        "pokemonId": 339,
        "typeId": 18
      },
      {
        "pokemonId": 339,
        "typeId": 11
      },
      {
        "pokemonId": 340,
        "typeId": 18
      },
      {
        "pokemonId": 340,
        "typeId": 11
      },
      {
        "pokemonId": 341,
        "typeId": 18
      },
      {
        "pokemonId": 342,
        "typeId": 18
      },
      {
        "pokemonId": 342,
        "typeId": 2
      },
      {
        "pokemonId": 343,
        "typeId": 11
      },
      {
        "pokemonId": 343,
        "typeId": 15
      },
      {
        "pokemonId": 344,
        "typeId": 11
      },
      {
        "pokemonId": 344,
        "typeId": 15
      },
      {
        "pokemonId": 345,
        "typeId": 16
      },
      {
        "pokemonId": 345,
        "typeId": 10
      },
      {
        "pokemonId": 346,
        "typeId": 16
      },
      {
        "pokemonId": 346,
        "typeId": 10
      },
      {
        "pokemonId": 347,
        "typeId": 16
      },
      {
        "pokemonId": 347,
        "typeId": 1
      },
      {
        "pokemonId": 348,
        "typeId": 16
      },
      {
        "pokemonId": 348,
        "typeId": 1
      },
      {
        "pokemonId": 349,
        "typeId": 18
      },
      {
        "pokemonId": 350,
        "typeId": 18
      },
      {
        "pokemonId": 351,
        "typeId": 13
      },
      {
        "pokemonId": 352,
        "typeId": 13
      },
      {
        "pokemonId": 353,
        "typeId": 9
      },
      {
        "pokemonId": 354,
        "typeId": 9
      },
      {
        "pokemonId": 355,
        "typeId": 9
      },
      {
        "pokemonId": 356,
        "typeId": 9
      },
      {
        "pokemonId": 357,
        "typeId": 10
      },
      {
        "pokemonId": 357,
        "typeId": 8
      },
      {
        "pokemonId": 358,
        "typeId": 15
      },
      {
        "pokemonId": 359,
        "typeId": 2
      },
      {
        "pokemonId": 360,
        "typeId": 15
      },
      {
        "pokemonId": 361,
        "typeId": 12
      },
      {
        "pokemonId": 362,
        "typeId": 12
      },
      {
        "pokemonId": 363,
        "typeId": 12
      },
      {
        "pokemonId": 363,
        "typeId": 18
      },
      {
        "pokemonId": 364,
        "typeId": 12
      },
      {
        "pokemonId": 364,
        "typeId": 18
      },
      {
        "pokemonId": 365,
        "typeId": 12
      },
      {
        "pokemonId": 365,
        "typeId": 18
      },
      {
        "pokemonId": 366,
        "typeId": 18
      },
      {
        "pokemonId": 367,
        "typeId": 18
      },
      {
        "pokemonId": 368,
        "typeId": 18
      },
      {
        "pokemonId": 369,
        "typeId": 18
      },
      {
        "pokemonId": 369,
        "typeId": 16
      },
      {
        "pokemonId": 370,
        "typeId": 18
      },
      {
        "pokemonId": 371,
        "typeId": 3
      },
      {
        "pokemonId": 372,
        "typeId": 3
      },
      {
        "pokemonId": 373,
        "typeId": 3
      },
      {
        "pokemonId": 373,
        "typeId": 8
      },
      {
        "pokemonId": 374,
        "typeId": 17
      },
      {
        "pokemonId": 374,
        "typeId": 15
      },
      {
        "pokemonId": 375,
        "typeId": 17
      },
      {
        "pokemonId": 375,
        "typeId": 15
      },
      {
        "pokemonId": 376,
        "typeId": 17
      },
      {
        "pokemonId": 376,
        "typeId": 15
      },
      {
        "pokemonId": 377,
        "typeId": 16
      },
      {
        "pokemonId": 378,
        "typeId": 12
      },
      {
        "pokemonId": 379,
        "typeId": 17
      },
      {
        "pokemonId": 380,
        "typeId": 3
      },
      {
        "pokemonId": 380,
        "typeId": 15
      },
      {
        "pokemonId": 381,
        "typeId": 3
      },
      {
        "pokemonId": 381,
        "typeId": 15
      },
      {
        "pokemonId": 382,
        "typeId": 18
      },
      {
        "pokemonId": 383,
        "typeId": 11
      },
      {
        "pokemonId": 384,
        "typeId": 3
      },
      {
        "pokemonId": 384,
        "typeId": 8
      },
      {
        "pokemonId": 385,
        "typeId": 17
      },
      {
        "pokemonId": 385,
        "typeId": 15
      },
      {
        "pokemonId": 386,
        "typeId": 15
      },
      {
        "pokemonId": 387,
        "typeId": 10
      },
      {
        "pokemonId": 388,
        "typeId": 10
      },
      {
        "pokemonId": 389,
        "typeId": 10
      },
      {
        "pokemonId": 389,
        "typeId": 11
      },
      {
        "pokemonId": 390,
        "typeId": 7
      },
      {
        "pokemonId": 391,
        "typeId": 7
      },
      {
        "pokemonId": 391,
        "typeId": 6
      },
      {
        "pokemonId": 392,
        "typeId": 7
      },
      {
        "pokemonId": 392,
        "typeId": 6
      },
      {
        "pokemonId": 393,
        "typeId": 18
      },
      {
        "pokemonId": 394,
        "typeId": 18
      },
      {
        "pokemonId": 395,
        "typeId": 18
      },
      {
        "pokemonId": 395,
        "typeId": 17
      },
      {
        "pokemonId": 396,
        "typeId": 13
      },
      {
        "pokemonId": 396,
        "typeId": 8
      },
      {
        "pokemonId": 397,
        "typeId": 13
      },
      {
        "pokemonId": 397,
        "typeId": 8
      },
      {
        "pokemonId": 398,
        "typeId": 13
      },
      {
        "pokemonId": 398,
        "typeId": 8
      },
      {
        "pokemonId": 399,
        "typeId": 13
      },
      {
        "pokemonId": 400,
        "typeId": 13
      },
      {
        "pokemonId": 400,
        "typeId": 18
      },
      {
        "pokemonId": 401,
        "typeId": 1
      },
      {
        "pokemonId": 402,
        "typeId": 1
      },
      {
        "pokemonId": 403,
        "typeId": 4
      },
      {
        "pokemonId": 404,
        "typeId": 4
      },
      {
        "pokemonId": 405,
        "typeId": 4
      },
      {
        "pokemonId": 406,
        "typeId": 10
      },
      {
        "pokemonId": 406,
        "typeId": 14
      },
      {
        "pokemonId": 407,
        "typeId": 10
      },
      {
        "pokemonId": 407,
        "typeId": 14
      },
      {
        "pokemonId": 408,
        "typeId": 16
      },
      {
        "pokemonId": 409,
        "typeId": 16
      },
      {
        "pokemonId": 410,
        "typeId": 16
      },
      {
        "pokemonId": 410,
        "typeId": 17
      },
      {
        "pokemonId": 411,
        "typeId": 16
      },
      {
        "pokemonId": 411,
        "typeId": 17
      },
      {
        "pokemonId": 412,
        "typeId": 1
      },
      {
        "pokemonId": 413,
        "typeId": 1
      },
      {
        "pokemonId": 413,
        "typeId": 10
      },
      {
        "pokemonId": 414,
        "typeId": 1
      },
      {
        "pokemonId": 414,
        "typeId": 8
      },
      {
        "pokemonId": 415,
        "typeId": 1
      },
      {
        "pokemonId": 415,
        "typeId": 8
      },
      {
        "pokemonId": 416,
        "typeId": 1
      },
      {
        "pokemonId": 416,
        "typeId": 8
      },
      {
        "pokemonId": 417,
        "typeId": 4
      },
      {
        "pokemonId": 418,
        "typeId": 18
      },
      {
        "pokemonId": 419,
        "typeId": 18
      },
      {
        "pokemonId": 420,
        "typeId": 10
      },
      {
        "pokemonId": 421,
        "typeId": 10
      },
      {
        "pokemonId": 422,
        "typeId": 18
      },
      {
        "pokemonId": 423,
        "typeId": 18
      },
      {
        "pokemonId": 423,
        "typeId": 11
      },
      {
        "pokemonId": 424,
        "typeId": 13
      },
      {
        "pokemonId": 425,
        "typeId": 9
      },
      {
        "pokemonId": 425,
        "typeId": 8
      },
      {
        "pokemonId": 426,
        "typeId": 9
      },
      {
        "pokemonId": 426,
        "typeId": 8
      },
      {
        "pokemonId": 427,
        "typeId": 13
      },
      {
        "pokemonId": 428,
        "typeId": 13
      },
      {
        "pokemonId": 429,
        "typeId": 9
      },
      {
        "pokemonId": 430,
        "typeId": 2
      },
      {
        "pokemonId": 430,
        "typeId": 8
      },
      {
        "pokemonId": 431,
        "typeId": 13
      },
      {
        "pokemonId": 432,
        "typeId": 13
      },
      {
        "pokemonId": 433,
        "typeId": 15
      },
      {
        "pokemonId": 434,
        "typeId": 14
      },
      {
        "pokemonId": 434,
        "typeId": 2
      },
      {
        "pokemonId": 435,
        "typeId": 14
      },
      {
        "pokemonId": 435,
        "typeId": 2
      },
      {
        "pokemonId": 436,
        "typeId": 17
      },
      {
        "pokemonId": 436,
        "typeId": 15
      },
      {
        "pokemonId": 437,
        "typeId": 17
      },
      {
        "pokemonId": 437,
        "typeId": 15
      },
      {
        "pokemonId": 438,
        "typeId": 16
      },
      {
        "pokemonId": 439,
        "typeId": 15
      },
      {
        "pokemonId": 439,
        "typeId": 5
      },
      {
        "pokemonId": 440,
        "typeId": 13
      },
      {
        "pokemonId": 441,
        "typeId": 13
      },
      {
        "pokemonId": 441,
        "typeId": 8
      },
      {
        "pokemonId": 442,
        "typeId": 9
      },
      {
        "pokemonId": 442,
        "typeId": 2
      },
      {
        "pokemonId": 443,
        "typeId": 3
      },
      {
        "pokemonId": 443,
        "typeId": 11
      },
      {
        "pokemonId": 444,
        "typeId": 3
      },
      {
        "pokemonId": 444,
        "typeId": 11
      },
      {
        "pokemonId": 445,
        "typeId": 3
      },
      {
        "pokemonId": 445,
        "typeId": 11
      },
      {
        "pokemonId": 446,
        "typeId": 13
      },
      {
        "pokemonId": 447,
        "typeId": 6
      },
      {
        "pokemonId": 448,
        "typeId": 6
      },
      {
        "pokemonId": 448,
        "typeId": 17
      },
      {
        "pokemonId": 449,
        "typeId": 11
      },
      {
        "pokemonId": 450,
        "typeId": 11
      },
      {
        "pokemonId": 451,
        "typeId": 14
      },
      {
        "pokemonId": 451,
        "typeId": 1
      },
      {
        "pokemonId": 452,
        "typeId": 14
      },
      {
        "pokemonId": 452,
        "typeId": 2
      },
      {
        "pokemonId": 453,
        "typeId": 14
      },
      {
        "pokemonId": 453,
        "typeId": 6
      },
      {
        "pokemonId": 454,
        "typeId": 14
      },
      {
        "pokemonId": 454,
        "typeId": 6
      },
      {
        "pokemonId": 455,
        "typeId": 10
      },
      {
        "pokemonId": 456,
        "typeId": 18
      },
      {
        "pokemonId": 457,
        "typeId": 18
      },
      {
        "pokemonId": 458,
        "typeId": 18
      },
      {
        "pokemonId": 458,
        "typeId": 8
      },
      {
        "pokemonId": 459,
        "typeId": 10
      },
      {
        "pokemonId": 459,
        "typeId": 12
      },
      {
        "pokemonId": 460,
        "typeId": 10
      },
      {
        "pokemonId": 460,
        "typeId": 12
      },
      {
        "pokemonId": 461,
        "typeId": 2
      },
      {
        "pokemonId": 461,
        "typeId": 12
      },
      {
        "pokemonId": 462,
        "typeId": 4
      },
      {
        "pokemonId": 462,
        "typeId": 17
      },
      {
        "pokemonId": 463,
        "typeId": 13
      },
      {
        "pokemonId": 464,
        "typeId": 11
      },
      {
        "pokemonId": 464,
        "typeId": 16
      },
      {
        "pokemonId": 465,
        "typeId": 10
      },
      {
        "pokemonId": 466,
        "typeId": 4
      },
      {
        "pokemonId": 467,
        "typeId": 7
      },
      {
        "pokemonId": 468,
        "typeId": 5
      },
      {
        "pokemonId": 468,
        "typeId": 8
      },
      {
        "pokemonId": 469,
        "typeId": 1
      },
      {
        "pokemonId": 469,
        "typeId": 8
      },
      {
        "pokemonId": 470,
        "typeId": 10
      },
      {
        "pokemonId": 471,
        "typeId": 12
      },
      {
        "pokemonId": 472,
        "typeId": 11
      },
      {
        "pokemonId": 472,
        "typeId": 8
      },
      {
        "pokemonId": 473,
        "typeId": 12
      },
      {
        "pokemonId": 473,
        "typeId": 11
      },
      {
        "pokemonId": 474,
        "typeId": 13
      },
      {
        "pokemonId": 475,
        "typeId": 15
      },
      {
        "pokemonId": 475,
        "typeId": 6
      },
      {
        "pokemonId": 476,
        "typeId": 16
      },
      {
        "pokemonId": 476,
        "typeId": 17
      },
      {
        "pokemonId": 477,
        "typeId": 9
      },
      {
        "pokemonId": 478,
        "typeId": 12
      },
      {
        "pokemonId": 478,
        "typeId": 9
      },
      {
        "pokemonId": 479,
        "typeId": 4
      },
      {
        "pokemonId": 479,
        "typeId": 9
      },
      {
        "pokemonId": 480,
        "typeId": 15
      },
      {
        "pokemonId": 481,
        "typeId": 15
      },
      {
        "pokemonId": 482,
        "typeId": 15
      },
      {
        "pokemonId": 483,
        "typeId": 17
      },
      {
        "pokemonId": 483,
        "typeId": 3
      },
      {
        "pokemonId": 484,
        "typeId": 18
      },
      {
        "pokemonId": 484,
        "typeId": 3
      },
      {
        "pokemonId": 485,
        "typeId": 7
      },
      {
        "pokemonId": 485,
        "typeId": 17
      },
      {
        "pokemonId": 486,
        "typeId": 13
      },
      {
        "pokemonId": 487,
        "typeId": 9
      },
      {
        "pokemonId": 487,
        "typeId": 3
      },
      {
        "pokemonId": 488,
        "typeId": 15
      },
      {
        "pokemonId": 489,
        "typeId": 18
      },
      {
        "pokemonId": 490,
        "typeId": 18
      },
      {
        "pokemonId": 491,
        "typeId": 2
      },
      {
        "pokemonId": 492,
        "typeId": 10
      },
      {
        "pokemonId": 493,
        "typeId": 13
      },
      {
        "pokemonId": 494,
        "typeId": 15
      },
      {
        "pokemonId": 494,
        "typeId": 7
      },
      {
        "pokemonId": 495,
        "typeId": 10
      },
      {
        "pokemonId": 496,
        "typeId": 10
      },
      {
        "pokemonId": 497,
        "typeId": 10
      },
      {
        "pokemonId": 498,
        "typeId": 7
      },
      {
        "pokemonId": 499,
        "typeId": 7
      },
      {
        "pokemonId": 499,
        "typeId": 6
      },
      {
        "pokemonId": 500,
        "typeId": 7
      },
      {
        "pokemonId": 500,
        "typeId": 6
      },
      {
        "pokemonId": 501,
        "typeId": 18
      },
      {
        "pokemonId": 502,
        "typeId": 18
      },
      {
        "pokemonId": 503,
        "typeId": 18
      },
      {
        "pokemonId": 504,
        "typeId": 13
      },
      {
        "pokemonId": 505,
        "typeId": 13
      },
      {
        "pokemonId": 506,
        "typeId": 13
      },
      {
        "pokemonId": 507,
        "typeId": 13
      },
      {
        "pokemonId": 508,
        "typeId": 13
      },
      {
        "pokemonId": 509,
        "typeId": 2
      },
      {
        "pokemonId": 510,
        "typeId": 2
      },
      {
        "pokemonId": 511,
        "typeId": 10
      },
      {
        "pokemonId": 512,
        "typeId": 10
      },
      {
        "pokemonId": 513,
        "typeId": 7
      },
      {
        "pokemonId": 514,
        "typeId": 7
      },
      {
        "pokemonId": 515,
        "typeId": 18
      },
      {
        "pokemonId": 516,
        "typeId": 18
      },
      {
        "pokemonId": 517,
        "typeId": 15
      },
      {
        "pokemonId": 518,
        "typeId": 15
      },
      {
        "pokemonId": 519,
        "typeId": 13
      },
      {
        "pokemonId": 519,
        "typeId": 8
      },
      {
        "pokemonId": 520,
        "typeId": 13
      },
      {
        "pokemonId": 520,
        "typeId": 8
      },
      {
        "pokemonId": 521,
        "typeId": 13
      },
      {
        "pokemonId": 521,
        "typeId": 8
      },
      {
        "pokemonId": 522,
        "typeId": 4
      },
      {
        "pokemonId": 523,
        "typeId": 4
      },
      {
        "pokemonId": 524,
        "typeId": 16
      },
      {
        "pokemonId": 525,
        "typeId": 16
      },
      {
        "pokemonId": 526,
        "typeId": 16
      },
      {
        "pokemonId": 527,
        "typeId": 15
      },
      {
        "pokemonId": 527,
        "typeId": 8
      },
      {
        "pokemonId": 528,
        "typeId": 15
      },
      {
        "pokemonId": 528,
        "typeId": 8
      },
      {
        "pokemonId": 529,
        "typeId": 11
      },
      {
        "pokemonId": 530,
        "typeId": 11
      },
      {
        "pokemonId": 530,
        "typeId": 17
      },
      {
        "pokemonId": 531,
        "typeId": 13
      },
      {
        "pokemonId": 532,
        "typeId": 6
      },
      {
        "pokemonId": 533,
        "typeId": 6
      },
      {
        "pokemonId": 534,
        "typeId": 6
      },
      {
        "pokemonId": 535,
        "typeId": 18
      },
      {
        "pokemonId": 536,
        "typeId": 18
      },
      {
        "pokemonId": 536,
        "typeId": 11
      },
      {
        "pokemonId": 537,
        "typeId": 18
      },
      {
        "pokemonId": 537,
        "typeId": 11
      },
      {
        "pokemonId": 538,
        "typeId": 6
      },
      {
        "pokemonId": 539,
        "typeId": 6
      },
      {
        "pokemonId": 540,
        "typeId": 1
      },
      {
        "pokemonId": 540,
        "typeId": 10
      },
      {
        "pokemonId": 541,
        "typeId": 1
      },
      {
        "pokemonId": 541,
        "typeId": 10
      },
      {
        "pokemonId": 542,
        "typeId": 1
      },
      {
        "pokemonId": 542,
        "typeId": 10
      },
      {
        "pokemonId": 543,
        "typeId": 1
      },
      {
        "pokemonId": 543,
        "typeId": 14
      },
      {
        "pokemonId": 544,
        "typeId": 1
      },
      {
        "pokemonId": 544,
        "typeId": 14
      },
      {
        "pokemonId": 545,
        "typeId": 1
      },
      {
        "pokemonId": 545,
        "typeId": 14
      },
      {
        "pokemonId": 546,
        "typeId": 10
      },
      {
        "pokemonId": 546,
        "typeId": 5
      },
      {
        "pokemonId": 547,
        "typeId": 10
      },
      {
        "pokemonId": 547,
        "typeId": 5
      },
      {
        "pokemonId": 548,
        "typeId": 10
      },
      {
        "pokemonId": 549,
        "typeId": 10
      },
      {
        "pokemonId": 550,
        "typeId": 18
      },
      {
        "pokemonId": 551,
        "typeId": 11
      },
      {
        "pokemonId": 551,
        "typeId": 2
      },
      {
        "pokemonId": 552,
        "typeId": 11
      },
      {
        "pokemonId": 552,
        "typeId": 2
      },
      {
        "pokemonId": 553,
        "typeId": 11
      },
      {
        "pokemonId": 553,
        "typeId": 2
      },
      {
        "pokemonId": 554,
        "typeId": 7
      },
      {
        "pokemonId": 555,
        "typeId": 7
      },
      {
        "pokemonId": 556,
        "typeId": 10
      },
      {
        "pokemonId": 557,
        "typeId": 1
      },
      {
        "pokemonId": 557,
        "typeId": 16
      },
      {
        "pokemonId": 558,
        "typeId": 1
      },
      {
        "pokemonId": 558,
        "typeId": 16
      },
      {
        "pokemonId": 559,
        "typeId": 2
      },
      {
        "pokemonId": 559,
        "typeId": 6
      },
      {
        "pokemonId": 560,
        "typeId": 2
      },
      {
        "pokemonId": 560,
        "typeId": 6
      },
      {
        "pokemonId": 561,
        "typeId": 15
      },
      {
        "pokemonId": 561,
        "typeId": 8
      },
      {
        "pokemonId": 562,
        "typeId": 9
      },
      {
        "pokemonId": 563,
        "typeId": 9
      },
      {
        "pokemonId": 564,
        "typeId": 18
      },
      {
        "pokemonId": 564,
        "typeId": 16
      },
      {
        "pokemonId": 565,
        "typeId": 18
      },
      {
        "pokemonId": 565,
        "typeId": 16
      },
      {
        "pokemonId": 566,
        "typeId": 16
      },
      {
        "pokemonId": 566,
        "typeId": 8
      },
      {
        "pokemonId": 567,
        "typeId": 16
      },
      {
        "pokemonId": 567,
        "typeId": 8
      },
      {
        "pokemonId": 568,
        "typeId": 14
      },
      {
        "pokemonId": 569,
        "typeId": 14
      },
      {
        "pokemonId": 570,
        "typeId": 2
      },
      {
        "pokemonId": 571,
        "typeId": 2
      },
      {
        "pokemonId": 572,
        "typeId": 13
      },
      {
        "pokemonId": 573,
        "typeId": 13
      },
      {
        "pokemonId": 574,
        "typeId": 15
      },
      {
        "pokemonId": 575,
        "typeId": 15
      },
      {
        "pokemonId": 576,
        "typeId": 15
      },
      {
        "pokemonId": 577,
        "typeId": 15
      },
      {
        "pokemonId": 578,
        "typeId": 15
      },
      {
        "pokemonId": 579,
        "typeId": 15
      },
      {
        "pokemonId": 580,
        "typeId": 18
      },
      {
        "pokemonId": 580,
        "typeId": 8
      },
      {
        "pokemonId": 581,
        "typeId": 18
      },
      {
        "pokemonId": 581,
        "typeId": 8
      },
      {
        "pokemonId": 582,
        "typeId": 12
      },
      {
        "pokemonId": 583,
        "typeId": 12
      },
      {
        "pokemonId": 584,
        "typeId": 12
      },
      {
        "pokemonId": 585,
        "typeId": 13
      },
      {
        "pokemonId": 585,
        "typeId": 10
      },
      {
        "pokemonId": 586,
        "typeId": 13
      },
      {
        "pokemonId": 586,
        "typeId": 10
      },
      {
        "pokemonId": 587,
        "typeId": 4
      },
      {
        "pokemonId": 587,
        "typeId": 8
      },
      {
        "pokemonId": 588,
        "typeId": 1
      },
      {
        "pokemonId": 589,
        "typeId": 1
      },
      {
        "pokemonId": 589,
        "typeId": 17
      },
      {
        "pokemonId": 590,
        "typeId": 10
      },
      {
        "pokemonId": 590,
        "typeId": 14
      },
      {
        "pokemonId": 591,
        "typeId": 10
      },
      {
        "pokemonId": 591,
        "typeId": 14
      },
      {
        "pokemonId": 592,
        "typeId": 18
      },
      {
        "pokemonId": 592,
        "typeId": 9
      },
      {
        "pokemonId": 593,
        "typeId": 18
      },
      {
        "pokemonId": 593,
        "typeId": 9
      },
      {
        "pokemonId": 594,
        "typeId": 18
      },
      {
        "pokemonId": 595,
        "typeId": 1
      },
      {
        "pokemonId": 595,
        "typeId": 4
      },
      {
        "pokemonId": 596,
        "typeId": 1
      },
      {
        "pokemonId": 596,
        "typeId": 4
      },
      {
        "pokemonId": 597,
        "typeId": 10
      },
      {
        "pokemonId": 597,
        "typeId": 17
      },
      {
        "pokemonId": 598,
        "typeId": 10
      },
      {
        "pokemonId": 598,
        "typeId": 17
      },
      {
        "pokemonId": 599,
        "typeId": 17
      },
      {
        "pokemonId": 600,
        "typeId": 17
      },
      {
        "pokemonId": 601,
        "typeId": 17
      },
      {
        "pokemonId": 602,
        "typeId": 4
      },
      {
        "pokemonId": 603,
        "typeId": 4
      },
      {
        "pokemonId": 604,
        "typeId": 4
      },
      {
        "pokemonId": 605,
        "typeId": 15
      },
      {
        "pokemonId": 606,
        "typeId": 15
      },
      {
        "pokemonId": 607,
        "typeId": 9
      },
      {
        "pokemonId": 607,
        "typeId": 7
      },
      {
        "pokemonId": 608,
        "typeId": 9
      },
      {
        "pokemonId": 608,
        "typeId": 7
      },
      {
        "pokemonId": 609,
        "typeId": 9
      },
      {
        "pokemonId": 609,
        "typeId": 7
      },
      {
        "pokemonId": 610,
        "typeId": 3
      },
      {
        "pokemonId": 611,
        "typeId": 3
      },
      {
        "pokemonId": 612,
        "typeId": 3
      },
      {
        "pokemonId": 613,
        "typeId": 12
      },
      {
        "pokemonId": 614,
        "typeId": 12
      },
      {
        "pokemonId": 615,
        "typeId": 12
      },
      {
        "pokemonId": 616,
        "typeId": 1
      },
      {
        "pokemonId": 617,
        "typeId": 1
      },
      {
        "pokemonId": 618,
        "typeId": 11
      },
      {
        "pokemonId": 618,
        "typeId": 4
      },
      {
        "pokemonId": 619,
        "typeId": 6
      },
      {
        "pokemonId": 620,
        "typeId": 6
      },
      {
        "pokemonId": 621,
        "typeId": 3
      },
      {
        "pokemonId": 622,
        "typeId": 11
      },
      {
        "pokemonId": 622,
        "typeId": 9
      },
      {
        "pokemonId": 623,
        "typeId": 11
      },
      {
        "pokemonId": 623,
        "typeId": 9
      },
      {
        "pokemonId": 624,
        "typeId": 2
      },
      {
        "pokemonId": 624,
        "typeId": 17
      },
      {
        "pokemonId": 625,
        "typeId": 2
      },
      {
        "pokemonId": 625,
        "typeId": 17
      },
      {
        "pokemonId": 626,
        "typeId": 13
      },
      {
        "pokemonId": 627,
        "typeId": 13
      },
      {
        "pokemonId": 627,
        "typeId": 8
      },
      {
        "pokemonId": 628,
        "typeId": 13
      },
      {
        "pokemonId": 628,
        "typeId": 8
      },
      {
        "pokemonId": 629,
        "typeId": 2
      },
      {
        "pokemonId": 629,
        "typeId": 8
      },
      {
        "pokemonId": 630,
        "typeId": 2
      },
      {
        "pokemonId": 630,
        "typeId": 8
      },
      {
        "pokemonId": 631,
        "typeId": 7
      },
      {
        "pokemonId": 632,
        "typeId": 1
      },
      {
        "pokemonId": 632,
        "typeId": 17
      },
      {
        "pokemonId": 633,
        "typeId": 2
      },
      {
        "pokemonId": 633,
        "typeId": 3
      },
      {
        "pokemonId": 634,
        "typeId": 2
      },
      {
        "pokemonId": 634,
        "typeId": 3
      },
      {
        "pokemonId": 635,
        "typeId": 2
      },
      {
        "pokemonId": 635,
        "typeId": 3
      },
      {
        "pokemonId": 636,
        "typeId": 1
      },
      {
        "pokemonId": 636,
        "typeId": 7
      },
      {
        "pokemonId": 637,
        "typeId": 1
      },
      {
        "pokemonId": 637,
        "typeId": 7
      },
      {
        "pokemonId": 638,
        "typeId": 17
      },
      {
        "pokemonId": 638,
        "typeId": 6
      },
      {
        "pokemonId": 639,
        "typeId": 16
      },
      {
        "pokemonId": 639,
        "typeId": 6
      },
      {
        "pokemonId": 640,
        "typeId": 10
      },
      {
        "pokemonId": 640,
        "typeId": 6
      },
      {
        "pokemonId": 641,
        "typeId": 8
      },
      {
        "pokemonId": 642,
        "typeId": 4
      },
      {
        "pokemonId": 642,
        "typeId": 8
      },
      {
        "pokemonId": 643,
        "typeId": 3
      },
      {
        "pokemonId": 643,
        "typeId": 7
      },
      {
        "pokemonId": 644,
        "typeId": 3
      },
      {
        "pokemonId": 644,
        "typeId": 4
      },
      {
        "pokemonId": 645,
        "typeId": 11
      },
      {
        "pokemonId": 645,
        "typeId": 8
      },
      {
        "pokemonId": 646,
        "typeId": 3
      },
      {
        "pokemonId": 646,
        "typeId": 12
      },
      {
        "pokemonId": 647,
        "typeId": 18
      },
      {
        "pokemonId": 647,
        "typeId": 6
      },
      {
        "pokemonId": 648,
        "typeId": 13
      },
      {
        "pokemonId": 648,
        "typeId": 15
      },
      {
        "pokemonId": 649,
        "typeId": 1
      },
      {
        "pokemonId": 649,
        "typeId": 17
      },
      {
        "pokemonId": 650,
        "typeId": 10
      },
      {
        "pokemonId": 651,
        "typeId": 10
      },
      {
        "pokemonId": 652,
        "typeId": 10
      },
      {
        "pokemonId": 652,
        "typeId": 6
      },
      {
        "pokemonId": 653,
        "typeId": 7
      },
      {
        "pokemonId": 654,
        "typeId": 7
      },
      {
        "pokemonId": 655,
        "typeId": 7
      },
      {
        "pokemonId": 655,
        "typeId": 15
      },
      {
        "pokemonId": 656,
        "typeId": 18
      },
      {
        "pokemonId": 657,
        "typeId": 18
      },
      {
        "pokemonId": 658,
        "typeId": 18
      },
      {
        "pokemonId": 658,
        "typeId": 2
      },
      {
        "pokemonId": 659,
        "typeId": 13
      },
      {
        "pokemonId": 660,
        "typeId": 13
      },
      {
        "pokemonId": 660,
        "typeId": 11
      },
      {
        "pokemonId": 661,
        "typeId": 13
      },
      {
        "pokemonId": 661,
        "typeId": 8
      },
      {
        "pokemonId": 662,
        "typeId": 7
      },
      {
        "pokemonId": 662,
        "typeId": 8
      },
      {
        "pokemonId": 663,
        "typeId": 7
      },
      {
        "pokemonId": 663,
        "typeId": 8
      },
      {
        "pokemonId": 664,
        "typeId": 1
      },
      {
        "pokemonId": 665,
        "typeId": 1
      },
      {
        "pokemonId": 666,
        "typeId": 1
      },
      {
        "pokemonId": 666,
        "typeId": 8
      },
      {
        "pokemonId": 667,
        "typeId": 7
      },
      {
        "pokemonId": 667,
        "typeId": 13
      },
      {
        "pokemonId": 668,
        "typeId": 7
      },
      {
        "pokemonId": 668,
        "typeId": 13
      },
      {
        "pokemonId": 669,
        "typeId": 5
      },
      {
        "pokemonId": 670,
        "typeId": 5
      },
      {
        "pokemonId": 671,
        "typeId": 5
      },
      {
        "pokemonId": 672,
        "typeId": 10
      },
      {
        "pokemonId": 673,
        "typeId": 10
      },
      {
        "pokemonId": 674,
        "typeId": 6
      },
      {
        "pokemonId": 675,
        "typeId": 6
      },
      {
        "pokemonId": 675,
        "typeId": 2
      },
      {
        "pokemonId": 676,
        "typeId": 13
      },
      {
        "pokemonId": 677,
        "typeId": 15
      },
      {
        "pokemonId": 678,
        "typeId": 15
      },
      {
        "pokemonId": 679,
        "typeId": 17
      },
      {
        "pokemonId": 679,
        "typeId": 9
      },
      {
        "pokemonId": 680,
        "typeId": 17
      },
      {
        "pokemonId": 680,
        "typeId": 9
      },
      {
        "pokemonId": 681,
        "typeId": 17
      },
      {
        "pokemonId": 681,
        "typeId": 9
      },
      {
        "pokemonId": 682,
        "typeId": 5
      },
      {
        "pokemonId": 683,
        "typeId": 5
      },
      {
        "pokemonId": 684,
        "typeId": 5
      },
      {
        "pokemonId": 685,
        "typeId": 5
      },
      {
        "pokemonId": 686,
        "typeId": 2
      },
      {
        "pokemonId": 686,
        "typeId": 15
      },
      {
        "pokemonId": 687,
        "typeId": 2
      },
      {
        "pokemonId": 687,
        "typeId": 15
      },
      {
        "pokemonId": 688,
        "typeId": 16
      },
      {
        "pokemonId": 688,
        "typeId": 18
      },
      {
        "pokemonId": 689,
        "typeId": 16
      },
      {
        "pokemonId": 689,
        "typeId": 18
      },
      {
        "pokemonId": 690,
        "typeId": 14
      },
      {
        "pokemonId": 690,
        "typeId": 18
      },
      {
        "pokemonId": 691,
        "typeId": 14
      },
      {
        "pokemonId": 691,
        "typeId": 3
      },
      {
        "pokemonId": 692,
        "typeId": 18
      },
      {
        "pokemonId": 693,
        "typeId": 18
      },
      {
        "pokemonId": 694,
        "typeId": 4
      },
      {
        "pokemonId": 694,
        "typeId": 13
      },
      {
        "pokemonId": 695,
        "typeId": 4
      },
      {
        "pokemonId": 695,
        "typeId": 13
      },
      {
        "pokemonId": 696,
        "typeId": 16
      },
      {
        "pokemonId": 696,
        "typeId": 3
      },
      {
        "pokemonId": 697,
        "typeId": 16
      },
      {
        "pokemonId": 697,
        "typeId": 3
      },
      {
        "pokemonId": 698,
        "typeId": 16
      },
      {
        "pokemonId": 698,
        "typeId": 12
      },
      {
        "pokemonId": 699,
        "typeId": 16
      },
      {
        "pokemonId": 699,
        "typeId": 12
      },
      {
        "pokemonId": 700,
        "typeId": 5
      },
      {
        "pokemonId": 701,
        "typeId": 6
      },
      {
        "pokemonId": 701,
        "typeId": 8
      },
      {
        "pokemonId": 702,
        "typeId": 4
      },
      {
        "pokemonId": 702,
        "typeId": 5
      },
      {
        "pokemonId": 703,
        "typeId": 16
      },
      {
        "pokemonId": 703,
        "typeId": 5
      },
      {
        "pokemonId": 704,
        "typeId": 3
      },
      {
        "pokemonId": 705,
        "typeId": 3
      },
      {
        "pokemonId": 706,
        "typeId": 3
      },
      {
        "pokemonId": 707,
        "typeId": 17
      },
      {
        "pokemonId": 707,
        "typeId": 5
      },
      {
        "pokemonId": 708,
        "typeId": 9
      },
      {
        "pokemonId": 708,
        "typeId": 10
      },
      {
        "pokemonId": 709,
        "typeId": 9
      },
      {
        "pokemonId": 709,
        "typeId": 10
      },
      {
        "pokemonId": 710,
        "typeId": 9
      },
      {
        "pokemonId": 710,
        "typeId": 10
      },
      {
        "pokemonId": 711,
        "typeId": 9
      },
      {
        "pokemonId": 711,
        "typeId": 10
      },
      {
        "pokemonId": 712,
        "typeId": 12
      },
      {
        "pokemonId": 713,
        "typeId": 12
      },
      {
        "pokemonId": 714,
        "typeId": 8
      },
      {
        "pokemonId": 714,
        "typeId": 3
      },
      {
        "pokemonId": 715,
        "typeId": 8
      },
      {
        "pokemonId": 715,
        "typeId": 3
      },
      {
        "pokemonId": 716,
        "typeId": 5
      },
      {
        "pokemonId": 717,
        "typeId": 2
      },
      {
        "pokemonId": 717,
        "typeId": 8
      },
      {
        "pokemonId": 718,
        "typeId": 3
      },
      {
        "pokemonId": 718,
        "typeId": 11
      },
      {
        "pokemonId": 719,
        "typeId": 16
      },
      {
        "pokemonId": 719,
        "typeId": 5
      },
      {
        "pokemonId": 720,
        "typeId": 15
      },
      {
        "pokemonId": 720,
        "typeId": 9
      },
      {
        "pokemonId": 721,
        "typeId": 7
      },
      {
        "pokemonId": 721,
        "typeId": 18
      },
      {
        "pokemonId": 722,
        "typeId": 10
      },
      {
        "pokemonId": 722,
        "typeId": 8
      },
      {
        "pokemonId": 723,
        "typeId": 10
      },
      {
        "pokemonId": 723,
        "typeId": 8
      },
      {
        "pokemonId": 724,
        "typeId": 10
      },
      {
        "pokemonId": 724,
        "typeId": 9
      },
      {
        "pokemonId": 725,
        "typeId": 7
      },
      {
        "pokemonId": 726,
        "typeId": 7
      },
      {
        "pokemonId": 727,
        "typeId": 7
      },
      {
        "pokemonId": 727,
        "typeId": 2
      },
      {
        "pokemonId": 728,
        "typeId": 18
      },
      {
        "pokemonId": 729,
        "typeId": 18
      },
      {
        "pokemonId": 730,
        "typeId": 18
      },
      {
        "pokemonId": 730,
        "typeId": 5
      },
      {
        "pokemonId": 731,
        "typeId": 13
      },
      {
        "pokemonId": 731,
        "typeId": 8
      },
      {
        "pokemonId": 732,
        "typeId": 13
      },
      {
        "pokemonId": 732,
        "typeId": 8
      },
      {
        "pokemonId": 733,
        "typeId": 13
      },
      {
        "pokemonId": 733,
        "typeId": 8
      },
      {
        "pokemonId": 734,
        "typeId": 13
      },
      {
        "pokemonId": 735,
        "typeId": 13
      },
      {
        "pokemonId": 736,
        "typeId": 1
      },
      {
        "pokemonId": 737,
        "typeId": 1
      },
      {
        "pokemonId": 737,
        "typeId": 4
      },
      {
        "pokemonId": 738,
        "typeId": 1
      },
      {
        "pokemonId": 738,
        "typeId": 4
      },
      {
        "pokemonId": 739,
        "typeId": 6
      },
      {
        "pokemonId": 740,
        "typeId": 6
      },
      {
        "pokemonId": 740,
        "typeId": 12
      },
      {
        "pokemonId": 741,
        "typeId": 7
      },
      {
        "pokemonId": 741,
        "typeId": 8
      },
      {
        "pokemonId": 742,
        "typeId": 1
      },
      {
        "pokemonId": 742,
        "typeId": 5
      },
      {
        "pokemonId": 743,
        "typeId": 1
      },
      {
        "pokemonId": 743,
        "typeId": 5
      },
      {
        "pokemonId": 744,
        "typeId": 16
      },
      {
        "pokemonId": 745,
        "typeId": 16
      },
      {
        "pokemonId": 746,
        "typeId": 18
      },
      {
        "pokemonId": 747,
        "typeId": 14
      },
      {
        "pokemonId": 747,
        "typeId": 18
      },
      {
        "pokemonId": 748,
        "typeId": 14
      },
      {
        "pokemonId": 748,
        "typeId": 18
      },
      {
        "pokemonId": 749,
        "typeId": 11
      },
      {
        "pokemonId": 750,
        "typeId": 11
      },
      {
        "pokemonId": 751,
        "typeId": 18
      },
      {
        "pokemonId": 751,
        "typeId": 1
      },
      {
        "pokemonId": 752,
        "typeId": 18
      },
      {
        "pokemonId": 752,
        "typeId": 1
      },
      {
        "pokemonId": 753,
        "typeId": 10
      },
      {
        "pokemonId": 754,
        "typeId": 10
      },
      {
        "pokemonId": 755,
        "typeId": 10
      },
      {
        "pokemonId": 755,
        "typeId": 5
      },
      {
        "pokemonId": 756,
        "typeId": 10
      },
      {
        "pokemonId": 756,
        "typeId": 5
      },
      {
        "pokemonId": 757,
        "typeId": 14
      },
      {
        "pokemonId": 757,
        "typeId": 7
      },
      {
        "pokemonId": 758,
        "typeId": 14
      },
      {
        "pokemonId": 758,
        "typeId": 7
      },
      {
        "pokemonId": 759,
        "typeId": 13
      },
      {
        "pokemonId": 759,
        "typeId": 6
      },
      {
        "pokemonId": 760,
        "typeId": 13
      },
      {
        "pokemonId": 760,
        "typeId": 6
      },
      {
        "pokemonId": 761,
        "typeId": 10
      },
      {
        "pokemonId": 762,
        "typeId": 10
      },
      {
        "pokemonId": 763,
        "typeId": 10
      },
      {
        "pokemonId": 764,
        "typeId": 5
      },
      {
        "pokemonId": 765,
        "typeId": 13
      },
      {
        "pokemonId": 765,
        "typeId": 15
      },
      {
        "pokemonId": 766,
        "typeId": 6
      },
      {
        "pokemonId": 767,
        "typeId": 1
      },
      {
        "pokemonId": 767,
        "typeId": 18
      },
      {
        "pokemonId": 768,
        "typeId": 1
      },
      {
        "pokemonId": 768,
        "typeId": 18
      },
      {
        "pokemonId": 769,
        "typeId": 9
      },
      {
        "pokemonId": 769,
        "typeId": 11
      },
      {
        "pokemonId": 770,
        "typeId": 9
      },
      {
        "pokemonId": 770,
        "typeId": 11
      },
      {
        "pokemonId": 771,
        "typeId": 18
      },
      {
        "pokemonId": 772,
        "typeId": 13
      },
      {
        "pokemonId": 773,
        "typeId": 13
      },
      {
        "pokemonId": 774,
        "typeId": 16
      },
      {
        "pokemonId": 774,
        "typeId": 8
      },
      {
        "pokemonId": 775,
        "typeId": 13
      },
      {
        "pokemonId": 776,
        "typeId": 7
      },
      {
        "pokemonId": 776,
        "typeId": 3
      },
      {
        "pokemonId": 777,
        "typeId": 4
      },
      {
        "pokemonId": 777,
        "typeId": 17
      },
      {
        "pokemonId": 778,
        "typeId": 9
      },
      {
        "pokemonId": 778,
        "typeId": 5
      },
      {
        "pokemonId": 779,
        "typeId": 18
      },
      {
        "pokemonId": 779,
        "typeId": 15
      },
      {
        "pokemonId": 780,
        "typeId": 13
      },
      {
        "pokemonId": 780,
        "typeId": 3
      },
      {
        "pokemonId": 781,
        "typeId": 9
      },
      {
        "pokemonId": 781,
        "typeId": 10
      },
      {
        "pokemonId": 782,
        "typeId": 3
      },
      {
        "pokemonId": 783,
        "typeId": 3
      },
      {
        "pokemonId": 783,
        "typeId": 6
      },
      {
        "pokemonId": 784,
        "typeId": 3
      },
      {
        "pokemonId": 784,
        "typeId": 6
      },
      {
        "pokemonId": 785,
        "typeId": 4
      },
      {
        "pokemonId": 785,
        "typeId": 5
      },
      {
        "pokemonId": 786,
        "typeId": 15
      },
      {
        "pokemonId": 786,
        "typeId": 5
      },
      {
        "pokemonId": 787,
        "typeId": 10
      },
      {
        "pokemonId": 787,
        "typeId": 5
      },
      {
        "pokemonId": 788,
        "typeId": 18
      },
      {
        "pokemonId": 788,
        "typeId": 5
      },
      {
        "pokemonId": 789,
        "typeId": 15
      },
      {
        "pokemonId": 790,
        "typeId": 15
      },
      {
        "pokemonId": 791,
        "typeId": 15
      },
      {
        "pokemonId": 791,
        "typeId": 17
      },
      {
        "pokemonId": 792,
        "typeId": 15
      },
      {
        "pokemonId": 792,
        "typeId": 9
      },
      {
        "pokemonId": 793,
        "typeId": 16
      },
      {
        "pokemonId": 793,
        "typeId": 14
      },
      {
        "pokemonId": 794,
        "typeId": 1
      },
      {
        "pokemonId": 794,
        "typeId": 6
      },
      {
        "pokemonId": 795,
        "typeId": 1
      },
      {
        "pokemonId": 795,
        "typeId": 6
      },
      {
        "pokemonId": 796,
        "typeId": 4
      },
      {
        "pokemonId": 797,
        "typeId": 17
      },
      {
        "pokemonId": 797,
        "typeId": 8
      },
      {
        "pokemonId": 798,
        "typeId": 10
      },
      {
        "pokemonId": 798,
        "typeId": 17
      },
      {
        "pokemonId": 799,
        "typeId": 2
      },
      {
        "pokemonId": 799,
        "typeId": 3
      },
      {
        "pokemonId": 800,
        "typeId": 15
      },
      {
        "pokemonId": 801,
        "typeId": 17
      },
      {
        "pokemonId": 801,
        "typeId": 5
      },
      {
        "pokemonId": 802,
        "typeId": 6
      },
      {
        "pokemonId": 802,
        "typeId": 9
      },
      {
        "pokemonId": 803,
        "typeId": 14
      },
      {
        "pokemonId": 804,
        "typeId": 14
      },
      {
        "pokemonId": 804,
        "typeId": 3
      },
      {
        "pokemonId": 805,
        "typeId": 16
      },
      {
        "pokemonId": 805,
        "typeId": 17
      },
      {
        "pokemonId": 806,
        "typeId": 7
      },
      {
        "pokemonId": 806,
        "typeId": 9
      },
      {
        "pokemonId": 807,
        "typeId": 4
      },
      {
        "pokemonId": 808,
        "typeId": 17
      },
      {
        "pokemonId": 809,
        "typeId": 17
      },
      {
        "pokemonId": 810,
        "typeId": 10
      },
      {
        "pokemonId": 811,
        "typeId": 10
      },
      {
        "pokemonId": 812,
        "typeId": 10
      },
      {
        "pokemonId": 813,
        "typeId": 7
      },
      {
        "pokemonId": 814,
        "typeId": 7
      },
      {
        "pokemonId": 815,
        "typeId": 7
      },
      {
        "pokemonId": 816,
        "typeId": 18
      },
      {
        "pokemonId": 817,
        "typeId": 18
      },
      {
        "pokemonId": 818,
        "typeId": 18
      },
      {
        "pokemonId": 819,
        "typeId": 13
      },
      {
        "pokemonId": 820,
        "typeId": 13
      },
      {
        "pokemonId": 821,
        "typeId": 8
      },
      {
        "pokemonId": 822,
        "typeId": 8
      },
      {
        "pokemonId": 823,
        "typeId": 8
      },
      {
        "pokemonId": 823,
        "typeId": 17
      },
      {
        "pokemonId": 824,
        "typeId": 1
      },
      {
        "pokemonId": 825,
        "typeId": 1
      },
      {
        "pokemonId": 825,
        "typeId": 15
      },
      {
        "pokemonId": 826,
        "typeId": 1
      },
      {
        "pokemonId": 826,
        "typeId": 15
      },
      {
        "pokemonId": 827,
        "typeId": 2
      },
      {
        "pokemonId": 828,
        "typeId": 2
      },
      {
        "pokemonId": 829,
        "typeId": 10
      },
      {
        "pokemonId": 830,
        "typeId": 10
      },
      {
        "pokemonId": 831,
        "typeId": 13
      },
      {
        "pokemonId": 832,
        "typeId": 13
      },
      {
        "pokemonId": 833,
        "typeId": 18
      },
      {
        "pokemonId": 834,
        "typeId": 18
      },
      {
        "pokemonId": 834,
        "typeId": 16
      },
      {
        "pokemonId": 835,
        "typeId": 4
      },
      {
        "pokemonId": 836,
        "typeId": 4
      },
      {
        "pokemonId": 837,
        "typeId": 16
      },
      {
        "pokemonId": 838,
        "typeId": 16
      },
      {
        "pokemonId": 838,
        "typeId": 7
      },
      {
        "pokemonId": 839,
        "typeId": 16
      },
      {
        "pokemonId": 839,
        "typeId": 7
      },
      {
        "pokemonId": 840,
        "typeId": 10
      },
      {
        "pokemonId": 840,
        "typeId": 3
      },
      {
        "pokemonId": 841,
        "typeId": 10
      },
      {
        "pokemonId": 841,
        "typeId": 3
      },
      {
        "pokemonId": 842,
        "typeId": 10
      },
      {
        "pokemonId": 842,
        "typeId": 3
      },
      {
        "pokemonId": 843,
        "typeId": 11
      },
      {
        "pokemonId": 844,
        "typeId": 11
      },
      {
        "pokemonId": 845,
        "typeId": 8
      },
      {
        "pokemonId": 845,
        "typeId": 18
      },
      {
        "pokemonId": 846,
        "typeId": 18
      },
      {
        "pokemonId": 847,
        "typeId": 18
      },
      {
        "pokemonId": 848,
        "typeId": 4
      },
      {
        "pokemonId": 848,
        "typeId": 14
      },
      {
        "pokemonId": 849,
        "typeId": 4
      },
      {
        "pokemonId": 849,
        "typeId": 14
      },
      {
        "pokemonId": 850,
        "typeId": 7
      },
      {
        "pokemonId": 850,
        "typeId": 1
      },
      {
        "pokemonId": 851,
        "typeId": 7
      },
      {
        "pokemonId": 851,
        "typeId": 1
      },
      {
        "pokemonId": 852,
        "typeId": 6
      },
      {
        "pokemonId": 853,
        "typeId": 6
      },
      {
        "pokemonId": 854,
        "typeId": 9
      },
      {
        "pokemonId": 855,
        "typeId": 9
      },
      {
        "pokemonId": 856,
        "typeId": 15
      },
      {
        "pokemonId": 857,
        "typeId": 15
      },
      {
        "pokemonId": 858,
        "typeId": 15
      },
      {
        "pokemonId": 858,
        "typeId": 5
      },
      {
        "pokemonId": 859,
        "typeId": 2
      },
      {
        "pokemonId": 859,
        "typeId": 5
      },
      {
        "pokemonId": 860,
        "typeId": 2
      },
      {
        "pokemonId": 860,
        "typeId": 5
      },
      {
        "pokemonId": 861,
        "typeId": 2
      },
      {
        "pokemonId": 861,
        "typeId": 5
      },
      {
        "pokemonId": 862,
        "typeId": 2
      },
      {
        "pokemonId": 862,
        "typeId": 13
      },
      {
        "pokemonId": 863,
        "typeId": 17
      },
      {
        "pokemonId": 864,
        "typeId": 9
      },
      {
        "pokemonId": 865,
        "typeId": 6
      },
      {
        "pokemonId": 866,
        "typeId": 12
      },
      {
        "pokemonId": 866,
        "typeId": 15
      },
      {
        "pokemonId": 867,
        "typeId": 11
      },
      {
        "pokemonId": 867,
        "typeId": 9
      },
      {
        "pokemonId": 868,
        "typeId": 5
      },
      {
        "pokemonId": 869,
        "typeId": 5
      },
      {
        "pokemonId": 870,
        "typeId": 6
      },
      {
        "pokemonId": 871,
        "typeId": 4
      },
      {
        "pokemonId": 872,
        "typeId": 12
      },
      {
        "pokemonId": 872,
        "typeId": 1
      },
      {
        "pokemonId": 873,
        "typeId": 12
      },
      {
        "pokemonId": 873,
        "typeId": 1
      },
      {
        "pokemonId": 874,
        "typeId": 16
      },
      {
        "pokemonId": 875,
        "typeId": 12
      },
      {
        "pokemonId": 876,
        "typeId": 15
      },
      {
        "pokemonId": 876,
        "typeId": 13
      },
      {
        "pokemonId": 877,
        "typeId": 4
      },
      {
        "pokemonId": 877,
        "typeId": 2
      },
      {
        "pokemonId": 878,
        "typeId": 17
      },
      {
        "pokemonId": 879,
        "typeId": 17
      },
      {
        "pokemonId": 880,
        "typeId": 4
      },
      {
        "pokemonId": 880,
        "typeId": 3
      },
      {
        "pokemonId": 881,
        "typeId": 4
      },
      {
        "pokemonId": 881,
        "typeId": 12
      },
      {
        "pokemonId": 882,
        "typeId": 18
      },
      {
        "pokemonId": 882,
        "typeId": 3
      },
      {
        "pokemonId": 883,
        "typeId": 18
      },
      {
        "pokemonId": 883,
        "typeId": 12
      },
      {
        "pokemonId": 884,
        "typeId": 17
      },
      {
        "pokemonId": 884,
        "typeId": 3
      },
      {
        "pokemonId": 885,
        "typeId": 3
      },
      {
        "pokemonId": 885,
        "typeId": 9
      },
      {
        "pokemonId": 886,
        "typeId": 3
      },
      {
        "pokemonId": 886,
        "typeId": 9
      },
      {
        "pokemonId": 887,
        "typeId": 3
      },
      {
        "pokemonId": 887,
        "typeId": 9
      },
      {
        "pokemonId": 888,
        "typeId": 5
      },
      {
        "pokemonId": 889,
        "typeId": 6
      },
      {
        "pokemonId": 890,
        "typeId": 14
      },
      {
        "pokemonId": 890,
        "typeId": 3
      },
      {
        "pokemonId": 891,
        "typeId": 6
      },
      {
        "pokemonId": 892,
        "typeId": 6
      },
      {
        "pokemonId": 892,
        "typeId": 2
      },
      {
        "pokemonId": 893,
        "typeId": 2
      },
      {
        "pokemonId": 893,
        "typeId": 10
      },
      {
        "pokemonId": 894,
        "typeId": 4
      },
      {
        "pokemonId": 895,
        "typeId": 3
      },
      {
        "pokemonId": 896,
        "typeId": 12
      },
      {
        "pokemonId": 897,
        "typeId": 9
      },
      {
        "pokemonId": 898,
        "typeId": 15
      },
      {
        "pokemonId": 898,
        "typeId": 10
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PokemonTypes', null, {});
  }
};
