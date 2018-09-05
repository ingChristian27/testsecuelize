"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("deliveries", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

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
        type: Sequelize.STRING,
        allowNull: false
      },
      longitude_start: {
        type: Sequelize.STRING,
        allowNull: true
      },
      latitude_end: {
        type: Sequelize.STRING,
        allowNull: false
      },
      longitude_end: {
        type: Sequelize.STRING,
        allowNull: true
      },
      price: {
        type: Sequelize.STRING,
        allowNull: false
      },
      accept_counteroffer: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: { min: 0, max: 1 }
      },
      delivery_status: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        validate: { min: -1, max: 3 } // doesn´t started = -1, started = 1, finished = 0
      },
      status: {
        type: Sequelize.DOUBLE,
        allowNull: true,
        validate: { min: 0, max: 1 }
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
    return queryInterface.dropTable("deliveries");
  }
};
