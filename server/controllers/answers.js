const AnswersBD = require("../database/answers");

async function addAnswers(req, res) {
  try {
    const answers = req.body.answers;
    await AnswersBD.add(answers);
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
