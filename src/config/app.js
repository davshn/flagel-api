const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const schemas = require('../app/graph/schemas/threadSchema.js');
const root = require('../app/graph/resolvers/threadResolver.js');

//const favicon = require("serve-favicon");
var { graphqlHTTP } = require('express-graphql');
/*
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const { SubscriptionManager } = require('graphql-subscriptions');
const { SubscriptionServer } = require('subscriptions-transport-ws');
*/
//const routes = require('./routes/index.js');
require('./db');
//const pubsub = require('./pubsub');
//const typeDefs = require('./schema');
//const resolvers = require('./resolvers');

const app = express();
app.name = 'APIGRAPH';

app.use(cors());
app.use(morgan('common'));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
//app.use(favicon(__dirname + '/public/favicon.png'));
app.use(cookieParser());

app.use('/graphql', graphqlHTTP({
  schema: schemas,
  rootValue: root,
  graphiql: true,
}));

module.exports = app;
