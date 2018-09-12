const Database = require("../database/valorations");
const DatabaseDrivpass = require("../database/drivpass");
const verifyDB = require("../database/driver_verify");
const typeBD = require("../database/driver_type_assign");
async function add(req, res) {
  try {
    let params = req.body;

   
    params.drivpass_id  =  params.id_drivpass;
    params.time_send = new Date();

    const valoration = await Database.insert(params);
    return res.status(200).json({
      success: true,
      message: "Valoration created!",
      insertId: valoration.id
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}
async function get(req, res) {
  try {
    const id_drivpass = parseInt(req.params.id);
    const user_type = parseInt(req.params.type);
    const responsevaloration = await Database.select(id_drivpass, user_type);
    const user = await DatabaseDrivpass.selectById(id_drivpass);
    let data = {};
    if (user_type == 2) {
      console.log("entro al driver");
      let verify = await verifyDB.getByIdDriver(id_drivpass);
      data.verify = verify.count;
      data.driverTypes = await typeBD.getDrivers(id_drivpass);
    }

    let acu = 0;
    let val = 0;
    let count = 0;
    let valorations = [];
    if (responsevaloration == null) {
      val = 0.0;
    } else {
      for (var i in responsevaloration) {
        let valoration = {};

        acu += parseFloat(responsevaloration[i].rating);
        count++;
        valoration.rating = responsevaloration[i].rating;
        valoration.id = responsevaloration[i].id;
        valoration.id_user = responsevaloration[i].id_user;
        valoration.drivpass_id = responsevaloration[i].drivpass_id;
        valoration.commentary = responsevaloration[i].commentary;
        valoration.description = responsevaloration[i].description;
        valoration.answer = responsevaloration[i].answer;
        valoration.type = responsevaloration[i].type;
        valoration.time_send = responsevaloration[i].time_send;
        valoration.createdAt = responsevaloration[i].createdAt;
        valoration.updatedAt = responsevaloration[i].updatedAt;
        valoration.image = responsevaloration[i].drivpass.image;
        valoration.name = responsevaloration[i].drivpass.name;

        valorations.push(valoration);
      }

      val = acu / count;
    }
    data.responsevaloration = val;
    data.user = user;
    data.valorations = valorations;

    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}
async function putAnswer(req, res) {
  try {
    const idValoration = parseInt(req.params.id);
    const answer = req.body.answer;
    let data = { answer: answer };

    const result = await Database.update(data, idValoration);
    console.log(result);
    return res
      .status(200)
      .json({ message: "La respuesta ha sido modificada con éxito." });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}

exports.add = add;
exports.get = get;
exports.putAnswer = putAnswer;
