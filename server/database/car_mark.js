const CarMark = require("../models").car_mark;

async function getAll() {
    try {
        const query = await CarMark.findAll();

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
