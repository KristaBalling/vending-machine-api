const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const chalk = require('chalk');
const Sequelize = require('sequelize');
const Snack = require('./models/snack');
const Purchase = require('./models/purchase');

server.use(bodyParser.urlencoded({ extended: false }));

// A customer should be able to get a list of the current items, their costs, and quantities of those items
server.get('/snacks', function (req, res) {
  // go and find all the snacks from the database
  Snack.findAll().then(function (snacks) {
    // whenever we get our snacks back from the database,
    // return the snacks array.
    res.json({
      status: 'success',
      data: snacks
    });
  });
});

//
// A vendor should be able to update the description, quantity, and costs of items in the machine
server.post('/snacks', function (req, res) {
  Snack.create({
    description: (req.body.description),
    cost: (req.body.cost),
    quantity: (req.body.quantity)
  }).then(function () { res.sendStatus(200); });
});

server.put('/snacks', function (req, res) {
  Snack.create()
})

// A customer should be able to buy an item using money
server.post('/api/customer/snacks/:snacksId/purchase', function (req, res) {
  // get snackId from url
  const snackId = parseInt(req.params.snackId);
  const moneyPaid = req.body.moneyPaid;
Snacks.find({where:{id:snackId}})
  .then(function(snack){
    if(moneyPaid >= snack.cost){
      return {
        status: "success",
        snackId: snackId,
        name: snack.description,
        changeBack: moneyPaid - snack.cost
      };
    } else if (moneyPaid < snack.cost) {
      return {
        status: "fail",
        snackId: snackId,
        name: snack.description,
        moneyPaid: moneyPaid
      };
    } else {
        return Promise.reject("Unknown");
      }
    })
  })


  // A vendor should be able to see a list of all purchases with their time of purchase
server.get('/purchase', function (req, res){
  Purchase.findAll().then(function(arrayOfPurchases) {
    res.json(arrayOfPurchases); { res.sendStatus(200); }
  })
}
)

// A vendor should be able to see total amount of money in machine

server.get('/purchase', function (req, res) {
  cost.findAll().then(function(totalMonies) {
   res.json(totalMonies); { res.sendStatus(200); }
  })
})

// A vendor should be able to add a new item to the machine

server.post('/snacks', function (req, res) {
   Snack.create({
  description: (req.body.description),
   cost: (req.body.cost),
   quantity: (req.body.quantity)

    }).then(function () {
        // Wait until insert is finished, then redirect.
        res.redirect('/'); { res.sendStatus(200); }
    });


server.listen(3030);
