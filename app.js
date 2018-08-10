const Sequelize = require("sequelize");

const connection = new Sequelize("postgres", "postgres", "root", {
  dialect: "postgres"
});

const Article = connection.define("article", {
  title: { type: Sequelize.STRING },
  body: { type: Sequelize.TEXT }
});

const person = connection.define("person", {
  title: { type: Sequelize.STRING },
  body: { type: Sequelize.TEXT }
});

connection
  .sync()
  .then(res => {
    Article.findAll(respuesta => {
      console.log(respuesta);
    });
  })
  .catch(err => {
    console.log(err);
  });
