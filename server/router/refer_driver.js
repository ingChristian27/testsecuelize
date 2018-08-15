const express = require("express");
const router = express.Router();
const DatabaseDrivpass = require("../database/drivpass");
const DatabaseCarInfo = require("../database/car_info");

router

    .post("/", async (req, res) => {
        try {
            const { plate, id_driver } = req.body
            const user_available = await DatabaseDrivpass.drivpass_user_type(id_driver, 1);
            if (user_available == null) return res.status(200).json({ success: false, message: "User is not a driver!" })

            const car = await DatabaseCarInfo.selectPlate(plate);
            const id_refer = car.id_user;
            if (car == null) return res.status(200).json({ success: false, message: "Code driver no found!" });
            //        const refer = await connection.query(queries.referById(id_driver,id_refer));
            //      if(refer.rows.length>0)
            //    return res.status(200).json({success: false,message:"You already have a driver code!"});  

            const post = await DatabaseDrivpass.insert(refer, { id_driver: id_driver, id_driver_refer: id_refer });
            return res.status(200).json({ success: true, message: "Code driver added" });
        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })

module.exports = router;
