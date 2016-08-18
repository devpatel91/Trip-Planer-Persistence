'use strict';
/* global $ tripModule */

$(tripModule.load);


$(function(){

console.log("hello");


$.get('/api/hotels')
.then(function (hotels) {
  hotels.forEach(function(hotel){
    var $option = $('<option value= "' + hotel.id + '">' + hotel.name + '</option>');
 $('#hotel-choices').append($option);
  });
})
.catch( console.error.bind(console) );

$.get('/api/restaurants')
.then(function (restaurants) {
  restaurants.forEach(function(restaurant){
    var $option = $('<option value= "' + restaurant.id + '">' + restaurant.name + '</option>');
 $('#restaurant-choices').append($option);
  });
})
.catch( console.error.bind(console) );

$.get('/api/activities')
.then(function (activities) {
  activities.forEach(function(activity){
    var $option = $('<option value= "' + activity.id + '">' + activity.name + '</option>');
 $('#activity-choices').append($option);
  });
})
.catch( console.error.bind(console) );

})

