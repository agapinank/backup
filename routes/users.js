const db = require('../models');
const router = require('express').Router();

module.exports = function (app) {
  app.get('/users/all', function (req, res) {
    db.Users.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  app.post('/users/create', function (req, res) {
    console.log(req.body);
    db.Users.create(req.body.newUser).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });
};
