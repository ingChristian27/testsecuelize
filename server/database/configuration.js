/*
* TODO: TODAS LAS CONSULTAS SON IGUALES.
* ASI ESTABAN ORIGINALMENTE
* RECIBIENDO TABLA, COLUMNA Y VALOR SIN UTILIZAR
*/

const Configuration = require("../models").configuration;

async function payments() {
  try {
    const query = await Configuration.findAll();
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}

async function diverTypes() {
  try {
    const query = await Configuration.findAll();
    if (query != null && query.dataValues != null) {
      return query.dataValues;
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}



exports.payments = payments;
exports.diverTypes = diverTypes;