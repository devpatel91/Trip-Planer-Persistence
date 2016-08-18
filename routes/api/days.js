var Promise = require('bluebird');
var db = require('../../models');
var bodyParser = require('body-parser');
var router = require('express').Router();
var Day = require('../../models/day');

router.get('/days', function(req, res, next){
  res.send("hello");
});

router.post('/days', function(req, res, next){
  Day.create({number: req.body.day})
  .then(function(createdDay){
  	console.log(createdDay)
  })
  .catch(function(error){
  	console.log(error);
  })
  
});
router.post('/days/:id/hotel', function(req, res, next){
  res.send("hello");
});

router.post('/days/:id/restaurants', function(req, res, next){
  res.send("hello");
});

router.post('/days/:id/activities', function(req, res, next){
  res.send("hello");
});

module.exports = router;