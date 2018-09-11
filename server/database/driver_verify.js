const verifyDB = require("../models").driver_verify;

async function getByIdDriver(idDriver) {
  try {
    const query = await verifyDB.findAndCountAll({
      where: { driverId: idDriver }
    });
    return query;
  } catch (e) {
    console.log(e);
  }
}

async function insert(data) {
  // # TODO: DEBE RETORNAR EL ID
  try {
    const query = await verifyDB.create(data);
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}
exports.getByIdDriver = getByIdDriver;
exports.insert = insert;
