const Delivery = require("../models").delivery;

async function all() {
  try {
    const query = await Delivery.findAll();
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}

async function selectById(delivery_id) {
  try {
    const query = await Delivery.find({ where: { id: delivery_id } });
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}

async function selectByUser(id_user, user_type) {
  try {
    let query;
    if (user_type == 1) {
      query = await Delivery.findAll({ where: { id_driver: id_user } });
    } else {
      query = await Delivery.findAll({ where: { id_user: id_user } });
    }

    return query;

  } catch (e) {
    console.log(e);
  }
}

async function selectByDriver(driver_id) {
  try {
    const query = await Delivery.find({
      where: { id_driver: driver_id, status: 1 }
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

async function selectByPassenger(user_id) {
  try {
    const query = await Delivery.find({
      where: { id_user: user_id, status: 1 }
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
  try {
    const query = await Delivery.create(data);
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
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
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) { }
}

async function total_deliveries() {
  try {
    const query = await Delivery.find({ where: { delivery_status: 0 } });
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
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


