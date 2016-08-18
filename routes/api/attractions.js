var Promise = require('bluebird');
var db = require('../../models');
var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');


router.get('/hotels', function(req, res, next){
  Hotel
    .findAll()
    .then(function(hotels){
      res.send(hotels);
    });
});


router.get('/restaurants', function(req, res, next){
  Restaurant
    .findAll()
    .then(function(hotels){
      res.send(hotels);
    });
});


router.get('/activities', function(req, res, next){
  Activity
    .findAll()
    .then(function(hotels){
      res.send(hotels);
    });
});

module.exports = router;