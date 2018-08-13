const express = require("express");
const router = express.Router();
const Database = require("../database/car_info");
router

  .get("/", async (req, res, next) => {
    try {
      const result = await Database.selectCar(1);
      console.log(result);
      res.json(result);
    } catch (e) {
      next(e);
    }
  })

  .post("/", async (req, res) => {
    try {
      console.log("Nueva consulta....");
      console.log(req.body.id);

      return res.status(200).send("OK");


      const data = {
        model: "renault",
        id_user: 1,
        year: "2017",
        make: "something",
        color: "blanco",
        plate: "123abs",
        status: 1
      };
      data = req.body;
      result = await Database.insert(data);
      console.log(result);
      res.json(result);
      res.json({ test: "test" });
    } catch (e) {
      return res.status(500).send({
        message: "No se ha podido agregar el elemento."
      });
    }
  })

  .get("/ver", async (req, res) => {
    try {
      console.log("entro a ver....");
      const query = await Database.getAll();
      console.log("================");
      console.log(query);
      res.json(query);
    } catch (e) {
      response = { message: "Ha ocurrido un error inesperado", err: e };
    }
  });

module.exports = router;

/**
 * car_info
 */
