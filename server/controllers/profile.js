const DatabaseDrivpass = require("../database/drivpass");
const DatabaseLocation = require("../database/location");

async function verify(req, res) {
  try {
    const { id_user, id_profile } = req.body;
    const verify = await DatabaseDrivpass.drivpass_user_type(
      id_user,
      id_profile
    );
    if (verify == null)
      return res
        .status(200)
        .json({
          profile: false,
          message: "You dont have this profile assigned!"
        });
    const updateUserType = await DatabaseLocation.update(
      { user_type: id_profile },
      id_user
    );
    return res.status(200).json({ profile: true, message: "success" });
  } catch (e) {
    console.log(e);
    return res.status(500).send({
      message: "{'error':'Error inesperado. '}"
    });
  }
}

exports.verify = verify;
