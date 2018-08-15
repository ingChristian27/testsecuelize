const Locations = require("../models").location;

async function selectById(id_user) {
  try {
    const query = await Locations.find({ where: { id_user: id_user } });

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
  // # TODO: DEBE RETORNAR EL ID
  try {
    const query = await Locations.create(data);
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
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
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) { }
}

async function inhabilitate_driver() {
  //TODO: VERIFICAR
  try {
    const query = await Locations.update({ status: 0 }, {
      returning: true,
      where: { id_user: $1 }
    });
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) { }
}

async function habilitate_driver() {
  //TODO: VERIFICAR
  try {
    const query = await Locations.update({ status: 1 }, {
      returning: true,
      where: { id_user: $1 }
    });
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) { }
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


