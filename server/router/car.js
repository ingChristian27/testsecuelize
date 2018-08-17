const express = require("express");
const router = express.Router();
const Database = require("../database/car_info");
const DatabaseDrivpass = require("../database/drivpass");
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

  .post("/add/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const params = req.body;
      const drivpass = await DatabaseDrivpass.selectById(id);
      if (drivpass == null) return res.status(404).json({ details: "user not found" });

      const car = await Database.selectCar(id);
      if (car != null) return res.status(202).json({ details: "This user already have a car" });

      const exist_plate = await Database.selectPlate(params.number);
      if (exist_plate != null) return res.status(203).json({ details: "The plate already exists" });

      const parameters = {
        id_user: id,
        number: params.number,
        year: params.year,
        make: params.make,
        model: params.model,
        color: params.color,

        /* TODO: PARAMETROS FORZADOS (NO ESTABAN DEFINIDOS) */
        plate: params.number,
        status: 1,
      };

      const post = await Database.insert(parameters);
      return res.status(200).json({ success: true, insertId: post.id });

    } catch (e) {
      return res.status(500).send({
        message: "No se ha podido agregar el elemento."
      });
    }
  })

  .get("/info/:id", async (req, res) => {
    try {
      const id_user = req.params.id;
      const car = await Database.selectCar(id_user);
      if (car != null)
        return res.status(200).json({ success: true, car: car })
      return res.status(200).json({ success: false, message: "Car user doesn´t exist!" })

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
