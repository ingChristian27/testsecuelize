async function post(req, res) {
  try {
    return res.status(200).json({ success: "DELET PAYMENT" });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}
exports.post = post;
