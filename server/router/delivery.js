const express = require("express");
const router = express.Router();
const Database = require("../database/delivery");

const moment = require('moment');

router

    .post("/add", async (req, res) => {
        try {

            //tener en cuenta insert id, facilita el proceso de asignacion de drivers
            const params = req.body;
            const delivery = await Database.selectById(params.id_user);
            //        if(delivery.rows.length > 0) return res.status(200).json({details: "You already have a delivery in progress!"}); 
            
            const deliveryResult = await Database.insert( params);

            /*  const assign = await deliveryHelper.send(params.latitude_start, params.longitude_start);
            if(assign == 0) return res.status(500).json({details: "something went wrong, cannot post delivery"});
            if(assign == -1) return res.status(200).json({details: "There are no drivers availables!"});*/

            return res.status(200).json({ success: true, Delivery: deliveryResult, currentDate: moment(new Date()) });


        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })




module.exports = router;
