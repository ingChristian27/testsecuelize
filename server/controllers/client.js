async function get(req, res) {
  try {
    return res.status(200).json({ succes: true, customer: "CUSTOMER" });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}

exports.get = get;
