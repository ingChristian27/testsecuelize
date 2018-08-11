const Locations = require("../models").locations;

async function selectById(id_user) {
  try {
    const query = await Locations.find({ where: { id_user: id_user } });
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

async function insert(data) {
  // # TODO: DEBE RETORNAR EL ID
  try {
    const query = await Locations.create(data);
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

async function update(data, id_user) {
  try {
    const query = await Locations.update(data, {
      returning: true,
      where: { id_user: id_user }
    });
    return query;
  } catch { }
}

async function inhabilitate_driver() {
  //TODO: VERIFICAR
  try {
    const query = await Locations.update({ status: 0 }, {
      returning: true,
      where: { id_user: $1 }
    });
    return query;
  } catch { }
}

async function habilitate_driver() {
  //TODO: VERIFICAR
  try {
    const query = await Locations.update({ status: 1 }, {
      returning: true,
      where: { id_user: $1 }
    });
    return query;
  } catch { }
}

exports.selectById = selectById;
exports.insert = insert;
exports.update = update;
exports.inhabilitate_driver = inhabilitate_driver;
exports.habilitate_driver = habilitate_driver;



  /*
  assign: ()=>{
    const query= `SELECT DISTINCT ON (l.id_user) l.* 
                  FROM locations l
                  WHERE l.user_type = 1
                  AND l.status = 1`;

    return query;
  },
  */


