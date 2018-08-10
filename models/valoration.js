/**

  Ç==== FALTA ESTE, OJO TAMBIEN EN MIGRACION PONERLO Y BORRAR COMENTARIO
  time_send: joi.any(),
 */

"use strict";
module.exports = (sequelize, DataTypes) => {
  var valoration = sequelize.define(
    "valoration",
    {
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_drivpass: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      commentary: {
        type: Sequelize.STRING,
        allowNull: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: { min: 1, max: 2 }
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  valoration.associate = function(models) {
    // associations can be defined here
  };
  return valoration;
};
