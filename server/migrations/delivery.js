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
      name: { type: Sequelize.STRING, allowNull: false },
      phone: { type: Sequelize.STRING, allowNull: false },
      city: { type: Sequelize.INTEGER, allowNull: false },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { isEmail: true }
      },
      password: { type: Sequelize.STRING, allowNull: false },
      image: { type: Sequelize.STRING, allowNull: true },
      video: { type: Sequelize.STRING, allowNull: true },
      auth_sms: { type: Sequelize.STRING, allowNull: true },
      reg_id: { type: Sequelize.STRING, allowNull: true },
      status_profile: { type: Sequelize.INTEGER, allowNull: true },
      btoken: { type: Sequelize.INTEGER, allowNull: true },
      led_status: { type: Sequelize.INTEGER, allowNull: true },
      status: {
        type: Sequelize.INTEGER,
        allowNull: true,
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
    return queryInterface.dropTable("deliveries");
  }
};
