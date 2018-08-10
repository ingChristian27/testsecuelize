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
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_driver: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      response: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: { min: -1, max: 2 }
      },
      counteroffer: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      status: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        validate: { min: 0, max: 1 }
      }
    },
    {}
  );
  ride_driver.associate = function(models) {
    // associations can be defined here
  };
  return ride_driver;
};
