"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ride_drivers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_ride: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_driver: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      response: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: { min: -1, max: 2 }
      },
      counteroffer: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable("ride_drivers");
  }
};
