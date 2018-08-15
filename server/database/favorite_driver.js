const FavoriteDriver = require("../models").favorite_driver;

async function selectById(id_passenger, id_driver) {
  try {
    const query = await FavoriteDriver.find({
      where: { id_passenger: id_passenger, id_driver: id_driver }
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

async function insert(data) {
  // # TODO: DEBE RETORNAR EL ID
  try {
    const query = await FavoriteDriver.create(data);
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}

async function insertData(data) {
  // # TODO: NO RETORNA ID.
  try {
    const query = await FavoriteDriver.create(data);
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}

async function deleteData(id_passenger, id_driver) {
  // # TODO: NO RETORNA ID.
  try {
    const query = await FavoriteDriver.destroy({
      where: { id_passenger: id_passenger, id_driver: id_driver }
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

exports.selectById = selectById;
exports.insert = insert;
exports.insertData = insertData;
exports.deleteData = deleteData;



  /*
  delete: (table, id_passenger, id_driver)=>{
    return squel.delete().from(table).where("id_passenger = " + id_passenger).where("id_driver = " + id_driver).toString();
  },
  */

  /*
  TODO: SE DEVE INSERTAR EN TABLA REFER_DRIVER (NO EXISTE MODELO)
  referById: (id_driver,id_driver_refer)=>{
    return `SELECT * FROM refer_driver WHERE id_driver = ('${id_driver}') AND id_driver_refer = ('${id_driver_refer}')`;
  },
  */

