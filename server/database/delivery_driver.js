const DeliveryDriver = require("../models").delivery_driver;

async function verify(id_driver) {
  try {
    const query = await DeliveryDriver.find({
      where: { id_driver: id_driver }
    });
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}

async function update(data, id_delivery_driver) {
  try {
    const query = await DeliveryDriver.update(data, {
      returning: true,
      where: { id: id_delivery_driver }
    });
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}

exports.verify = verify;
exports.update = update;

/*
  selectByDriver: (id_driver)=> {
    const query= `SELECT rd.*, d.*, dv.*
                  FROM delivery_driver rd
                  JOIN delivery d ON d.id = rd.id_delivery 
                  JOIN drivpass dv ON dv.id = rd.id_driver                  
                  WHERE rd.id_driver = ('${id_driver}')
                  AND d.id_driver is null`;
                  
    return query;
  },
  */

/*
  selectByUser: (id_user,id_delivery)=> {
    const query =  `SELECT dd.*, d.*, dv.*
                    FROM delivery_driver dd
                    JOIN delivery d ON d.id = dd.id_delivery
                    JOIN drivpass dv ON dv.id = dd.id_driver
                    WHERE dd.id_delivery = ('${id_delivery}')
                    AND d.id_user = ('${id_user}')                    
                    AND dd.response = 1
                    OR dd.response = 0
                    AND d.id_driver is null`;
    return query;
  },



*/
