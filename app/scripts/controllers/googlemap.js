'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:GooglemapCtrl
 * @description
 * # GooglemapCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('GooglemapCtrl', function ($scope, $http, $window) {
    // Members
    var map;
    var infowindow;

    // Data access
    $http.get('data/companies.json').success(function(data) {
      $scope.locations = data.companies;
    });

    // Init google map with markers
    $window.initMap = function(){
      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: new google.maps.LatLng(37, -98),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      // Draw markers with mouseover display
      infowindow = new google.maps.InfoWindow();
      var marker, i;

      for (i = 0; i < $scope.locations.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng($scope.locations[i].lat, $scope.locations[i].long),
          map: map
        });

        // On Mouseover display infowindow over markers
        google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
          return function() {
            infowindow.setContent($scope.locations[i].name);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
    }   // end initmap

    // Pan to company location
    $scope.zoomInOnMap = function(lat, long){
      var latLng = new google.maps.LatLng(lat,long);
      map.panTo(latLng);
      map.setZoom(6);
    }


    // Filters
    $scope.propertyName = 'name';
    $scope.reverse = false;

    $scope.sortBy = function(propertyName) {
      $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
    };

    $scope.searchString = {};
    $scope.searchString.costOfLiving = '';


    // function getRandomArbitrary(min, max) {
    //   return Math.random() * (max - min) + min;
    // }

  });
