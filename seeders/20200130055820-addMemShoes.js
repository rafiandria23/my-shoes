'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert("MemberShoes",[
    {
        id:1,
        MemberId : 1,
        ShoeId : 1,
        createdAt:new Date,
        updatedAt:new Date
    },
    {
      id:2,
      MemberId : 1,
      ShoeId : 3,
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:3,
      MemberId : 1,
      ShoeId : 5,
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:4,
      MemberId : 1,
      ShoeId : 7,
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:5,
      MemberId : 1,
      ShoeId : 9,
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:6,
      MemberId : 1,
      ShoeId : 12,
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:7,
      MemberId : 2,
      ShoeId : 2,
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:8,
      MemberId : 2,
      ShoeId : 3,
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:9,
      MemberId : 2,
      ShoeId : 4,
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:10,
      MemberId : 2,
      ShoeId : 6,
      createdAt:new Date,
      updatedAt:new Date
    },])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete("MemberShoes", null, {});
    }
};
