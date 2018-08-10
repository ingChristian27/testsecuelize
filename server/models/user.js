"use strict";
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define(
    "user",
    {
      first_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { isEmail: true }
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: { min: 0, max: 1 }
      }
    },
    {}
  );
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
