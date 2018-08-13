"use strict";
module.exports = (sequelize, DataTypes) => {
    var country = sequelize.define(
        "country",
        {
            name: { type: DataTypes.STRING, allowNull: false },
            indicative: { type: DataTypes.STRING, allowNull: false },
            short_name: { type: DataTypes.STRING, allowNull: true },
            status: { type: DataTypes.INTEGER, allowNull: true }
        },
        {}
    );
    country.associate = function (models) {
        // associations can be defined here
        //car_info.belongsTo(models.drivpass); // Will add drivpassId to car_info
    };
    return country;
};
