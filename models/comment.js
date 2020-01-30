'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;
  class Comment extends Model { }
  Comment.init({
    Comment: DataTypes.STRING,
    MemberId: DataTypes.INTEGER
  },{sequelize})
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Member)
  };
  return Comment;
};