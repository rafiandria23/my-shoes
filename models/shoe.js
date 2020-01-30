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
    Shoe.belongsToMany(models.Member,{
      through : models.MemberShoe,
      foreignKey : "ShoeId"
    })
  };
  
  return Shoe;
};