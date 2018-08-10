"use strict";
module.exports = (sequelize, DataTypes) => {
  var drivpass_user_type = sequelize.define(
    "drivpass_user_type",
    {
      id_drivpass: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_payment: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      user_type: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: { min: 0, max: 1 }
      }
    },
    {}
  );
  drivpass_user_type.associate = function(models) {
    // associations can be defined here
  };
  return drivpass_user_type;
};
