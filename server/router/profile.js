const express = require("express");
const router = express.Router();
const DatabaseDrivpass= require("../database/countries");
const DatabaseLocation= require("../database/location");

router

    .post("/verify", async (req, res) => {
        try {
            const {id_user, id_profile} = req.body;
            const verify = await DatabaseDrivpass.drivpass_user_type(id_user, id_profile);
            if(verify == null) return res.status(200).json({profile: false, message: "You dont have this profile assigned!"});
            const updateUserType = await DatabaseLocation.update({"user_type":id_profile},id_user);
            return res.status(200).json({profile: true, message: "success"});

        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })

module.exports = router;
