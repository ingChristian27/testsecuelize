const express = require("express");
const router = express.Router();
const Database = require("../database/ride");
const DatabaseRideDriver = require("../database/ride_driver");

router

    .post("/add", async (req, res) => {
        try {
            const params = req.body;
            params.id_driver_type = 1;
            const ride = await Database.selectByPassenger(params.id_passenger);
            //    if(ride.rows.length > 0)  return res.status(200).json({details: "You already have a ride in progress!"}); 
            const post = await Database.insert(params);
            const rideResult = await Database.selectById(post.id);

            return res.status(200).json({ success: true, Data: rideResult.rows[0], currentDate: moment(new Date()) });

        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })

    .put("/counteroffer/:id", async (req, res) => {
        try {
            const id_ride = req.params.id;
            const params = req.body;
            const ride = await Database.selectByRide(id_ride);
            if (ride == null) return res.status(200).json({ details: "This ride doesn´t exist!" });
            if (ride.accept_counteroffer == null) return res.status(200).json({ details: "This ride doesn´t accept counteroffer!" });

            const ride_driver = await DatabaseRideDriver.verify(params.id_driver, id_ride);
            if (ride_driver == null) return res.status(404).json({ error: "You don´t have this ride assign!" });
            const parameters = {
                id_ride: ride_driver.id_ride,
                id_driver: ride_driver.id_driver,
                response: params.response,
                counteroffer: params.counteroffer
            };

            const identifier = ride_driver.id;

            const put = await DatabaseRideDriver.update(parameters, identifier);
            return res.status(200).json({ success: true, details: "counteroffer created!" });

        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })

    .put("/edit/:id", async (req, res) => {
        try {
            const id_ride = req.params.id;
            const params = req.body;

            const ride = await Database.selectById(id_ride);
            if (ride == null) return res.status(200).json({ details: "ride doesn´t exist or is unavailable" });

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
                accept_counteroffer: params.accept_counteroffer || ride.accept_counteroffer,
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
    })

    .get("/history/:id", async (req, res) => {
        try {
            const id_passenger = req.params.id
            const history = await Database.history_rides(id_passenger)
            if (history == null) return res.status(200).json({ success: false, message: "No history rides", rides: history.rows });
            return res.status(200).json({ success: true, rides: history });
        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })

    .get("/history_favorite/:id", async (req, res) => {
        try {
            const id_passenger = req.params.id
            const history = Database.history_rides_favorite(id_passenger)
            if (history == null) return res.status(200).json({ success: false, message: "No history favorite rides", rides: history.rows });
            return res.status(200).json({ success: true, rides: history });
        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })



module.exports = router;