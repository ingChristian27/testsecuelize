const Countries = require("../models").country;

async function getAll() {
    try {
        const query = await Countries.findAll();

        return query;

    } catch (e) {
        console.log(e);
    }
}

exports.getAll = getAll;
