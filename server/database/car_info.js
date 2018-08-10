const Drivpass = require("../models/drivpass");

module.exports = {
  selectByEmail(email) {
    Drivpass.findOne({ where: { email: email } }).then(
      query => {
        return query;
      },
      err => {}
    );
  }
};

const squel = require("squel");

function selectByEmail(email) {}

module.exports = {
  selectByEmail: email => {
    const query = `SELECT * FROM drivpass WHERE  email = ('${email}')`;
    return query;
  },
  selectCar: id_user => {
    const query = `SELECT * FROM car_info WHERE  id_user = ('${id_user}')`;
    return query;
  },
  insert: (table, data) => {
    const squelPostgres = squel.useFlavour("postgres");
    return squelPostgres
      .insert()
      .into(table)
      .setFields(data)
      .returning("id")
      .toString();
  },
  update: (table, data, id_platecar) => {
    return squel
      .update()
      .table(table)
      .setFields(data)
      .where("id =" + id_platecar)
      .toString();
  },
  selectPlate: plate => {
    return `SELECT * FROM car_info WHERE number = ('${plate}')`;
  }
};
