"use strict";
module.exports = (sequelize, DataTypes) => {
  var delivery = sequelize.define(
    "delivery",
    {
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_driver: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      package_details: {
        type: Sequelize.STRING,
        allowNull: false
      },
      location_start: {
        type: Sequelize.STRING,
        allowNull: false
      },
      location_end: {
        type: Sequelize.STRING,
        allowNull: false
      },
      latitude_start: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      longitude_start: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      latitude_end: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      longitude_end: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      accept_counteroffer: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: { min: 0, max: 1 }
      },
      delivery_status: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        validate: { min: -1, max: 3 } // doesn´t started = -1, started = 1, finished = 0
      },
      status: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        validate: { min: 0, max: 1 }
      }
    },
    {}
  );
  delivery.associate = function(models) {
    // associations can be defined here
  };
  return delivery;
};
