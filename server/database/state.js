const State = require("../models").state;

async function getAll() {
    try {
        const query = await State.findAll();

        return query;

    } catch (e) {
        console.log(e);
    }
}

async function selectById(id) {
    try {
        const query = await State.find({ where: { id: id } });


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
        const query = await State.findAll({ where: { id_country: countryId } });

        return query;

    } catch (e) {
        console.log(e);
    }
}

exports.getAll = getAll;
exports.selectByCountry = selectByCountry;
exports.selectById = selectById;