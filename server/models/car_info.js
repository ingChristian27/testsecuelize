"use strict";
module.exports = (sequelize, DataTypes) => {
  var car_info = sequelize.define(
    "car_info",
    {
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      number: {
        type: Sequelize.STRING,
        allowNull: true
      },
      year: {
        type: Sequelize.STRING,
        allowNull: false
      },
      make: {
        type: Sequelize.STRING,
        allowNull: false
      },
      model: {
        type: Sequelize.STRING,
        allowNull: false
      },
      color: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: { min: 1, max: 1 }
      }
    },
    {}
  );
  car_info.associate = function(models) {
    // associations can be defined here
  };
  return car_info;
};
