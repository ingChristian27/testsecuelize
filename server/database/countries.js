const Countries = require("../models").countries;

async function getAll() {
    try {
        const query = await Countries.find();

        if (query != null && query.dataValues != null) {
            return query.dataValues;
        } else {
            return null;
        }

    } catch (e) {
        console.log(e);
    }
}

exports.getAll = getAll;
