const Answer = require("../models").answers;

async function add(data) {
  try {
    const query = await Answer.bulkCreate(data);
    console.log(query);
    return true;
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}

exports.add = add;
