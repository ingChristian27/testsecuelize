const Drivpass = require("../models/drivpass");

async function selectByEmail(email) {
  try {
    const query = await Drivpass.find({ where: { email: email } });
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}
async function all() {
  try {
    const query = await Drivpass.findAll();
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}
async function selectById(delivery_id) {
  try {
    const query = await Drivpass.find({ where: { id: delivery_id } });
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}
async function insert(table, data) {
  // # TODO: RETURNA ID
  try {
    const query = await Drivpass.create(data);
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

exports.selectByEmail = selectByEmail;
exports.all = all;
exports.selectById = selectById;

/**
 * const squel = require("squel");

module.exports = {
 

  selectByUser: (id_user, user_type) =>{
    var query;
    if(user_type == 1){
       query = `SELECT * FROM delivery WHERE id_driver = ('${id_user}')`;
    }else{
       query = `SELECT * FROM delivery WHERE id_user = ('${id_user}')`;
    }
    return query;
  },
  selectByDriver: (driver_id)=>{
    const query = `SELECT * FROM delivery WHERE id_driver = ('${driver_id}') AND status = 1`;
    return query;
  },
  selectByPassenger: (user_id) =>{
    const query = `SELECT * FROM delivery WHERE id_user = ('${user_id}') AND status = 1`;
    return query;
  },
  insert: (table,data)  => {
    const squelPostgres = squel.useFlavour('postgres');
    return squelPostgres.insert().into(table).setFields(data).returning('id').toString();
  },
  update: (table,data,id_delivery)  => {
   	return squel.update().table(table).setFields(data).where("id =" + id_delivery).toString();
  },
  total_deliveries: ()=>{
    const query = `SELECT count(*)  AS deliveries FROM delivery WHERE delivery_status = 0`;
    return query;
  },
  lookingForDrivers: () => {
    return squel.insert().into("delivery_driver").setFieldsRows(data).toString();    
  },
  infoDeliveryToDriver: (id_delivery, id_driver)=>{
    const query = `SELECT d.*, dd.id as id_delivery_driver, dd.response, dd.counteroffer, dv.id as id_passenger dv.name, dv.email. dv.phone, dv.image, dv.video
                    FROM delivery d
                    JOIN delivery_driver dd ON dd.id_delivery = d.id
                    JOIN drivpass dv ON dv.id = d.id_user
                    WHERE d.id = ('${id_delivery}')
                    AND rd.id_driver =  ('${id_driver}')`;

    return query;

  }
}

 */
