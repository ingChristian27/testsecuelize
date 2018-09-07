"use strict";
module.exports = (sequelize, DataTypes) => {
  var answers = sequelize.define(
    "answers",
    {
      id_question: { type: DataTypes.STRING },
      id_ride: { type: DataTypes.INTEGER, allowNull: false },
      id_passenger: { type: DataTypes.INTEGER, allowNull: false },
      id_driver: { type: DataTypes.INTEGER, allowNull: false },
      response: { type: DataTypes.STRING, allowNull: false }
    },
    {}
  );
  answers.associate = function(models) {
    // associations can be defined here
  };
  return answers;
};
