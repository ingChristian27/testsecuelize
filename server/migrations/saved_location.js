"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("buytokens", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            name: { type: Sequelize.STRING, allowNull: false },
            latitud: { type: Sequelize.DOUBLE, allowNull: false },
            longitud: { type: Sequelize.DOUBLE, allowNull: false },
            description: { type: Sequelize.STRING },
            user_id: { type: Sequelize.INTEGER },

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
        return queryInterface.dropTable("buytokens");
    }
};
