const CarInfo = require("../models").car_info;

/*
selectByEmail : (email) => {
  const query = `SELECT * FROM drivpass WHERE  email = ('${email}')`;
  return query;
},
*/

async function selectCar(id_user) {
  try {
    const query = await CarInfo.find({ where: { id_user: id_user } });
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}

async function insert(data) {
  try {
    const query = await CarInfo.create(data);
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
    console.log("va a buscar los elementos...");
    const query = await CarInfo.find();
    console.log(query);
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}

async function selectPlate(plate) {
  try {
    const query = await CarInfo.find({ where: { number: plate } });
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}

async function update(data, id_platecar) {
  try {
    const query = await CarInfo.update(data, {
      returning: true,
      where: { id: id_platecar }
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

exports.selectCar = selectCar;
exports.insert = insert;
exports.selectPlate = selectPlate;
exports.update = update;
exports.getAll = getAll;
