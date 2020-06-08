const db = require('../models');
const router = require('express').Router();

module.exports = function (app) {
  app.get('/getLastRound/:company_id', function (req, res) {
    db.getLastRound
      .findOne({
        where: {
          id: req.params.company_id,
        },
      })
      .then(function (dbgetLastRound) {
        res.json(dbgetLastRound);
      });
  });

  app.get('/getOneCompanyRounds/:company_id', function (req, res) {
    db.getOneCompanyRounds
      .findOne({
        where: {
          id: req.params.company_id,
        },
      })
      .then(function (dbgetOneCompanyRounds) {
        res.json(dbgetOneCompanyRounds);
      });
  });

  app.get('/getOneRound/:id', function (req, res) {
    db.getOneRound
      .findOne({
        where: {
          id: req.params.company_id,
        },
      })
      .then(function (dbgetOneRound) {
        res.json(dbgetOneRound);
      });
  });

  app.put('/createOnePerson', function (req, res) {
    db.createOnePerson
      .update(req.body, {
        where: {
          id: req.body.id,
        },
      })
      .then(function (dbcreateOnePerson) {
        res.json(dbcreateOnePerson);
      });
  });

  app.delete('/deleteOneRound/:id', function (req, res) {
    db.deleteOneRound
      .destroy({
        where: {
          id: req.params.user_id,
        },
      })
      .then(function (dbdeleteOneRound) {
        res.json(dbdeleteOneRound);
      });
  });
};
