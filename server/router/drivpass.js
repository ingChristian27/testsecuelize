const express = require("express");
const router = express.Router();
const Database = require("../database/drivpass");
const DatabaseRide = require("../database/ride");
const DatabaseDelivery = require("../database/delivery");
const DatabaseLocation =  require("../database/locations");
router

  .get("/", async (req, res, next) => {
    try {
      res.json({ saludo: "hola mundo" });
    } catch (e) { }
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

  .post("/add", async (req, res, next) => {
    try {

      const params = req.body;
      params.status_profile = 1;

      const drivpass = await Database.selectByEmail(params.email);
      console.log(drivpass)
      if (drivpass != null) return res.status(203).json({ message: "This email is already registered" });



      const post = await Database.insert(params);

      const access_token = "TEST123"
      return res.status(200).json({ success: true, message: "User created!", insertId: post.id, access_token });

    } catch (e) {
      next(e);
    }
  })

  .post("/profile", async (req, res, next) => {
    try {

      const { id_user, id_profile } = req.body;
      const get = await Database.drivpass_user_type(id_user, id_profile);
      if (get != null) return res.status(200).json({ success: false, message: "You already have this user profile registered!" });
      const post = await Database.drivpass_user_type_addProfile({ id_drivpass: id_user, user_type: id_profile });
      return res.status(200).json({ success: true, message: "Profile created!" });

    } catch (e) {
      next(e);
    }
  })

  .get("/:id", async (req, res, next) => {
    try {
      
      const user_type = req.params.id; //1 driver, 2 passenger

      var acu = 0;
      var val = 0;
      var location = {};
      const id_drivpass = 1;
      const drivpass = await Database.selectById(id_drivpass);
      if (drivpass == null) return res.status(200).json({});
      drivpass.auth_sms = 1;
      drivpass.reg_id = 1;
      drivpass.status = 2;

      const id_city = drivpass.city;
      const rides = await DatabaseRide.selectByUser(id_drivpass, user_type);
      const deliveries = await DatabaseDelivery.selectByUser(id_drivpass, user_type);
      //const valoration = await connection.query(queries_valoration.select(id_drivpass, user_type));
      const valoration = null;
      var actual_location = await DatabaseLocation.selectById(id_drivpass);
      if (actual_location == 0) { actual_location = {}; } else { actual_location = actual_location }
      if (valoration == null) {
        val = 0.0;
      } else {
        for (var i in valoration.rows) {
          acu += parseFloat(valoration.rows[i].rating);
        }
        val = acu / valoration.rows.length;
      }

      //const get_city = await connection.query(`SELECT name, id_country, id_state FROM cities WHERE id = $1 LIMIT 1`, [id_city]);
      //console.log("get_city", get_city.rows[0])
      //const id_country = get_city.rows[0].id_country;
      //const id_state = get_city.rows[0].id_state;
      //const get_country = await connection.query(`SELECT name, indicative, short_name FROM countries WHERE id = $1 LIMIT 1`, [id_country]);
      //console.log("id_state " + id_state)
      const id_state = null;
      if (id_state == null || id_state == undefined || id_state == "") {
        location = {
          country: 'Dumy_Colombia',
          short_name: 'Dumy_Colombia',
          indicative: '57',
          state: "N/A",
          city: 'Dumy_Cartagena'
        };
      }

      let total_rides = 0;
      if(rides != null){
        total_rides = rides.length;
      }

      let total_deliveries = 0;
      if(deliveries != null){
        total_deliveries = deliveries.length;
      }

      let total_valorations = 0;
      if(valoration != null){
        total_valorations = valoration.length;
      }

      return res.status(200).json({
        user: drivpass,
        location: location,
        rides: rides,
        deliveries: deliveries,
        valorations: valoration,
        current_location: actual_location,
        current_valoration: val,
        total_rides: total_rides,
        total_deliveries: total_deliveries,
        total_valorations: total_valorations
      });

    } catch (e) { 
      console.log(e)
    }
  })

  .get("/ver", function (request, response) {
    Car.findAll().then(result => {
      // #TODO: Si no trae datos, trae undefined
      response.json(result);
    });
  });

module.exports = router;
