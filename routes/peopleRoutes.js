const db = require('../models');
const router = require('express').Router();

module.exports =function(app){

app.get('/getOneCompanyPeople/:company_id', function (req, res) {
    db.getOneCompanyPeople
      .findOne({
        where: {
          id: req.params.company_id,
        },
      })
      .then(function (dbgetOneCompanyPeople) {
        res.json(dbgetOneCompanyPeople);
      });
  });

  app.get('/getOnePerson/:id', function (req, res) {
    db.getOnePerson
      .findOne({
        where: {
          id: req.params.user_id,
        },
      })
      .then(function (dbgetOnePerson) {
        res.json(dbgetOnePerson);
      });
  });

   app.put('/updateOnePerson', function(req, res) {
    db.updateOnePerson.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbupdateOnePerson) {
      res.json(dbupdateOnePerson);
    });
  });

  app.post('/createOnePerson', function (req, res) {
    console.log(req.body);
    db.createOnePerson
      .create(req.body)
      .then(function (dbcreateOnePerson) {
        res.json(dbcreateOnePerson);
      });
  });

  app.delete('/deleteOnePerson/:id', function (req, res) {
     
     db.deleteOnePerson.destroy({
       where: {
         id: req.params.user_id,
       },
     }).then(function (dbdeleteOnePerson) {
       res.json(dbdeleteOnePerson);
     });
   });
};

























