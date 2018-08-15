const express = require("express");
const router = express.Router();
const Database = require("../database/favorite_driver");
const DatabaseCarInfo = require("../database/car_info");

router

    .post("/add", async (req, res) => {
        try {
            const { id_passenger, id_driver } = req.body;
            const exists = await Database.selectById(id_passenger, id_driver);
            if (exists != null) return res.status(202).json({ details: "You already have this driver as a favorite" });

            const post = await Database.insert({ id_passenger: id_passenger, id_driver: id_driver });
            return res.status(200).json({ success: true, insertId: post.id });
        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })

    .post("/search", async (req, res) => {
        try {
            const { id_passenger, id_driver } = req.body;
            const exists = await Database.selectById(id_passenger, id_driver);
            if (exists == null) return res.status(200).json({ success: false, message: "You don´t have this driver in your favorit list!" });
            return res.status(200).json({ success: true, message: "You already have this driver as a favorite" });

        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })

    .post("/add_plate", async (req, res) => {
        try {

            const { plate, id_passenger } = req.body
            const car = await DatabaseCarInfo.selectPlate(plate);
            if (car == null) return res.status(200).json({ success: false, message: "Car do not exist" })

            const favorite = await Database.selectById(id_passenger, car.id_user);
            if (favorite != null)
                return res.status(200).json({ success: false, message: "You already have this driver as a favorite" });

            const post = await Database.insert({ id_passenger: id_passenger, id_driver: car.id_user });
            return res.status(200).json({ success: true, message: "Favorite driver added" });

        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })

    .post("/delete", async (req, res) => {
        try {

            const { id_passenger, id_driver } = req.body;
            const exists = await Database.selectById(id_passenger, id_driver);
            if (exists == null) return res.status(204).json({ details: "You don´t have this driver in your favorit list!" });

            const favorite = Database.deleteData(table, id_passenger, id_driver);
            return res.status(200).json({ success: true });
        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })

module.exports = router;
