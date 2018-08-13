/*
 ======= FALTAN ESTOS CAMPOS ===========
  time_send: joi.any(),
  time_response: joi.any(),
*/

"use strict";
module.exports = (sequelize, DataTypes) => {
  var delivery_driver = sequelize.define(
    "delivery_driver",
    {
      id_delivery: {
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
        validate: { min: -1, max: 1 }
      },
      counteroffer: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: { min: 0, max: 1 }
      }
    },
    {}
  );
  delivery_driver.associate = function(models) {
    // associations can be defined here
    //delivery_driver.belongsTo(models.delivery); // Will add deliveryId to delivery_driver
    //delivery_driver.belongsTo(models.drivpass); // Will add drivpassId to delivery_driver
  };
  return delivery_driver;
};
