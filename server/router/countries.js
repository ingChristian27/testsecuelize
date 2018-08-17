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

            for (const country of countries) {
                const id = country.dataValues.id;
                const states = await DatabaseState.selectByCountry(id);

                if (states != null) {               
                    /*
                    for (var j in states) {
                       console.log("THIS STATE",states[j].dataValues)
                    }
                    */
                    for (const state of states) {
                        const id_state = state.dataValues.id;
                        const cities = await DatabaseCity.selectByState(id_state);
                        to_send.push({ country: country, description: { state: state, cities: cities } });
                    }
                } else {
                    const cities = await DatabaseCity.selectByCountry(id);
                    to_send.push({ country: country, cities: cities });
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
