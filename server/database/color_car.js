const colors = require("../models").color_car;

async function getAll() {
  try {
    const query = await colors.findAll();

    return query;
  } catch (e) {
    console.log(e);
  }
}

exports.getAll = getAll;
