var jwt = require("jwt-simple");
var cfg = require("../config/passport");
const Database = require("../database/drivpass");

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

    const EncPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8));

    //const passw = await Database.selectByEmailAndPassword(email, password);
    const passw = await Database.selectByEmailAndPassword(email, EncPassword);
    if (!passw || passw.length == 0) {
      return res.status(404).json({ message: "Incorrect password!" });
    }

    var payload = {
      email: email
    };

    const id = user.id;
    const status_profile = user.status_profile;
    //const token = jwt.sign(payload, cfg.jwtSecret, { expiresIn });
    const access_token = jwt.encode(payload, cfg.jwtSecret)

    return res.json({
      access_token,
      user_id: id,
      status_profile: status_profile
    });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}

exports.authentication = authentication;
