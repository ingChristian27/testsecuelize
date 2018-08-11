/*
 ======= FALTAN ESTOS CAMPOS ===========
  time_send: joi.any(),
  time_response: joi.any(),
*/

"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("delivery_drivers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
        allowNull: true
      },
      counteroffer: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("delivery_drivers");
  }
};

/*
 id: joi.any(),
      id_user: joi.number().integer().required(),
      id_driver: joi.number().integer().allow(null),
      package_details: joi.string().required(),
      location_start: joi.string().required(),
      location_end: joi.string().required(),
      latitude_start: joi.number().required(),
      longitude_start: joi.number().required(),
      latitude_end: joi.number().required(),
      longitude_end: joi.number().required(),
      price: joi.number().required(),
      accept_counteroffer: joi.number().min(0).max(1).required(),
      delivery_status: joi.number().min(-1).max(3).allow(null),// doesn´t started = -1, started = 1, finished = 0
      status: joi.number().min(0).max(1).allow(null)
*/
