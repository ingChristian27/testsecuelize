const Database = require("../database/valorations");
const DatabaseDrivpass = require("../database/drivpass");

async function add(req, res) {
  try {
    const params = req.body;
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
    const valoration = await Database.select(id_drivpass, user_type);
    console.log(valoration);
    const user = await DatabaseDrivpass.selectById(id_drivpass);

    let acu = 0;
    let val = 0;
    let count = 0;

    if (valoration == null) {
      val = 0.0;
    } else {
      for (var i in valoration) {
        acu += parseFloat(valoration[i].rating);
        count++;
      }
      val = acu / count;
    }
    return res
      .status(200)
      .json({ actual_valoration: val, user: user, valorations: valoration });
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
