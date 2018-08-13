"use strict";
module.exports = (sequelize, DataTypes) => {
  var delivery = sequelize.define(
    "delivery",
    {
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_driver: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      package_details: {
        type: DataTypes.STRING,
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
        allowNull: true
      },
      latitude_end: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      longitude_end: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      accept_counteroffer: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: { min: 0, max: 1 }
      },
      delivery_status: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        validate: { min: -1, max: 3 } // doesn´t started = -1, started = 1, finished = 0
      },
      status: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        validate: { min: 0, max: 1 }
      }
    },
    {}
  );
  delivery.associate = function(models) {
    // associations can be defined here
    //delivery.belongsTo(models.drivpass); // Will add drivpassId to delivery
    //delivery.belongsTo(models.drivpass); // Will add drivpassId to delivery
  };
  return delivery;
};
