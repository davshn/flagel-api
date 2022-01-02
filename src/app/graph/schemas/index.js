const path = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');

const typesArray = loadFilesSync(path.join(__dirname, './'), { extensions: ['js'],ignoreIndex: true })      //Carga todos los archivos de la carpeta como definiciones de tipo

module.exports = mergeTypeDefs(typesArray);         //Une las definiciones de tipo