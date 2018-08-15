"use strict";
module.exports = (sequelize, DataTypes) => {
    var saved_location = sequelize.define(
        "saved_location",
        {
            name: { type: DataTypes.STRING, allowNull: false },
            latitud: { type: DataTypes.DOUBLE, allowNull: false },
            longitud: { type: DataTypes.DOUBLE, allowNull: false },
            description: { type: DataTypes.STRING },
            user_id: { type: DataTypes.INTEGER }
        },
        {}
    );
    saved_location.associate = function (models) {
        // associations can be defined here
        //car_info.belongsTo(models.drivpass); // Will add drivpassId to car_info
    };
    return saved_location;
};