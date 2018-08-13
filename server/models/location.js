"use strict";
module.exports = (sequelize, DataTypes) => {
  var location = sequelize.define(
    "location",
    {
      id_user: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      user_type: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      latitude: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      longitude: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: { min: 0, max: 1 }
      }
    },
    {}
  );
  location.associate = function(models) {
    // associations can be defined here
    //location.belongsTo(models.drivpass); // Will add drivpassId to location
  };
  return location;
};

/**
 * location: {
    body: {
      id: joi.any(),
      id_user: joi.number().integer().allow(null), 
      user_type: joi.number().integer().required(),
      latitude: joi.number().required(),
      longitude: joi.number().required(),
      status: joi.number().min(0).max(1).allow(null)
    }
  }
 */
