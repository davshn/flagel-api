require('dotenv').config();
const Sequelize = require("sequelize");
const fs = require('fs');
const path = require('path');

const sequelize = new Sequelize("postgres://knoffpsafwhayk:4effb64a37d03873b553b03a892d3f728ad78d394df9c5bc3ed95a74ede4f65a@ec2-52-203-27-62.compute-1.amazonaws.com:5432/d6e5jbcsg71uro", {
dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
}
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

module.exports = db;