const Delivery = require("../models").delivery;

async function all() {
  try {
    const query = await Delivery.findAll();
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

async function selectById(delivery_id) {
  try {
    const query = await Delivery.find({ where: { id: delivery_id } });
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

async function selectByUser(id_user, user_type) {
  try {
    let query;
    if (user_type == 1) {
      query = await Delivery.find({ where: { id_driver: id_user } });
    } else {
      query = await Delivery.find({ where: { id_user: id_user } });
    }
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

async function selectByDriver(driver_id) {
  try {
    const query = await Delivery.find({
      where: { id_driver: driver_id, status: 1 }
    });
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

async function selectByPassenger(user_id) {
  try {
    const query = await Delivery.find({
      where: { id_user: user_id, status: 1 }
    });
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

async function insert(data) {
  // # TODO: DEBE RETORNAR EL ID
  try {
    const query = await Delivery.create(data);
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

async function update(data, id_delivery) {
  try {
    const query = await Delivery.update(data, {
      returning: true,
      where: { id: id_delivery }
    });
    return query;
  } catch {}
}

async function total_deliveries() {
  try {
    const query = await Delivery.find({ where: { delivery_status: 0 } });
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

exports.all = all;
exports.selectById = selectById;
exports.selectByUser = selectByUser;
exports.selectByDriver = selectByDriver;
exports.selectByPassenger = selectByPassenger;
exports.insert = insert;
exports.update = update;
exports.total_deliveries = total_deliveries;




  /*
  * TODO: SE DEBE INSERTAR EN DELIVERY_DRIVER?
  * NO TIENE SENTIDO ESTA FUNCION
  * ES NOMBRE DE BUSCANDO Y ESTA INSERTANDO
  * NO RECIBE PARAMETROS E INSERTA DATA
  lookingForDrivers: () => {
    return squel.insert().into("delivery_driver").setFieldsRows(data).toString();    
  },
  */

  /*
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


