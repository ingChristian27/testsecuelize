"use strict";
module.exports = (sequelize, DataTypes) => {
    var buytoken = sequelize.define(
        "buytoken",
        {
            payment_method_id: { type: DataTypes.STRING, allowNull: false },
            character: { type: DataTypes.STRING },
            n_tokes: { type: DataTypes.INTEGER },
            total: { type: DataTypes.DOUBLE },
            payment_date: { type: DataTypes.DATE },
            characuser_idter: { type: DataTypes.INTEGER }
        },
        {}
    );
    buytoken.associate = function (models) {
        // associations can be defined here
        //car_info.belongsTo(models.drivpass); // Will add drivpassId to car_info
    };
    return buytoken;
};