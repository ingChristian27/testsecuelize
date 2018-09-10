const models = require("../models");

async function insert(data) {
  try {
    const query = await models.valoration.create(data);

    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}

async function select(drivpassId, user_type) {
  try {
    const query = await models.valoration.findAll({
      where: { drivpass_id: drivpassId, type: user_type },
      include: [
        {
          model: models.drivpass,
          attributes: ["image", "name"]
        }
      ]
    });

    return query;
  } catch (e) {
    console.log(e);
  }
}

exports.insert = insert;
exports.select = select;
