"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("countries", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: { type: Sequelize.STRING, allowNull: false },
            indicative: { type: Sequelize.STRING, allowNull: false },
            short_name: { type: Sequelize.STRING, allowNull: true },
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
        return queryInterface.dropTable("countries");
    }
};
