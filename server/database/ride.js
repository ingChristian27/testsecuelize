/*
* TODO: FUNCION selectByRide SE LLAMABA DESDE RIDE_DRIVER.
* VERIFICAR
* TODO: FUNCION selectByEntity SE AGREGA EN RIDE_DRIVER.
* VERIFICAR LLAMADO
* TODO: FUNCION lookingForDrivers SE AGREGA EN RIDE_DRIVER
* VERIFICAR
*/

const Ride = require("../models").ride;

async function selectByRide(id_ride) {
  try {
    const query = await Ride.find({ where: { id: id_ride } });
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

async function all() {
  try {
    const query = await Ride.findAll();
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

async function selectByUser(id_user, user_type) {
  try {
    let query;
    if (user_type == 1) {
      query = await Ride.find({ where: { id_driver: id_user } });
    } else {
      query = await Ride.find({ where: { id_passenger: id_user } });
    }
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

async function selectByPassenger(id_passenger) {
  try {
    const query = await Ride.find({
      where: { id_passenger: id_passenger, status: 1 }
    });
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

async function selectById(id_ride) {
  try {
    const query = await Ride.find({
      where: { id: id_ride, status: 1 }
    });
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

async function insert(data) {
  // # TODO: DEBE RETORNAR EL ID
  try {
    const query = await Ride.create(data);
    return query.dataValues;
  } catch (e) {
    console.log(e);
  }
}

async function update(data,id_ride) {
  try {
    const query = await Ride.update(data, {
      returning: true,
      where: { id: id_ride }
    });
    return query;
  } catch { }
}




exports.selectByRide = selectByRide;
exports.all = all;
exports.selectByUser = selectByUser;
exports.selectByPassenger = selectByPassenger;
exports.selectById = selectById;
exports.insert = insert;
exports.update = update;


  /*
  select: (id_user)=>{
     const query = `SELECT r.* 
                    FROM ride r 
                    INNER JOIN ride_driver rd ON rd.id_ride = r.id
                    WHERE r.id_user = ('${id_user}')
                    AND r.id_driver = rd.id_driver
                    AND rd.ride_status = -1 OR rd.ride_status = 1`;
                    
    return query;
  },
  */


  /*
  infoRideToPass: (id_ride_driver)=>{
    const query = `SELECT rd.response, rd.counteroffer, rd.id as id_ride_driver, r.* ,d.name, d.id as id_driver, d.name, d.email, d.phone, d.image, d.video
                  FROM ride_driver rd
                  JOIN ride r ON r.id = rd.id_ride
                  JOIN drivpass d ON d.id = rd.id_driver
                  WHERE rd.id = ('${id_ride_driver}')`;
                  
    return query;
  },
  */

  /*
  infoRideToDriver: (id_ride, id_driver)=>{
      const query = `SELECT r.*, rd.id as id_ride_driver, rd.response, rd.counteroffer, d.id as id_passenger, d.name, d.email, d.phone, d.image, d.video
                      FROM ride r
                      JOIN ride_driver rd ON rd.id_ride = r.id
                      JOIN drivpass d ON d.id = r.id_passenger
                      WHERE r.id = ('${id_ride}')
                      AND rd.id_driver =  ('${id_driver}')`;


                      
      return query;

  },
  */


  /*
  total_rides: ()=>{
    const query = `SELECT count(*)  AS rides FROM ride WHERE ride_status = 0`;
    return query;
  },
  */

  /*
  history_rides: (id_passenger)=>{
    const query=`SELECT DISTINCT ride.id, ride.id_driver, drivpass.name, ride.price, car_info.number, drivpass.image, 
    (SELECT AVG(rating) FROM valorations WHERE drivpass.id = valorations.id_drivpass) as rate,
    (SELECT id FROM drivpass WHERE favorite_driver.id_driver =  drivpass.id) as favorite_id
    FROM ride
    JOIN drivpass ON ride.id_driver = drivpass.id
    JOIN car_info ON ride.id_driver = car_info.id_user
    JOIN valorations ON ride.id_driver = valorations.id_drivpass
    LEFT JOIN favorite_driver ON drivpass.id = favorite_driver.id_driver
    WHERE ride.id_passenger = ('${id_passenger}')
    ORDER BY ride.id DESC
    LIMIT 10`;


    return query;
  },
  */

  /*
history_rides_favorite:  (id_passenger)=>{
    const query = `SELECT DISTINCT drivpass.id, drivpass.name, car_info.number, drivpass.image, 
                  (SELECT AVG(rating) FROM valorations WHERE drivpass.id = valorations.id_drivpass) as rate,
                  (SELECT id FROM drivpass WHERE favorite_driver.id_driver =  drivpass.id) as favorite_id
                  FROM drivpass
                  JOIN favorite_driver ON drivpass.id = favorite_driver.id_driver
                  JOIN car_info ON favorite_driver.id_driver = car_info.id_user
                  JOIN valorations ON favorite_driver.id_driver = valorations.id_drivpass
                  WHERE favorite_driver.id_passenger = ('${id_passenger}')
                  ORDER BY drivpass.id DESC
                  LIMIT 10`;
    return query;
  }
  */

