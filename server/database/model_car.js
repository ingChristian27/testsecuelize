const models = require("../models");

async function getById(id) {
  try {
    const query = await models.model_car.find({
      where: { id: id },
      include: [
        {
          model: models.car_mark
        }
      ]
    });

    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }

  } catch (e) {
    console.log(e);
  }
}


async function getAllMark(idMark) {
  try {
    const query = await models.model_car.findAll({
      where: { carMarkId: idMark },
      include: [
        {
          model: models.car_mark
        }
      ]
    });
    return query;
  } catch (e) {
    console.log(e);
  }
}

exports.getById = getById;
exports.getAllMark = getAllMark;

