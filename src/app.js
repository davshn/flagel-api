const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
//const favicon = require("serve-favicon");
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const { SubscriptionManager } = require('graphql-subscriptions');
const { SubscriptionServer } = require('subscriptions-transport-ws');

//const routes = require('./routes/index.js');
//require('./db.js');
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

//server.use('/', routes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// Error catching endware.
app.use((err, req, res, next) => { 
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;
