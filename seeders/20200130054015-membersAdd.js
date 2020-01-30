'use strict';
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
module.exports = {
  up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Members', [{
          id: 1,
          name: 'purandra',
          username:"purandrar",
          password: bcrypt.hashSync("662013", salt),
          gender:"male",
          age:20,
          email:"purandrar@gmail.com",
          shoe_size: 46,
          createdAt:new Date,
          updatedAt:new Date
        },
        {
          id: 2,
          name: 'adam',
          username:"adama",
          password: bcrypt.hashSync("662013", salt),
          gender:"male",
          age:22,
          email:"adam@gmail.com",
          shoe_size: 41,
          createdAt:new Date,
          updatedAt:new Date
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Members', null, {});
  }
};
