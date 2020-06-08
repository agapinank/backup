const db = require('../models');
const router = require('express').Router();

module.exports = function (app) {
  app.get('/getAllCompaniesUser/:user_id', function (req, res) {
    db.getAllCompaniesUser
      .findOne({
        where: {
          id: req.params.user_id,
        },
      })
      .then(function (dbgetAllCompaniesUser) {
        res.json(dbgetAllCompaniesUser);
      });
  });

  app.get('/getOneCompany/:id', function (req, res) {
    db.getOneCompany
      .findOne({
        where: {
          id: req.params.company_id,
        },
      })
      .then(function (dbgetOneCompany) {
        res.json(dbgetOneCompany);
      });
  });

  app.post('/createOneCompany', function (req, res) {
    console.log(req.body);
    db.createOneCompany
      .create(req.body)
      .then(function (dbcreateOneCompany) {
        res.json(dbcreateOneCompany);
      });
  });

   app.delete('/deleteOneCompany/:id', function (req, res) {
     
     db.deleteOneCompany.destroy({
       where: {
         id: req.params.company_id,
       },
     }).then(function (dbdeleteOneCompany) {
       res.json(dbdeleteOneCompany);
     });
   });
};

