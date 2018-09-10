const Database = require("../database/driver_verify");

async function get(req, res) {
  try {
    const idDriver = parseInt(req.params.idDriver);
    response = await Database.getByIdDriver(idDriver);
    let val = 0;
    return res.status(200).json({ countUserVerify: val });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}

exports.get = get;
