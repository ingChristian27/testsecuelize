/** == FALTAN ESTOS CAMPOS, OJO COLOCAR EN LA MIGRACIÓN TAMBIÉN
 *  time_send: joi.any(),
      time_response: joi.any(),
 */

"use strict";
module.exports = (sequelize, DataTypes) => {
  var ride_driver = sequelize.define(
    "ride_driver",
    {
      id_ride: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_driver: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      response: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: { min: -1, max: 2 }
      },
      counteroffer: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      status: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        validate: { min: 0, max: 1 }
      }
    },
    {}
  );
  ride_driver.associate = function(models) {
    // associations can be defined here
    //ride_driver.belongsTo(models.drivpass);
    //ride_driver.belongsTo(models.drivpass); // Will add drivpassId to ride_driver
    //ride_driver.belongsTo(models.ride); // Will add rideId to ride_driver
  };
  return ride_driver;
};
