"use strict";
module.exports = (sequelize, DataTypes) => {
  var model_car = sequelize.define(
    "model_car",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      status: { type: DataTypes.INTEGER, allowNull: true },
      carMarkId: { type: DataTypes.INTEGER, allowNull: false }
    },
    {}
  );
  model_car.associate = function(models) {
    model_car.belongsTo(models.car_mark);
  };
  return model_car;
};
