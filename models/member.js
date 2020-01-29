'use strict';

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Member extends Model { }
  
  Member.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    shoe_size: DataTypes.INTEGER
  }, { sequelize });
  
  Member.associate = function(models) {
    // associations can be defined here
  };
  
  return Member;
};