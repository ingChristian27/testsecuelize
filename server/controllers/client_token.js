async function get(req, res) {
  try {
    return res.status(200).json({ clientToken: "TOKEN123" });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}
async function getId(req, res) {
  try {
    return res.status(200).json({ clientToken: "TOKEN123-" + request.body.id });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}

exports.get = get;
exports.getId = getId;
