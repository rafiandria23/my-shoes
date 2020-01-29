'use strict';

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class MemberShoe extends Model { }
  
  MemberShoe.init({
    MemberId: DataTypes.INTEGER,
    ShoeId: DataTypes.INTEGER
  }, { sequelize });
  
  MemberShoe.associate = function(models) {
    // associations can be defined here
  };
  
  return MemberShoe;
};