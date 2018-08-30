const Database = require("../database/countries");

async function payment(req, res) {
  try {
    return res.status(200).json({ success: "PAYMENT METHOD" });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado.'}"
    });
  }
}

exports.payment = payment;
