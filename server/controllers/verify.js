const Database = require("../database/driver_verify");

async function get(req, res) {
  try {
    const idDriver = parseInt(req.params.idDriver);
    response = await Database.getByIdDriver(idDriver);
    return res.status(200).json({ countUserVerify: response.count });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}

exports.get = get;
