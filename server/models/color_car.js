"use strict";
module.exports = (sequelize, DataTypes) => {
  var color_car = sequelize.define(
    "color_car",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      status: { type: DataTypes.INTEGER, allowNull: true }
    },
    {}
  );
  color_car.associate = function(models) {
    // associations can be defined here
  };
  return color_car;
};
