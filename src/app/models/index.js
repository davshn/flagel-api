const fs = require('fs');
const path = require('path');

//Importa todos los archivos de modelos
const basename = path.basename(__filename);
const modelDefiners = [];
fs.readdirSync(path.join(__dirname, './'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    if (file !== "index.js") {
      modelDefiners.push(require(path.join(__dirname, './', file)));
    }
  });

module.exports = modelDefiners;