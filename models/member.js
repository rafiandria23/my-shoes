'use strict';
var bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model;

  class Member extends Model { }
  
  Member.init({
    name:{
      type:DataTypes.STRING,
      validate:{
        notEmpty:true
      }
    },
    username: {
      type:DataTypes.STRING,
      validate:{
        len: [6,12]
      }
    },
    password:{
      type:DataTypes.STRING,
      validate:{
        len:[6,12]
      }
    },  
    gender: {
      type:DataTypes.STRING,
      validate:{
        isIn: [['male', 'female',"other"]]
      }
    },
    age:{
      type:DataTypes.INTEGER,
      validate: {
        isInt:true
      }
    },
    email:{
      type:DataTypes.STRING,
      validate:{
        isEmail:true
      }
    },
    shoe_size:{
      type:DataTypes.INTEGER,
      validate:{
        isInt:true
      }
    } 
  }, {  
    hooks:{
      beforeCreate: (instance,options) => {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(instance.password, salt);
        instance.password= hash
      }
    },
    sequelize });
  
  Member.associate = function(models) {
    // associations can be defined here
    Member.belongsToMany(models.Shoe,{
      through:models.MemberShoe,
      foreignKey:"MemberId"
    })
    Member.hasMany(models.Comment)
  };
  
  return Member;
};