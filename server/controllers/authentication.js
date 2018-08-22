var jwt = require("jwt-simple");
var cfg = require("../config/passport");
const Database = require("../database/drivpass");

const EmailCtrl = require("./mailCtrl");
const uuidv1 = require("uuid/v1");

const bcrypt = require("bcrypt-nodejs");

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

    //const EncPassword = bcrypt.hashSync(password);

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(404).json({ message: "Incorrect password!" });
    }

    //const passw = await Database.selectByEmailAndPassword(email, password);
    /*
    const passw = await Database.selectByEmailAndPassword(email, EncPassword);
    if (!passw || passw.length == 0) {
      return res.status(404).json({ message: "Incorrect password!" });
    }
    */

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

    let token = await uuidv1();
    const EncPassword = bcrypt.hashSync(token, bcrypt.genSaltSync(8));
    let put = await Database.update({ password: EncPassword }, user.id);

    let subject = "Recuperación de contraseña";
    let url = "Su nueva contraseña es: " + token;
    let html =
      "<h1>Su contraseña ha sido restaurada</h1><p>" +
      url +
      "</p><p> Ingrese a la aplicación y genere una nueva contraseña para mayor seguridad</p>";

    let data = {};

    data.token = token;
    data.email = email;
    data.subject = subject;
    data.text = html;
    let status = await EmailCtrl.sendEmail(data);
    return res
      .status(404)
      .json({ message: "la contraseña se ha actuaizado con éxito" });
  } catch (e) { }
}

async function restore(req, res) {
  try {
    const { email, password, newPassword } = req.body;

    const user = await Database.selectByEmail(email);
    console.log(user);
    if (!user || user.length == 0) {
      return res.status(403).json({ message: "User doesn´t exist!" });
    }

    //const EncPassword = bcrypt.hashSync(password);

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(404).json({ message: "Incorrect password!" });
    }

    //const passw = await Database.selectByEmailAndPassword(email, password);
    /*
    const passw = await Database.selectByEmailAndPassword(email, EncPassword);
    if (!passw || passw.length == 0) {
      return res.status(404).json({ message: "Incorrect password!" });
    }
    */
    console.log(newPassword);

    const EncPassword = bcrypt.hashSync(newPassword, bcrypt.genSaltSync(8));
    user.password = EncPassword;
    let put = await Database.update(user, user.id);

    return res
      .status(200)
      .json({ message: "la contraseña se ha actuaizado con éxito" });
  } catch (e) { }
}

exports.authentication = authentication;
exports.restore = restore;
exports.sendMail = sendMail;
