const express = require("express");
const router = express.Router();
const Database = require("../database/drivpass");
router

  .get("/", async (req, res, next) => {
    try {
      res.json({ saludo: "hola mundo" });
    } catch (e) {}
  })

  .get("/add", async (req, res, next) => {
    try {
      const data = {
        model: "renault",
        id_user: 1,
        year: "2017",
        make: "something",
        model: "renault",
        color: "blanco",
        plate: "123abs",
        status: 1
      };
      const result = await Database.insert(data);
      console.log(result);
      res.json(result);
    } catch (e) {
      next(e);
    }
  })

  .get("/ver", function(request, response) {
    Car.findAll().then(result => {
      // #TODO: Si no trae datos, trae undefined
      response.json(result);
    });
  });

module.exports = router;
