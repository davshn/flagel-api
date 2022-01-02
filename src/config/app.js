const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const schemas = require('../app/graph/schemas/threadSchema.js');
const resolvers = require('../app/graph/resolvers/threadResolver.js');

//const favicon = require("serve-favicon");
const { graphqlHTTP } = require('express-graphql');
/*
const { SubscriptionManager } = require('graphql-subscriptions');
const { SubscriptionServer } = require('subscriptions-transport-ws');
*/
require('./db');
//const pubsub = require('./pubsub');

const app = express();
app.name = 'APIGRAPH';

app.use(cors());
app.use(morgan('common'));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
//app.use(favicon(__dirname + '/public/favicon.png'));
app.use(cookieParser());

app.use('/', graphqlHTTP({
  schema: schemas,
  rootValue: resolvers,
  graphiql: true,
}));

module.exports = app;
