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
           
            payment_method_id: { type: Sequelize.STRING, allowNull: false },
            character: { type: Sequelize.STRING },
            n_tokes: { type: Sequelize.INTEGER },
            total: { type: Sequelize.DOUBLE },
            payment_date: { type: Sequelize.DATE },
            characuser_idter: { type: Sequelize.INTEGER },
            
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
