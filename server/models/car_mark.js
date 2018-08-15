"use strict";
module.exports = (sequelize, DataTypes) => {
    var car_mark = sequelize.define(
        "car_mark",
        {
            name: { type: DataTypes.STRING, allowNull: false }
        },
        {}
    );
    car_mark.associate = function (models) {
        // associations can be defined here
        //car_info.belongsTo(models.drivpass); // Will add drivpassId to car_info
    };
    return car_mark;
};
