const Database = require("../database/drivpass");
const DatabaseRide = require("../database/ride");
const DatabaseDelivery = require("../database/delivery");
const DatabaseLocation = require("../database/location");
const DatabaseValoration = require("../database/valorations");
const DatabaseCity = require("../database/city"); 
const DatabaseCountry = require("../database/countries"); 
const DatabaseState = require("../database/state"); 

var jwt = require("jwt-simple");
var cfg = require("../config/passport");
const bcrypt = require("bcrypt-nodejs");

var auth = require("../config/auth.js")();

async function add(req, res) {
  try {
    const params = req.body;
    params.status_profile = 1;

    params.password = bcrypt.hashSync(params.password, bcrypt.genSaltSync(8));

    console.log(params.password);

    const drivpass = await Database.selectByEmail(params.email);
    console.log(drivpass);
    if (drivpass != null) {
      return res
        .status(203)
        .json({ message: "This email is already registered" });
    }

    const post = await Database.insert(params);

    var payload = {
      email: post.email
    };
    const access_token = jwt.encode(payload, cfg.jwtSecret);

    return res.status(200).json({
      success: true,
      message: "User created!",
      insertId: post.id,
      access_token
    });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: " ha ocurrido un error inesperado", err: e });
  }
}

async function profile(req, res) {
  try {
    const { id_user, id_profile } = req.body;
    const get = await Database.drivpass_user_type(id_user, id_profile);
    if (get != null)
      return res.status(200).json({
        success: false,
        message: "You already have this user profile registered!"
      });
    const post = await Database.drivpass_user_type_addProfile({
      id_drivpass: id_user,
      user_type: id_profile
    });
    return res.status(200).json({ success: true, message: "Profile created!" });
  } catch (e) {
    res
      .status(500)
      .json({ message: " ha ocurrido un error inesperado", err: e });
  }
}

async function getId(req, res) {
  try {
    console.log("IN");
    const user_type = req.params.id; //1 driver, 2 passenger
    const id_drivpass = auth.getDecodeToken().id;

    var acu = 0;
    var val = 0;
    var location = {};

    const drivpass = await Database.selectById(id_drivpass);

    if (drivpass == null) return res.status(200).json({});

    drivpass.auth_sms = 1;
    drivpass.reg_id = 1;
    drivpass.status = 2;

    const id_city = drivpass.city;
    const rides = await DatabaseRide.selectByUser(id_drivpass, user_type);
    const deliveries = await DatabaseDelivery.selectByUser(id_drivpass, user_type);
    const valoration = await DatabaseValoration.select(id_drivpass, user_type); //TODO JOIN (Original)
    let valorationsJoin = [];
    //const valoration = null;
    var actual_location = await DatabaseLocation.selectById(id_drivpass);
    if (actual_location == 0) {
      actual_location = {};
    } else {
      actual_location = actual_location;
    }
    if (valoration == null || valoration.length == 0) {
      val = 0.0;
    } else {

      for (let i in valoration) {
        acu += parseFloat(valoration[i].rating);

        //BUSCAMOS UIUSARIOS FALTANTES DEL JOIN(NAME, IMAGE)
        const user = await Database.selectById(valoration[i].id_user);
        var userName = "";
        var userImage = "";
        if(user != null){
          userName = user.name;
          userImage = user.image;
        }

        //SETEAMOS DATOS FALTANTES DEL JOIN TODO QUITAR O CORREGIR CON JOIN
        valorationsJoin[i] = {
          "id": valoration[i].id,
          "id_user": valoration[i].id_user,
          "id_drivpass": valoration[i].id_drivpass,
          "commentary": valoration[i].commentary,
          "description": valoration[i].description,
          "type": valoration[i].type,
          "time_send": valoration[i].time_send,
          "rating": valoration[i].rating,
          "name": userName,
          "image": userImage
        }
      }
      val = acu / valoration.length;
    }

    
    const get_city = await DatabaseCity.selectById(id_city);

    console.log('------------------------------------');
    console.log("get_city",get_city);
    console.log('------------------------------------');
    const id_country = get_city.id_country;
    const id_state = get_city.id_state;
    const get_country = await DatabaseCountry.selectById(id_country);
    console.log('------------------------------------');
    console.log("country",get_country);
    console.log('------------------------------------');
    //console.log("id_state " + id_state)
    if (id_state == null || id_state == undefined || id_state == "") {
      location = {
        country: get_country.name,
        short_name: get_country.short_name,
        indicative: get_country.indicative,
        state: "N/A",
        city: get_city.name
      };
    }else{
      const get_state = await DatabaseState.selectById(id_state);
      location = {
        country: get_country.name,
        short_name: get_country.short_name,
        indicative: get_country.indicative,
        state: get_state.name,
        city: get_city.name
      };
    }

    let total_rides = 0;
    if (rides != null && rides.length > 0) {
      total_rides = rides.length;
    }

    let total_deliveries = 0;
    if (deliveries != null && deliveries.length > 0) {
      total_deliveries = deliveries.length;
    }

    let total_valorations = 0;
    if (valoration != null && valoration.length > 0) {
      total_valorations = valoration.length;
    }

    return res.status(200).json({
      user: drivpass,
      location: location,
      rides: rides,
      deliveries: deliveries,
      valorations: valorationsJoin,
      current_location: actual_location,
      current_valoration: val,
      total_rides: total_rides,
      total_deliveries: total_deliveries,
      total_valorations: total_valorations
    });
  } catch (e) {
    console.log(e)
    res
      .status(500)
      .json({ message: " ha ocurrido un error inesperado", err: e });
  }
}

async function edit(req, res) {
  try {
    const id = req.params.id;
    const params = req.body;
    const drivpass = await Database.selectById(id);
    if (drivpass == null)
      return res.status(200).json({ message: "User doesn´t exist" });
    const parameters = {
      name: params.name || drivpass.name,
      phone: params.phone || drivpass.phone,
      email: params.email || drivpass.email,
      city: params.city || drivpass.city,
      password: params.password || drivpass.password,
      image: params.image || drivpass.image,
      video: params.video || drivpass.video,
      auth_sms: params.auth_sms || drivpass.auth_sms,
      reg_id: params.reg_id || drivpass.reg_id,
      status_profile: params.status_profile || drivpass.status_profile,
      btoken: params.btoken || drivpass.btoken,
      led_status: params.led_status || drivpass.led_status,
      status: params.status || drivpass.status
    };
    const id_drivpass = drivpass.id;

    const put = await Database.update(parameters, id_drivpass);
    return res.status(200).json({ success: true });
  } catch (e) {
    res
      .status(500)
      .json({ message: " ha ocurrido un error inesperado", err: e });
  }
}

async function put(req, res) {
  try {
    const id = req.params.id;
    const params = req.body;
    const drivpass = await Database.selectById(id);
    if (drivpass == null)
      return res.status(200).json({ message: "User doesn´t exist" });
    const parameters = {
      name: params.name || drivpass.name,
      phone: params.phone || drivpass.phone,
      email: params.email || drivpass.email,
      city: params.city || drivpass.city,
      password: params.password || drivpass.password,
      image: params.image || drivpass.image,
      video: params.video || drivpass.video,
      auth_sms: params.auth_sms || drivpass.auth_sms,
      reg_id: params.reg_id || drivpass.reg_id,
      status_profile: params.status_profile || drivpass.status_profile,
      btoken: params.btoken || drivpass.btoken,
      led_status: params.led_status || drivpass.led_status,
      status: params.status || drivpass.status
    };
    const id_drivpass = drivpass.id;

    const put = await Database.update(parameters, id_drivpass);
    return res.status(200).json({ success: true });
  } catch (e) {
    res
      .status(500)
      .json({ message: " ha ocurrido un error inesperado", err: e });
  }
}

async function buytoken(req, res) {
  try {
    const params = req.body;
    const drivpass = await Database.selectById(params.user_id);
    if (drivpass == null)
      return res
        .status(200)
        .json({ success: false, message: "User doesn´t exist" });

    //const pay = await Database.insertPayToken(params)
    const pay = await Database.insert(params);
    return res.status(200).json({ success: true, message: "Pay succes!" });
  } catch (e) {
    res
      .status(500)
      .json({ message: " ha ocurrido un error inesperado", err: e });
  }
}

exports.add = add;
exports.profile = profile;
exports.getId = getId;
exports.edit = edit;
exports.put = put;
exports.buytoken = buytoken;
