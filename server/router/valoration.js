const express = require("express");
const router = express.Router();
const Database = require("../database/valorations");
const DatabaseDrivpass = require("../database/drivpass");

router

    .post("/add", async (req, res) => {
        try {
            const params = req.body;
            const valoration = await Database.insert(params);
            return res.status(200).json({ success: true, message: "Valoration created!", insertId: valoration.id });
        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })

    .get("/:id/:type", async (req, res) => {
        try {
            const id_drivpass = parseInt(req.params.id);
            const user_type = parseInt(req.params.type);
            const valoration = await Database.select(id_drivpass, user_type);
            const user = await DatabaseDrivpass.selectById(id_drivpass);
            var acu = 0;
            var val = 0;
            if (valoration == null) {
                val = 0.0;
            } else {
                for (var i in valoration) {
                    acu += parseFloat(valoration[i].rating);
                }
                val = acu / valoration.rows.length;
            }

            return res.status(200).json({ actual_valoration: val, user: user, valorations: valoration });

        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })


module.exports = router;
