require('dotenv').config();
const Sequelize = require("sequelize");
const fs = require('fs');
const path = require('path');

//Conexiones con la base de datos
const sequelize = new Sequelize("postgres://knoffpsafwhayk:4effb64a37d03873b553b03a892d3f728ad78d394df9c5bc3ed95a74ede4f65a@ec2-52-203-27-62.compute-1.amazonaws.com:5432/d6e5jbcsg71uro", {
dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}
);

//Importa todos los archivos de modelos
const basename = path.basename(__filename);
const modelDefiners = [];
fs.readdirSync(path.join(__dirname, '../app/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '../app/models', file)));
  });
modelDefiners.forEach(model => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Thread,Post } = sequelize.models;

// Relaciones entre tablas
Thread.hasMany(Post);
Post.belongsTo(Thread);

module.exports = {
  ...sequelize.models, // Para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // Para importart la conexión { conn } = require('./db.js');
};