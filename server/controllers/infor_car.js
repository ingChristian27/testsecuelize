const markBD = require("../database/car_mark");
const modelBD = require("../database/model_car");
const colorBD = require("../database/color_car");

async function mark(req, res) {
  try {
    const cars = await markBD.getAll();
    res.status(200).json(cars);
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}

async function model(req, res) {
  try {
    let idMark = req.params.mark;
    console.log(idMark);
    const models = await modelBD.getAllMark(idMark);

    res.status(200).json(models);
  } catch (e) {
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}

async function color(req, res) {
  try {
    const cars = await colorBD.getAll();
    res.status(200).json(cars);
  } catch (e) {
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}

exports.mark = mark;
exports.model = model;
exports.color = color;
