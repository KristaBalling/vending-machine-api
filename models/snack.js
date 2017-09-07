'use strict';
const Sequelize = require('sequelize');

// standard sequelize constructor call.
// database name: vendingMachine
// user: kristablachian
// dialect: postgres, since we're using postgres.
const db = new Sequelize('vendingMachine', 'kristablachian', '', {
    dialect: 'postgres',
});

const Snack = db.define('snack', {
  description: Sequelize.STRING,
  cost: Sequelize.INTEGER,
  quantity: Sequelize.INTEGER
});

// module.exports defines what is returned
// if you "require" this file.
module.exports = Snack;
