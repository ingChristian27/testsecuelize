/** === falta ese campo
 *  time_send: joi.any(),
 */

"use strict";
module.exports = (sequelize, DataTypes) => {
  var message = sequelize.define(
    "message",
    {
      id_conversation: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_sender: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      message: {
        type: Sequelize.STRING,
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
  message.associate = function(models) {
    // associations can be defined here
  };
  return message;
};
