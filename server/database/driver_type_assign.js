const DriverTypeAssign = require("../models").driver_type_assign;

async function insert(data) {
  // # TODO: DEBE RETORNAR EL ID
  try {
    const query = await DriverTypeAssign.create(data);
    
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
    
  } catch (e) {
    console.log(e);
  }
}

async function insertBulk(data) {
  // # TODO: DEBE RETORNAR EL ID
  console.log("THIS DTA",data)
  try {
    const query = await DriverTypeAssign.bulkCreate(data[0]);
    
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
    
  } catch (e) {
    console.log(e);
  }
}

exports.insert = insert;
exports.insertBulk = insertBulk;

/*
  get: (id_driver)=>{
    const query = `SELECT d.*
                   FROM driver_type_assign dt 
                   JOIN driver_type d ON d.id = dt.id_driver_type
                   WHERE id_driver = ('${id_driver}')`;
    return query;
  },
  */


