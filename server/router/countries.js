const express = require("express");
const router = express.Router();
const Database = require("../database/countries");
const DatabaseState = require("../database/state");
const DatabaseCity = require("../database/city");

router

    .get("/", async (req, res) => {
        try {
            const countries = await Database.getAll();
            var to_send = [];
            if (countries == null) return res.status(404).json([]);
            for (var i in countries.rows) {
                const id = countries.id;
                const states = await DatabaseState.selectByCountry(id);
                if (states.length > 0) {
                    for (var j in states) {
                        const id_state = states[j].id;
                        const cities = await DatabaseCity.selectByState(id_state);
                        to_send.push({ country: countries[i], description: { state: states[i], cities: cities } });
                    }
                } else {
                    const cities = await DatabaseCity.selectByCountry(id);
                    to_send.push({ country: countries[i], cities: cities });
                }
            }
            return res.status(200).json(to_send);

        } catch (e) {
            console.log(e);
            return res.status(500).send({
                message: "{'error':'Error inesperado. '}"
            });
        }
    })



module.exports = router;
