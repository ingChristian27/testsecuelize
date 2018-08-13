"use strict";
module.exports = (sequelize, DataTypes) => {
    var city = sequelize.define(
        "city",
        {
            id_state: { type: DataTypes.INTEGER, allowNull: true },
            id_country: { type: DataTypes.INTEGER, allowNull: true },
            name: { type: DataTypes.STRING, allowNull: false },
            status: { type: DataTypes.INTEGER, allowNull: true }
        },
        {}
    );
    city.associate = function (models) {
        // associations can be defined here
        //car_info.belongsTo(models.drivpass); // Will add drivpassId to car_info
    };
    return city;
};