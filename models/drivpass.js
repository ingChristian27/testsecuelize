"use strict";
module.exports = (sequelize, DataTypes) => {
  var drivpass = sequelize.define(
    "drivpass",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      city: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { isEmail: true }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image: {
        type: Sequelize.STRING,
        allowNull: true
      },
      video: {
        type: Sequelize.STRING,
        allowNull: true
      },
      auth_sms: {
        type: Sequelize.STRING,
        allowNull: true
      },
      reg_id: {
        type: Sequelize.STRING,
        allowNull: true
      },
      status_profile: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      btoken: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      led_status: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      status: {
        type: Sequelize.INTEGER,
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
