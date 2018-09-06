const models = require("../models").model_car;

async function getAllMark(idMark) {
  try {
    const query = await models.findAll({ where: { carMarkId: idMark } });
    return query;
  } catch (e) {
    console.log(e);
  }
}

exports.getAllMark = getAllMark;
