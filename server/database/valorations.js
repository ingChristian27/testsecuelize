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

async function select(id_drivpass, user_type) {
    try {
        const query = await Valoration.findAll({ where: { id_drivpass: id_drivpass, type: user_type, id_user:id_drivpass } });

        return query;

    } catch (e) {
        console.log(e);
    }
}



exports.insert = insert;
exports.select = select;