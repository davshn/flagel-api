const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const { buildSchema, print } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const typeDefs = require('../app/graph/schemas/index');
const resolvers = require('../app/graph/resolvers/index');
const favicon = require("serve-favicon");
require('./db');

const schemas = buildSchema(print(typeDefs));   //Crea los esquemas a partir de las definiciones de tipo
/*
const { SubscriptionManager } = require('graphql-subscriptions');
const { SubscriptionServer } = require('subscriptions-transport-ws');
*/
//const pubsub = require('./pubsub');

const app = express();    //Crea el servidor
app.name = 'API Fagela';
app.use(favicon(__dirname + '/favicon.png'));

app.use(cors());
app.use(morgan('common'));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(cookieParser());

app.use('/', graphqlHTTP({
  schema: schemas,
  rootValue: resolvers,
  graphiql: true,
}));

module.exports = app;
