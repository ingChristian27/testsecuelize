const DriverTypeAssign = require("../models").driver_type_assign;

async function insert(data) {
  // # TODO: DEBE RETORNAR EL ID
  try {
    const query = await DriverTypeAssign.create(data);
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

exports.insert = insert;

/*
  get: (id_driver)=>{
    const query = `SELECT d.*
                   FROM driver_type_assign dt 
                   JOIN driver_type d ON d.id = dt.id_driver_type
                   WHERE id_driver = ('${id_driver}')`;
    return query;
  },
  */


