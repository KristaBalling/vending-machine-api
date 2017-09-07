'use strict';
// Any time we're messing with cakes, that code should live
// here. Any sort of database interactions should go here.
const Sequelize = require('sequelize');
const Snack = require('./snack');

const db = new Sequelize('vendingMachine', 'kristablachian', '', {
    dialect: 'postgres',
});

const Purchase = db.define('purchase', {
  amount: Sequelize.INTEGER,
  cost: Sequelize.INTEGER
});

// associate this purchase to a snack.
Purchase.belongsTo(Snack);

// this sync method will create the tables
// to store these values if the tables don't exist
Snack.sync().then(function () { Purchase.sync(); })

module.exports = Purchase;
