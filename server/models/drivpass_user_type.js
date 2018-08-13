"use strict";
module.exports = (sequelize, DataTypes) => {
  var drivpass_user_type = sequelize.define(
    "drivpass_user_type",
    {
      id_drivpass: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_payment: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      user_type: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: { min: 0, max: 1 }
      }
    },
    {}
  );
  drivpass_user_type.associate = function(models) {
    // associations can be defined here
    //drivpass_user_type.belongsTo(models.drivpass); // Will add drivpassId to drivpass_user_type
  };
  return drivpass_user_type;
};
