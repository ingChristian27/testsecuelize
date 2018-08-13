"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("driver_type_assigns", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id_driver: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            id_driver_type: { type: Sequelize.INTEGER, allowNull: false },
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
        return queryInterface.dropTable("driver_type_assign");
    }
};
