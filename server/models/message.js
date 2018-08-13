/** === falta ese campo
 *  time_send: joi.any(),
 */

"use strict";
module.exports = (sequelize, DataTypes) => {
  var message = sequelize.define(
    "message",
    {
      id_conversation: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_sender: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      message: {
        type: DataTypes.STRING,
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
  message.associate = function(models) {
    // associations can be defined here
    //message.belongsTo(models.drivpass); // Will add drivpassId to message
  };
  return message;
};
