const AnswersBD = require("../database/answers");
const verifyDB = require("../database/driver_verify");

async function addAnswers(req, res) {
  try {
    const answers = req.body.answers;
    var verify = true;
    console.log(answers);
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].response !== "si") {
        verify = false;
      }
    }
    let data = {
      driverId: answers[0].id_driver,
      passengerId: answers[0].id_passenger,
      verify: verify
    };
    console.log(data);

    await verifyDB.insert(answers);

    //await AnswersBD.add(answers);
    // verifyDB.insert()
    return res
      .status(200)
      .json({ message: "se ha agregado el registro con éxito" });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}

exports.addAnswers = addAnswers;
