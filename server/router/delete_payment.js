const express = require("express");
const router = express.Router();
const Database = require("../database/countries");

router

    .post("/", async (req, res) => {
        try {
            return res.status(200).json({success:"DELET PAYMENT"})

        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })


module.exports = router;
