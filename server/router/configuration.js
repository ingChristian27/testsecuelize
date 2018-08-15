const express = require("express");
const router = express.Router();
const DatabaseCarMarks = require("../database/car_mark");

router

    .get("/", async (req, res) => {
        try {
            const car_marks = await DatabaseCarMarks.getAll();
            if (car_marks == null) return res.status(401).json({ message: "I don`t have car marks" });

            return res.status(200).json(car_marks)

        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })



module.exports = router;
