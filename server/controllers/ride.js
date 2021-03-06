const Database = require("../database/ride");
const DatabaseRideDriver = require("../database/ride_driver");
const DatabaseDrivpass = require("../database/drivpass");
const DatabaseCarInfo = require("../database/car_info");
const DatabaseModelCar = require("../database/model_car");
const DatabaseColorCar = require("../database/color_car");
const DatabaseValorations = require("../database/valorations");

const moment = require("moment");

async function add(req, res) {
  try {
    const params = req.body;
    params.id_driver_type = 1;
    params.status = 1;
    params.ride_status = -1;
    //const ride = await Database.selectByPassenger(params.id_passenger);

    //    if(ride.rows.length > 0)  return res.status(200).json({details: "You already have a ride in progress!"});
    const post = await Database.insert(params);
    console.log("------------------------------------");
    console.log("post", post);
    console.log("------------------------------------");
    //const rideResult = await Database.selectById(post.id);

    return res.status(200).json({
      success: true,
      Data: post,
      currentDate: moment(new Date())
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}

async function counteroffer(req, res) {
  try {
    const id_ride = req.params.id;
    const params = req.body;
    const ride = await Database.selectByRide(id_ride);
    if (ride == null)
      return res.status(200).json({ details: "This ride doesn´t exist!" });
    if (ride.accept_counteroffer == null)
      return res
        .status(200)
        .json({ details: "This ride doesn´t accept counteroffer!" });

    const ride_driver = await DatabaseRideDriver.verify(
      params.id_driver,
      id_ride
    );
    if (ride_driver == null)
      return res
        .status(404)
        .json({ error: "You don´t have this ride assign!" });
    const parameters = {
      id_ride: ride_driver.id_ride,
      id_driver: ride_driver.id_driver,
      response: params.response,
      counteroffer: params.counteroffer
    };

    const identifier = ride_driver.id;

    const put = await DatabaseRideDriver.update(parameters, identifier);
    return res
      .status(200)
      .json({ success: true, details: "counteroffer created!" });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}

async function edit(req, res) {
  try {
    const id_ride = req.params.id;
    const params = req.body;

    const ride = await Database.selectById(id_ride);
    if (ride == null)
      return res
        .status(200)
        .json({ details: "ride doesn´t exist or is unavailable" });

    const parameters = {
      id_passenger: params.id_passenger || ride.id_passenger,
      id_driver_type: params.id_driver_type || ride.id_driver_type,
      id_driver: params.id_driver || ride.id_driver,
      location_start: params.location_start || ride.location_start,
      location_end: params.location_end || ride.location_end,
      latitude_start: params.latitude_start || ride.latitude_start,
      longitude_start: params.longitude_start || ride.longitude_start,
      latitude_end: params.latitude_end || ride.latitude_end,
      longitude_end: params.longitude_end || ride.longitude_end,
      price: params.price || ride.price,
      accept_counteroffer:
        params.accept_counteroffer || ride.accept_counteroffer,
      ride_status: params.ride_status || ride.ride_status,
      status: params.status || ride.status
    };

    if (parameters.id_driver && ride.id_driver == null) {
      //desactiva en locations al conductor, deshabilita el estado de ride_status de todos los que no fueron asignados
      //const ride_process = await rideHelper.ride_process(parameters.id_passenger, parameters.id_driver, id_ride);
      //const start_conversation = rideHelper.start_conversation(id_ride);
    }

    if (params.ride_status == 0) {
      //notificar usuario que el viaje termino
      //const notifyUser = await rideHelper.notify(parameters.id_passenger);
      //finalizar conversacion para el id de ride, status de conversacion = 1
      //const finish_conversation = rideHelper.finish_conversation(id_ride);
      //volver a habilitar driver
      //const habilitate_driver = await connection.query(locations.habilitate_driver(), [parameters.id_driver]);
    }

    const put = await Database.update(parameters, id_ride);
    return res.status(200).json({ success: true });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}

async function history(req, res) {
  try {
    const id_passenger = req.params.id;

    var rides = await Database.selectByPassenger(id_passenger);

    //var drivpass = await DatabaseDrivpass.selectById(ride.id_driver);

    //var car_info = await DatabaseCarInfo.selectCar(ride.id_driver);

    var history = [];
    for (const ride of rides) {

      const user_type =2;
      const rates = await DatabaseValorations.select(ride.dataValues.drivpass.id,user_type);
      //TODO AGREGAR RELACION HASMANY VALORATIONS EN DRIVPASS?
      //TODO REVISAR SI SE PUEDE AGREGAR LA RELACION PORQUE TENDRIA QUE SER AL DRIVPASSID Y AL USERID DEPENDIENTO DEL TIPO DE USUARIO

      var rateAvg = 0;
      for (const rate of rates) {
        rateAvg += rate.dataValues.rating;
      }

      history.push({
        id: ride.dataValues.id,
        location_start: ride.dataValues.location_start,
        location_end: ride.dataValues.location_end,
        ride_date: ride.dataValues.createdAt,
        id_driver: ride.dataValues.id_driver,
        name: ride.dataValues.drivpass.name,
        price: ride.dataValues.price,
        number: ride.dataValues.car_info.number,
        image: ride.dataValues.drivpass.image,
        rate: rateAvg, //(SELECT AVG(rating) FROM valorations WHERE drivpass.id = valorations.id_drivpass) as rate,
        favorite_id: null //(SELECT id FROM drivpasses WHERE favorite_driver.id_driver =  drivpass.id) as favorite_id
      });
    }

    if (history == null || history.length == 0)
      return res.status(200).json({
        success: false,
        message: "No history rides",
        rides: history
      });
    return res.status(200).json({ success: true, rides: history });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}

async function history_favorite(req, res) {
  try {
    const id_passenger = req.params.id;
    const history = Database.history_rides_favorite(id_passenger);
    if (history == null)
      return res.status(200).json({
        success: false,
        message: "No history favorite rides",
        rides: history.rows
      });
    return res.status(200).json({ success: true, rides: history });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}

async function questions(req, res) {
  try {
    const id_ride = req.params.id;
    const ride = await Database.selectByRide(id_ride);
    if (ride == null) {
      return res.status(404).json({
        success: false,
        message: "No rides for ride id " + id_ride
      });
    }

    const car_info = await DatabaseCarInfo.selectCar(ride.id_driver);

    if (car_info == null) {
      return res.status(404).json({
        success: false,
        message: "No Car Info for driver " + ride.id_driver
      });
    }

    const model = await DatabaseModelCar.getById(car_info.model);

    if (model == null) {
      return res.status(404).json({
        success: false,
        message: "No Model for model Id " + car_info.model
      });
    }

    const color = await DatabaseColorCar.getById(car_info.color);

    if (color == null) {
      return res.status(404).json({
        success: false,
        message: "No Color for color Id " + car_info.color
      });
    }

    question =
      "Is this car a " +
      color.name +
      " " +
      model.car_mark.name +
      " " +
      model.name +
      "?";

    return res.status(200).json({ success: true, question });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}
/**
 * state: 1 = location start, 2 = location end
 * @param {location, state, id} req
 * @param {*} res
 */
async function putLocation(req, res) {
  try {
    console.log(req.body.stateLocation);
    const location = req.body.location;
    const stateLocation = req.body.stateLocation;
    const idRide = req.body.id;

    if (stateLocation != 1 && stateLocation != 2) {
      return res.status(404).json({
        success: false,
        message: "StateLocation no coincide con los parametros aceptados."
      });
    }
    if (stateLocation == 1) {
      let data = { location_start: location };
      console.log(data);
      await Database.update(data, idRide);
    } else {
      let data = { location_end: location };
      await Database.update(data, idRide);
    }

    return res
      .status(200)
      .json({ message: "La respuesta ha sido modificada con éxito." });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}

exports.add = add;
exports.counteroffer = counteroffer;
exports.edit = edit;
exports.history = history;
exports.history_favorite = history_favorite;
exports.questions = questions;
exports.putLocation = putLocation;
