const CarMark = require("../models").car_mark;

async function getAll() {
  try {
    const query = await CarMark.findAll();
    return query;
  } catch (e) {
    console.log(e);
  }
}

exports.getAll = getAll;
