"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("rides", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
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
        allowNull: true
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
        allowNull: false
      },
      latitude_end: {
        type: Sequelize.STRING,
        allowNull: false
      },
      longitude_end: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.STRING,
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
        allowNull: true
      },
      ride_status: {
        type: Sequelize.DOUBLE,
        allowNull: false
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
    return queryInterface.dropTable("rides");
  }
};
