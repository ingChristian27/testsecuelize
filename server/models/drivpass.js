"use strict";
module.exports = (sequelize, DataTypes) => {
  var drivpass = sequelize.define(
    "drivpass",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      phone: { type: DataTypes.STRING, allowNull: false },
      city: { type: DataTypes.INTEGER, allowNull: false },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true }
      },
      password: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: true },
      video: { type: DataTypes.STRING, allowNull: true },
      auth_sms: { type: DataTypes.STRING, allowNull: true },
      reg_id: { type: DataTypes.STRING, allowNull: true },
      status_profile: { type: DataTypes.INTEGER, allowNull: true },
      btoken: { type: DataTypes.INTEGER, allowNull: true },
      led_status: { type: DataTypes.INTEGER, allowNull: true },
      status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: { min: 1, max: 1 }
      }
    },
    {}
  );
  drivpass.associate = function(models) {
    // associations can be defined here
  };
  return drivpass;
};
