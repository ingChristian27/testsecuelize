const express = require("express");
const router = express.Router();

router

    .get("/", async (req, res) => {
        try {

            return res.status(200).json({ clientToken: "TOKEN123" });

        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })

    .get("/:id", async (req, res) => {
        try {

            return res.status(200).json({ clientToken: "TOKEN123-" + request.body.id });

        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })



module.exports = router;
