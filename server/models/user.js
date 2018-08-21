"use strict";
//const bcrypt = require("bcrypt");
//const bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define(
    "user",
    {
      first_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true }
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: { min: 0, max: 1 }
      }
    }
    /*
    {
      instanceMethods: {
        generateHash(password) {
          return bcrypt.hash(password, bcrypt.genSaltSync(8));
        },
        validPassword(password) {
          return bcrypt.compare(password, this.password);
        }
      }
    }
    */
  );
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
