const State = require("../models").state;

async function getAll() {
    try {
        const query = await State.findAll();

        return query;

    } catch (e) {
        console.log(e);
    }
}

async function selectByCountry(countryId) {
    try {
        const query = await State.findAll({ where: { id_country: countryId } });

        return query;

    } catch (e) {
        console.log(e);
    }
}

exports.getAll = getAll;
exports.selectByCountry = selectByCountry;