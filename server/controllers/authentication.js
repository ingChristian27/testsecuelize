var jwt = require("jwt-simple");
var cfg = require("../config/passport");
const Database = require("../database/drivpass");

const EmailCtrl = require("./mailCtrl");
const uuidv1 = require("uuid/v1");

const bcrypt = require("bcrypt-nodejs");
const serviceToken = require("../services/token");

async function authentication(req, res) {
  try {
    console.log("login/");
    console.log(req.body);

    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "email and password are required" });
    }

    const user = await Database.selectByEmail(email);
    console.log(user);
    if (!user || user.length == 0) {
      return res.status(403).json({ message: "User doesn´t exist!" });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(404).json({ message: "Incorrect password!" });
    }

    var payload = {
      email: email
    };

    const id = user.id;
    const status_profile = user.status_profile;
    //const access_token = jwt.sign(payload, cfg.jwtSecret, { '1h' });
    const access_token = jwt.encode(payload, cfg.jwtSecret);

    return res.json({
      access_token,
      user_id: id,
      status_profile: status_profile
    });
  } catch (e) {
    console.log(e);
    if (e === "Not a valid BCrypt hash.") {
      return res.status(500).send({
        message: "error: La clave no se ha guardado con un cifrado valido."
      });
    } else {
      return res.status(500).send({
        message: "{'error':'Error inesperado. '}"
      });
    }
  }
}
async function sendMail(req, res) {
  try {
    const { email } = req.body;
    const user = await Database.selectByEmail(email);

    if (!user || user.length == 0)
      return res.status(403).json({ message: "User doesn´t exist!" });

    let token = serviceToken.createToken(email);

    let subject = "Recuperación de contraseña";
    let url = "http://" + req.get("host") + "/login/restore/" + token;
    let html =
      "<h1>Restauración de contraseña en proceso </h1><p>" +
      "</p><p> Para restaurar su contraseña por favor ingrese al siguiente enlacen</p>" +
      "<p> <a href=" +
      url +
      ">Cambiar contraseña</a></p>";

    let data = {};

    data.token = token;
    data.email = email;
    data.subject = subject;
    data.text = html;

    let status = await EmailCtrl.sendEmail(data);
    return res
      .status(200)
      .json({ message: "la contraseña se ha actuaizado con éxito" });
  } catch (e) {}
}

async function restore(req, res) {
  try {
    const { email, password, newPassword } = req.body;

    const user = await Database.selectByEmail(email);
    console.log(user);
    if (!user || user.length == 0) {
      return res.status(403).json({ message: "User doesn´t exist!" });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(404).json({ message: "Incorrect password!" });
    }

    const EncPassword = bcrypt.hashSync(newPassword, bcrypt.genSaltSync(8));
    user.password = EncPassword;
    let put = await Database.update(user, user.id);

    return res
      .status(200)
      .json({ message: "la contraseña se ha actuaizado con éxito" });
  } catch (e) {}
}
async function validateToken(req, res) {
  email = req.user;
  path = req.get("host");
  res.render("restore", { email, path });
}
async function newPasswordWeb(req, res) {
  try {
    const { email, newpass, confirmpass } = req.body;
    console.log(req.body);

    req.body.email;
    if (newpass !== confirmpass) {
      return res.status(403).json({ message: "password dont equal!" });
    }

    const user = await Database.selectByEmail(email);
    if (!user || user.length == 0) {
      return res.status(403).json({ message: "User doesn´t exist!" });
    }
    const EncPassword = bcrypt.hashSync(newpass, bcrypt.genSaltSync(8));
    user.password = EncPassword;
    let put = await Database.update(user, user.id);
    console.log("paso por todo...");
    return res
      .status(200)
      .json({ message: "la contraseña se ha actuaizado con éxito" });
  } catch (e) {
    console.log("ha ocurrido un error");
  }
}
exports.authentication = authentication;
exports.restore = restore;
exports.sendMail = sendMail;
exports.validateToken = validateToken;
exports.newPasswordWeb = newPasswordWeb;
