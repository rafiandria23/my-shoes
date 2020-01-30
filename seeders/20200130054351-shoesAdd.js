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
   return queryInterface.bulkInsert("Shoes",[
    {
      id:1,
      name : "Air Force 1",
      brand : "Nike",
      type  : "Casuals",
      color: "White",
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:2,
      name : "Air Force 1",
      brand : "Nike",
      type  : "Casuals",
      color: "Black",
      createdAt:new Date,
      updatedAt:new Date
    },
    { 
      id:3,
      name : "Ultra Boost 2.0",
      brand : "Adidas",
      type  : "Running",
      color : "Black",
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:4,
      name : "ultra Boost 2.0",
      brand : "Nike",
      type  : "Casuals",
      color: "Black",
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:5,
      name : "Air Max 97",
      brand : "Nike",
      type  : "Casuals",
      color : "Silver",
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:6,
      name : "Air Max 97",
      brand : "Nike",
      type  : "Casuals",
      color : "Silver",
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:7,
      name : "Air Max 95",
      brand : "Nike",
      type  : "Casuals",
      color : "White",
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:8,
      name : "Air Max 95",
      brand : "Nike",
      type  : "Casuals",
      color : "Black",
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:9,
      name : "React Element",
      brand : "Nike",
      type  : "Casuals",
      color : "Black",
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:10,
      name : "React Element",
      brand : "Nike",
      type  : "Casuals",
      color : "White",
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:11,
      name : "Super Star",
      brand : "Adidas",
      type  : "Casuals",
      color : "White",
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:12,
      name : "Super Star",
      brand : "Adidas",
      type  : "Casuals",
      color : "Black",
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:13,
      name : "Air Jordan 1",
      brand : "Nike",
      type  : "Casuals",
      color : "Black",
      createdAt:new Date,
      updatedAt:new Date
    },
    {
      id:14,
      name : "Air Jordan 1",
      brand : "Nike",
      type  : "Casuals",
      color : "White",
      createdAt:new Date,
      updatedAt:new Date
    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Shoes', null, {});
  }
};
