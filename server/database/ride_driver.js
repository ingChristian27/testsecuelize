/*
* TODO: FUNCION selectByRide SE AGREGA EN RIDE.
* VERIFICAR LLAMADO
* TODO: FUNCION selectByEntity SE LLAMABA DESDE RIDE
* VERIFICAR
* TODO: FUNCION lookingForDrivers SE LLAMABA DESDE RIDE
* VERIFICAR
*/

const RideDriver = require("../models").ride_driver;

async function selectRideDriver(id_driver_ride) {
  try {
    const query = await RideDriver.find({ where: { id: id_driver_ride } });
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

async function verify(id_driver, id_ride) {
  try {
    const query = await RideDriver.find({
      where: { id_driver: id_driver, id_ride: id_ride }
    });
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

async function update(data, id_driver_ride) {
  try {
    const query = await RideDriver.update(data, {
      returning: true,
      where: { id: id_driver_ride }
    });
    return query;
  } catch { }
}

async function selectByEntity(id_ride) {
  //TODO: DEBE DEVOLVER id_driver (Verificar attributes)
  try {
    const query = await RideDriver.find({
      where: { id_ride: id_ride },
      attributes: ['id_driver']
    });
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

async function lookingForDrivers(data) {
  // # TODO: NO RETORNA ID. REVISAR FUNCION, NOMBRE NO CONCUERDA CON INSERT
  try {
    const query = await RideDriver.create(data);
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

exports.selectRideDriver = selectRideDriver;
exports.verify = verify;
exports.update = update;
exports.selectByEntity = selectByEntity;
exports.lookingForDrivers = lookingForDrivers;






  /*
  selectByDriver: (id_driver)=> {
    const query= `SELECT rd.response, rd.counteroffer, rd.id as id_ride_driver, rd.time_send , r.*, d.name, d.phone, d.email, d.image, d.video
                  FROM ride_driver rd
                  INNER JOIN ride r ON rd.id_ride = r.id
                  INNER JOIN drivpass d ON d.id = r.id_passenger
                  WHERE rd.id_driver = ('${id_driver}')
                  AND r.id_driver is null
                  AND r.status = 1`;
    return query;

  },
  */

  /*
  selectByPassenger: (id_user, id_ride)=> {
    const query= `SELECT rd.response, rd.counteroffer, rd.id as id_ride_driver, rd.time_send , r.*, d.name, d.phone, d.email, d.image, d.video
                  FROM ride_driver rd
                  INNER JOIN ride r ON r.id = rd.id_ride
                  INNER JOIN drivpass d ON d.id = rd.id_driver
                  WHERE rd.id_ride = ('${id_ride}')
                  AND rd.response = 1
                  OR rd.response = 0
                  AND r.id_passenger = ('${id_user}')
                  AND r.id_driver is null
                  AND r.status = 1`;

                  
    
                  
      return query;

  },
  */
