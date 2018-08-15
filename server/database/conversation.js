/*
* TODO: RETORNAR ID EN INSERT
*/

const Conversation = require("../models").conversation;

async function insert(data) {
  try {
    const query = await Conversation.create(data);
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}

exports.insert = insert;

/*
  selectByRide : () => {
    const query = `SELECT m.*, d.name
                   FROM message m
                   JOIN conversation c ON c.id = m.id_conversation 
                   JOIN drivpass d ON m.id_sender = d.id
                   WHERE c.id_ride = $1 
                   ORDER BY time_send ASC`;
    return query;
  },
  */

