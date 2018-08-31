const Countries = require("../models").country;

async function getAll() {
    try {
        const query = await Countries.findAll();

        return query;

    } catch (e) {
        console.log(e);
    }
}

async function selectById(id) {
    try {
        const query = await Countries.find({ where: { id: id } });

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
exports.selectById = selectById;
