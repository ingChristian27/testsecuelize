const State = require("../models").state;

async function getAll() {
    try {
        const query = await State.find();

        if (query != null && query.dataValues != null) {
            return query.dataValues;
        } else {
            return null;
        }

    } catch (e) {
        console.log(e);
    }
}

async function selectByCountry(countryId) {
    try {
        const query = await State.find({ where: { id_country: countryId } });

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
exports.selectByCountry = selectByCountry;