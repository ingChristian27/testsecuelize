"use strict";
module.exports = (sequelize, DataTypes) => {
  var Ride = sequelize.define(
    "ride",
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
        allowNull: true
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
        type: DataTypes.STRING,
        allowNull: false
      },
      longitude_start: {
        type: DataTypes.STRING,
        allowNull: false
      },
      latitude_end: {
        type: DataTypes.STRING,
        allowNull: false
      },
      longitude_end: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.STRING,
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
        allowNull: false,
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
    Ride.belongsTo(models.drivpass, {foreignKey: 'id_driver'}); // Adds id_driver to Ride
    Ride.belongsTo(models.car_info, {foreignKey: 'id_driver'}); // Adds id_driver to Ride
  };
  return Ride;
};
