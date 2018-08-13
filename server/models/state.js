"use strict";
module.exports = (sequelize, DataTypes) => {
    var state = sequelize.define(
        "state",
        {
            id_country: { type: DataTypes.INTEGER, allowNull: false },
            name: { type: DataTypes.STRING, allowNull: false },
            status: { type: DataTypes.INTEGER, allowNull: true }
        },
        {}
    );
    state.associate = function (models) {
        // associations can be defined here
        //car_info.belongsTo(models.drivpass); // Will add drivpassId to car_info
    };
    return state;
};