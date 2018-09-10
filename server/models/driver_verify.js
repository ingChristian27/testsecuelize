"use strict";
module.exports = (sequelize, DataTypes) => {
  var driver_verify = sequelize.define(
    "driver_verify",
    {
      driverId: { type: DataTypes.INTEGER, allowNull: false },
      passengerId: { type: DataTypes.INTEGER, allowNull: false },
      verify: { type: DataTypes.BOOLEAN, allowNull: false }
    },
    {}
  );
  driver_verify.associate = function(models) {
    // associations can be defined here
  };
  return driver_verify;
};
