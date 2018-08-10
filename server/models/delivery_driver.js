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
        validate: { min: -1, max: 1 }
      },
      counteroffer: {
        type: Sequelize.INTEGER,
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
  delivery_driver.associate = function(models) {
    // associations can be defined here
  };
  return delivery_driver;
};
