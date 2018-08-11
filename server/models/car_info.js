"use strict";
module.exports = (sequelize, DataTypes) => {
  var car_info = sequelize.define(
    "car_info",
    {
      id_user: { type: DataTypes.INTEGER, allowNull: false },
      number: { type: DataTypes.STRING, allowNull: true },
      year: { type: DataTypes.STRING, allowNull: false },
      make: { type: DataTypes.STRING, allowNull: false },
      model: { type: DataTypes.STRING, allowNull: false },
      color: { type: DataTypes.STRING, allowNull: false },
      plate: { type: DataTypes.STRING, allowNull: false },
      status: {
        type: DataTypes.INTEGER,
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
