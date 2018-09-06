const colors = require("../models").color_car;

async function getById(id) {
  try {
    const query = await colors
    .find({
      where: { id: id }
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

async function getAll() {
  try {
    const query = await colors.findAll();

    return query;
  } catch (e) {
    console.log(e);
  }
}

exports.getById = getById;
exports.getAll = getAll;
