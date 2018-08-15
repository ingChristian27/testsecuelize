const express = require("express");
const router = express.Router();
const Database = require("../database/drivpass");

router

    .get("/:id", async (req, res) => {
        try {
            const user_id = req.params.id
            const drivpass = await Database.selectById(user_id);
            if (drivpass == null) return res.status(200).json({ success: false, message: "User doesn´t exist" });

            const savedLocation = await Database.getSavedLocation(user_id);


            return res.status(200).json({ saved_location: savedLocation.rows, success: true })
        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })

    .post("/", async (req, res) => {
        try {
            const params = req.body
            const drivpass = await Database.selectById(params.user_id);
            if (drivpass == null) return res.status(200).json({ success: false, message: "User doesn´t exist" });
            
            const savedLocation = await Database.insetSavedLocation(params);

            return res.status(200).json({ success: true, message: "saved location succes!" })
        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })

module.exports = router;
