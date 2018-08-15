const Valoration = require("../models").valoration;

async function insert(data) {
    try {
        const query = await Valoration.create(data);

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