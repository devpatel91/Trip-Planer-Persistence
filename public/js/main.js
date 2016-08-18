'use strict';
/* global $ tripModule */



$(function() {
  var $gettingHotels = $.get('/api/hotels')
    .then(function(hotels) {
      hotels.forEach(function(hotel) {
        var $option = $('<option value= "' + hotel.id + '">' + hotel.name + '</option>');
        $('#hotel-choices').append($option);
      });
      return hotels;
    })
    .catch(console.error.bind(console));


  var $gettingRestaurants = $.get('/api/restaurants')
    .then(function(restaurants) {
      restaurants.forEach(function(restaurant) {
        var $option = $('<option value= "' + restaurant.id + '">' + restaurant.name + '</option>');
        $('#restaurant-choices').append($option);
      });
      return restaurants;
    })
    .catch(console.error.bind(console));


  var $gettinActivities = $.get('/api/activities')
    .then(function(activities) {
      activities.forEach(function(activity) {
        var $option = $('<option value= "' + activity.id + '">' + activity.name + '</option>');
        $('#activity-choices').append($option);
      });
      return activities;
    })
    .catch(console.error.bind(console));


  Promise
    .all([$gettingHotels, $gettingRestaurants, $gettinActivities])
    .then(function(promises) {
      $(tripModule.load);

      var enhanced = {
        hotels: promises[0].map(attractionModule.create),
        restaurants: promises[1].map(attractionModule.create),
        activities: promises[2].map(attractionModule.create),
      }
    });
})