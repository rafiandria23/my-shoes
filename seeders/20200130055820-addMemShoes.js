'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("MemberShoes", [
      {
        MemberId: 1,
        ShoeId: 1,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        MemberId: 1,
        ShoeId: 3,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        MemberId: 1,
        ShoeId: 5,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        MemberId: 1,
        ShoeId: 7,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        MemberId: 1,
        ShoeId: 9,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        MemberId: 1,
        ShoeId: 12,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        MemberId: 2,
        ShoeId: 2,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        MemberId: 2,
        ShoeId: 3,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        MemberId: 2,
        ShoeId: 4,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        MemberId: 2,
        ShoeId: 6,
        createdAt: new Date,
        updatedAt: new Date
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("MemberShoes", null, {});
  }
};
