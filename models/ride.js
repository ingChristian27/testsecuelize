"use strict";
module.exports = (sequelize, DataTypes) => {
  var Ride = sequelize.define(
    "Ride",
    {
      id_passenger: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_driver_type: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      id_driver: {
        type: Sequelize.INTEGER,
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
        allowNull: false
      },
      latitude_end: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      longitude_end: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      accept_counteroffer: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      accept_counteroffer: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      accept_counteroffer: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      accept_counteroffer: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        validate: { min: 0, max: 1 }
      },
      ride_status: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        validate: { min: -1, max: 3 }
      },
      status: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        validate: { min: 0, max: 1 }
      }
    },
    {}
  );
  Ride.associate = function(models) {
    // associations can be defined here
  };
  return Ride;
};
