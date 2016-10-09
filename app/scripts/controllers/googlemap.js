'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:GooglemapCtrl
 * @description
 * # GooglemapCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('GooglemapCtrl', function () {

    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    }
  });
