const DatabaseCarMarks = require("../database/car_mark");

async function get(req, res) {
  try {
    const car_marks = await DatabaseCarMarks.getAll();

    if (car_marks == null)
      return res.status(401).json({ message: "I don`t have car marks" });

    return res.status(200).json(car_marks);
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}
exports.get = get;
