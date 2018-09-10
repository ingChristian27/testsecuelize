"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("driver_verifies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      driverId: { type: Sequelize.INTEGER, allowNull: false },
      passengerId: { type: Sequelize.INTEGER, allowNull: false },
      verify: { type: Sequelize.BOOLEAN, allowNull: false },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("driver_verifies");
  }
};
