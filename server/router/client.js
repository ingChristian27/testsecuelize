const express = require("express");
const router = express.Router();

router

    .get("/", async (req, res) => {
        try {

            return res.status(200).json({ succes:true,customer:"CUSTOMER" });

        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })


module.exports = router;
