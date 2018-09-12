"use strict";
module.exports = (sequelize, DataTypes) => {
    var driver_type_assign = sequelize.define(
        "driver_type_assign",
        {
            id_driver: { type: DataTypes.INTEGER, allowNull: false },
            id_driver_type: { type: DataTypes.STRING, allowNull: false }
        },
        {}
    );
    driver_type_assign.associate = function (models) {
        // associations can be defined here
    };
    return driver_type_assign;
};
