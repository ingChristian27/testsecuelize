const CarMark = require("../models").car_mark;

async function getAll() {
    try {
        const query = await CarMark.findAll();

        /*
        query.forEach(function (element) {
            console.log("ELEMENT")
            console.log(element.dataValues);
        });
        */

        return query;

    } catch (e) {
        console.log(e);
    }
}

exports.getAll = getAll;
