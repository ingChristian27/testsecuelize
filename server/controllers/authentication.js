var jwt = require("jwt-simple");
var cfg = require("../config/passport");
const Database = require("../database/drivpass");

async function authentication(req, res) {
  try {
    console.log("login/");
    console.log(req.body);

    const { email, password } = req.body;

    if (!email || !password)
      return res
        .status(400)
        .send({ message: "email and password are required" });

    const user = await Database.selectByEmail(email);
    console.log(user);
    if (!user || user.length == 0)
      return res.status(403).json({ message: "User doesn´t exist!" });

    const passw = await Database.selectByEmailAndPassword(email, password);
    if (!passw || passw.length == 0)
      return res.status(404).json({ message: "Incorrect password!" });

    const id = user.id;
    const status_profile = user.status_profile;
    const access_token = "TEST123";
    var payload = {
      email: email
    };
    var token = jwt.encode(payload, cfg.jwtSecret);
    //const token = jwt.sign(payload, cfg.jwtSecret, { expiresIn });
    return res.json({
      token: token,
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
