'use strict';

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Shoe extends Model { }
  
  Shoe.init({
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    type: DataTypes.STRING
  }, { sequelize });
  
  Shoe.associate = function(models) {
    // associations can be defined here
  };
  
  return Shoe;
};