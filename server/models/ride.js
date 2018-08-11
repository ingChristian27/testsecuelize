"use strict";
module.exports = (sequelize, DataTypes) => {
  var Ride = sequelize.define(
    "Ride",
    {
      id_passenger: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_driver_type: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      id_driver: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      location_start: {
        type: DataTypes.STRING,
        allowNull: false
      },
      location_end: {
        type: DataTypes.STRING,
        allowNull: false
      },
      latitude_start: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      longitude_start: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      latitude_end: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      longitude_end: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      accept_counteroffer: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      accept_counteroffer: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      accept_counteroffer: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      accept_counteroffer: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        validate: { min: 0, max: 1 }
      },
      ride_status: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        validate: { min: -1, max: 3 }
      },
      status: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        validate: { min: 0, max: 1 }
      }
    },
    {}
  );
  Ride.associate = function(models) {
    // associations can be defined here
    Ride.belongsTo(models.drivpass); // Will add drivpassId to Ride
    Ride.belongsTo(models.drivpass); // Will add drivpassId to Ride
  };
  return Ride;
};
