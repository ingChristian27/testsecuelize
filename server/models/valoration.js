/**

  Ç==== FALTA ESTE, OJO TAMBIEN EN MIGRACION PONERLO Y BORRAR COMENTARIO
  time_send: joi.any(),
 */

"use strict";
module.exports = (sequelize, DataTypes) => {
  var valoration = sequelize.define(
    "valoration",
    {
      id_user: { type: DataTypes.INTEGER, allowNull: false },
      drivpass_id: { type: DataTypes.INTEGER, allowNull: false },
      commentary: { type: DataTypes.STRING, allowNull: true },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: true
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: { min: 1, max: 2 }
      },
      time_send: {
        type: DataTypes.DATE,
        allowNull: false
      },
      rating: {
        type: DataTypes.DOUBLE,
        allowNull: false
      }
    },
    {}
  );
  valoration.associate = function(models) {
    // associations can be defined here
    valoration.belongsTo(models.drivpass, { foreignKey: "drivpass_id" });

    //valoration.belongsTo(models.drivpass); // Will add drivpassId to valoration
  };
  return valoration;
};
