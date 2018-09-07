"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("answers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_question: { type: Sequelize.STRING },
      id_ride: { type: Sequelize.INTEGER, allowNull: false },
      id_passenger: { type: Sequelize.INTEGER, allowNull: false },
      id_driver: { type: Sequelize.INTEGER, allowNull: false },
      response: { type: Sequelize.STRING, allowNull: false },
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
    return queryInterface.dropTable("answers");
  }
};
