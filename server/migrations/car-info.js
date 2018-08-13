"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("car_info", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user: { type: Sequelize.INTEGER, allowNull: false },
      number: { type: Sequelize.STRING, allowNull: true },
      year: { type: Sequelize.STRING, allowNull: false },
      make: { type: Sequelize.STRING, allowNull: false },
      model: { type: Sequelize.STRING, allowNull: false },
      color: { type: Sequelize.STRING, allowNull: false },
      plate: { type: Sequelize.STRING, allowNull: false },

      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: { min: 1, max: 1 }
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
    return queryInterface.dropTable("car_info");
  }
};
