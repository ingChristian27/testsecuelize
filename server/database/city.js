const City = require("../models").city;

async function getAll() {
    try {
        const query = await City.find();

        if (query != null && query.dataValues != null) {
            return query.dataValues;
        } else {
            return null;
        }

    } catch (e) {
        console.log(e);
    }
}

async function selectByState(stateId) {
    try {
        const query = await City.find({ where: { id_state: stateId } });

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
        const query = await City.find({ where: { id_country: countryId } });

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
exports.selectByState = selectByState;
exports.selectByCountry = selectByCountry;