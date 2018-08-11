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
        type: DataTypes.INTEGER,
        allowNull: false
      },
      id_drivpass: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      commentary: {
        type: DataTypes.STRING,
        allowNull: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: { min: 1, max: 2 }
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {}
  );
  valoration.associate = function(models) {
    // associations can be defined here
    valoration.belongsTo(models.drivpass); // Will add drivpassId to valoration
    valoration.belongsTo(models.drivpass); // Will add drivpassId to valoration
  };
  return valoration;
};
