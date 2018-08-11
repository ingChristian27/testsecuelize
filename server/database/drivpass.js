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
  // # TODO: DEBE RETORNAR EL ID
  try {
    const query = await Drivpass.create(data);
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

async function selectByUser(id_user, user_type) {
  try {
    let query;
    if (user_type == 1) {
      query = await Drivpass.find({ where: { id_driver: id_user } });
    } else {
      query = await Drivpass.find({ where: { id_user: id_user } });
    }
    return query;
  } catch (e) {
    console.log(e);
  }
}
async function selectByDriver(driver_id) {
  try {
    const query = await Drivpass.find({
      where: { id_driver: driver_id, status: 1 }
    });
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

async function selectByPassenger(user_id) {
  try {
    const query = await Drivpass.find({
      where: { id_user: user_id, status: 1 }
    });
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}
async function update(data, id_delivery) {
  try {
    const query = await Drivpass.update(data, {
      returning: true,
      where: { id: id_delivery }
    });
    return query;
  } catch {}
}

exports.selectByEmail = selectByEmail;
exports.all = all;
exports.selectById = selectById;
exports.insert = insert;
exports.selectByUser = selectByUser;
exports.selectByPassenger = selectByPassenger;
exports.update = update;

/*
  async function total_deliveries(){
      :TODO: Al parecer está función corresponde a otra tabla completamente diferente con el modelo
    const query = `SELECT count(*)  AS deliveries FROM delivery WHERE delivery_status = 0`;
    return query;
  }
    

  async function lookingForDrivers(){
      :TODO: Al parecer está función corresponde a otra tabla completamente diferente con el modelo
    return squel.insert().into("delivery_driver").setFieldsRows(data).toString();
  }

    infoDeliveryToDriver: (id_delivery, id_driver)=>{
    const query = `SELECT d.*, dd.id as id_delivery_driver, dd.response, dd.counteroffer, dv.id as id_passenger dv.name, dv.email. dv.phone, dv.image, dv.video
                    FROM delivery d
                    JOIN delivery_driver dd ON dd.id_delivery = d.id
                    JOIN drivpass dv ON dv.id = d.id_user
                    WHERE d.id = ('${id_delivery}')
                    AND rd.id_driver =  ('${id_driver}')`;

    return query;

  }
*/
