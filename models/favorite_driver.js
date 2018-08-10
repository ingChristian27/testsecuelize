'use strict';
module.exports = (sequelize, DataTypes) => {
  var favorite_driver = sequelize.define('favorite_driver', {
    make: DataTypes.STRING
  }, {});
  favorite_driver.associate = function(models) {
    // associations can be defined here
  };
  return favorite_driver;
};