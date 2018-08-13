"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("states", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_country: { type: Sequelize.INTEGER, allowNull: false },
            name: { type: Sequelize.STRING, allowNull: false },
            status: { type: Sequelize.INTEGER, allowNull: true },
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
        return queryInterface.dropTable("states");
    }
};