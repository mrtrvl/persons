'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    firstName: {
      type: DataTypes.STRING,
      allowedNull: false
    },
    lastName:{
      type: DataTypes.STRING,
      allowedNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowedNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowedNull: false
    },
    isAdmin: {
      type: DataTypes.STRING,
      defaultValue: false,
      allowedNull: false
    },
  }, {});
  Person.associate = function(models) {
    // associations can be defined here
  };
  return Person;
};