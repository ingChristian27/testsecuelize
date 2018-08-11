'use strict';
module.exports = (sequelize, DataTypes) => {
  var favorite_driver = sequelize.define('favorite_driver', {
    make: DataTypes.STRING
  }, {});
  favorite_driver.associate = function(models) {
    // associations can be defined here
    favorite_driver.belongsTo(models.drivpass); // Will add drivpassId to favorite_driver
    favorite_driver.belongsTo(models.drivpass); // Will add drivpassId to favorite_driver
  };
  return favorite_driver;
};