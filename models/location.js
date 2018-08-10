"use strict";
module.exports = (sequelize, DataTypes) => {
  var location = sequelize.define(
    "location",
    {
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      user_type: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      latitude: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      longitude: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: { min: 0, max: 1 }
      }
    },
    {}
  );
  location.associate = function(models) {
    // associations can be defined here
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
