const { mergeResolvers } = require('@graphql-tools/merge');
const path = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');

const resolversArray = loadFilesSync(path.join(__dirname, './'), { extensions: ['js'], ignoreIndex: true });    //Carga todos los archivos de la carpeta como resolvers

module.exports = mergeResolvers(resolversArray);    //Une los resolvers