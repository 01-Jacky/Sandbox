'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:GooglemapCtrl
 * @description
 * # GooglemapCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('GooglemapCtrl', function ($scope, $window) {

    $scope.locations = [
      // ['Bondi Beach', -33.890542, 151.274856, 4],
      // ['Coogee Beach', -33.923036, 151.259052, 5],
      // ['Cronulla Beach', -34.028249, 151.157507, 3],
      // ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      // ['Maroubra Beach', -33.950198, 151.259302, 1]
      ['Microsoft', 47.65885,	-122.14178],
      ['Facebook', 37.48462,	-122.14786],
      ['Zillow', 47.60764,	-122.33812],
      ['Amazon', 47.62229,	-122.33649],
      ['Google', 37.42233,	-122.08442],
      ['Plantir', 37.44260,	-122.16216],
    ];

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    $window.map;
    $window.initMap = function(){
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: new google.maps.LatLng(37, -98),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      var infowindow = new google.maps.InfoWindow();

      var marker, i;

      for (i = 0; i < $scope.locations.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng($scope.locations[i][1], $scope.locations[i][2]),
          map: map
        });

        google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
          return function() {
            infowindow.setContent($scope.locations[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }

    }   // end initmap
  });
