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
        allowNull: false
      },
      delivery_status: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      status: {
        type: Sequelize.DOUBLE,
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
    return queryInterface.dropTable("deliveries");
  }
};
