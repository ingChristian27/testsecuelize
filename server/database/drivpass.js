const Drivpass = require("../models").drivpass;
const DrivpassUserType = require("../models").drivpass_user_type;
const BuyToken = require("../models").buytoken;
const SavedLocation = require("../models").saved_location;

async function selectByEmail(email) {
  try {
    const query = await Drivpass.find({ where: { email: email } });

    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }

  } catch (e) {
    console.log(e);
  }
}

async function selectByEmailAndPassword(email, password) {
  try {
    const query = await Drivpass.find({ where: { email: email, password: password } });

    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }

  } catch (e) {
    console.log(e);
  }
}

async function all() {
  try {
    const query = await Drivpass.findAll();
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
    const query = await Drivpass.find({ where: { id: delivery_id } });

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
    const query = await Drivpass.create(data);
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
      query = await Drivpass.find({ where: { id_driver: id_user } });
    } else {
      query = await Drivpass.find({ where: { id_user: id_user } });
    }
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}
async function selectByDriver(driver_id) {
  try {
    const query = await Drivpass.find({
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
    const query = await Drivpass.find({
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
async function update(data, id_delivery) {
  try {
    const query = await Drivpass.update(data, {
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



async function drivpass_user_type(id_user, id_profile) {
  try {
    const query = await DrivpassUserType.find({ where: { id_drivpass: id_user, user_type: id_profile } });

    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) { }
}

async function drivpass_user_type_addProfile(data) {
  try {
    const query = await DrivpassUserType.create(data);
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}

async function selectHistoryPayment(user_id) {
  try {

    const query = await BuyToken.find({ where: { user_id: user_id } });

    /*
      TODO: Campos, order y limit
      .field("payment_method_id")
      .field("n_tokes")
      .field("total")
      .field("payment_date")
      .where("user_id ="+user_id)
      .order("payment_date",false)
      .limit(5)
    */

    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }

  } catch (e) {
    console.log(e);
  }
}


async function getSavedLocation(user_id) {
  try {

    const query = await SavedLocation.find({ where: { user_id: user_id } });

    /*
      TODO: Campos, order y limit
        .field("id")
        .field("name")
        .field("latitud")
        .field("longitud")
        .field("description")
    */

    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }

  } catch (e) {
    console.log(e);
  }
}


async function insetSavedLocation(location) {
  try {

    const query = await SavedLocation.create(location);

    /*
      TODO: Campos
        .setFields(location)
    */

    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }

  } catch (e) {
    console.log(e);
  }
}

exports.selectByEmail = selectByEmail;
exports.all = all;
exports.selectById = selectById;
exports.insert = insert;
exports.selectByUser = selectByUser;
exports.selectByPassenger = selectByPassenger;
exports.update = update;
exports.selectByEmailAndPassword = selectByEmailAndPassword;
exports.drivpass_user_type = drivpass_user_type;
exports.drivpass_user_type_addProfile = drivpass_user_type_addProfile;
exports.selectHistoryPayment = selectHistoryPayment;
exports.getSavedLocation = getSavedLocation;
exports.insetSavedLocation = insetSavedLocation;

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