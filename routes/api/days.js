var Promise = require('bluebird');
var db = require('../../models');
var bodyParser = require('body-parser');
var router = require('express').Router();
var Day = require('../../models/day');

router.get('/days', function(req, res, next) {
  Day.findAll({})
    .then(function(dayList) {
      res.send(dayList);
    })
    .catch(function(error) {
      console.log(error);
    })
});

router.post('/days', function(req, res, next) {

  Day.create({
    number: req.body.number
  })
    .then(function(createdDay) {

    })
    .catch(function(error) {
      console.log(error);
    })

});
router.post('/days/:id/hotel', function(req, res, next) {
  var hotelId = req.body.hotelId;
  var currentDay = req.params.id;
  Day.update({
    hotelId: hotelId
  }, {
    where: {
      number: currentDay
    }
  })
    .then(function(result) {
      console.log('hotel updated!');
    });
});

router.post('/days/:id/restaurants', function(req, res, next) {
  res.send("hello");
});

router.post('/days/:id/activities', function(req, res, next) {
  res.send("hello");
});

module.exports = router;