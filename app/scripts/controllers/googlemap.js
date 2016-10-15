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


    // $scope.locations = [
    //   {
    //     "name":"Microsoft",
    //     "city": "Redmond",
    //     "costOfLiving": "High",
    //     "lat": 47.65885,
    //     "long": -122.14178
    //   },
    //   {
    //     "name":'Facebook',
    //     "city": "Menlo Park",
    //     "costOfLiving": "Outragous",
    //     "lat":37.48462,
    //     "long":-122.14786
    //   },
    //   {
    //     "name":'Zillow',
    //     "city": "Seattle",
    //     "costOfLiving": "High",
    //     "lat": 47.60764,
    //     "long": -122.33812
    //   },
    //   {
    //     "name":'Epic',
    //     "city": "Wisconsin",
    //     "costOfLiving": "Dirt cheap",
    //     "lat": 42.99682019999999,
    //     "long": -89.56801139999999
    //   },
    //   // ['Amazon', 47.62229, -122.33649],
    //   // ['Google', 37.42233, -122.08442],
    //   // ['Plantir', 37.44260, -122.16216],
    // ];

    $http.get('data/companies.json').success(function(data) {
      $scope.locations = data.companies;
    });

    $scope.orderByMe = function(x) {
      $scope.myOrderBy = x;
    }

    function getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }

    // $window.map;
    var map;
    $window.initMap = function(){
      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: new google.maps.LatLng(37, -98),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      var infowindow = new google.maps.InfoWindow();

      var marker, i;

      for (i = 0; i < $scope.locations.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng($scope.locations[i].lat, $scope.locations[i].long),
          map: map
        });

        google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
          return function() {
            infowindow.setContent($scope.locations[i].name);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
    }   // end initmap

    $scope.zoomInOnMap = function(lat, long){
      // alert("To-Do: Zoom on map at " + lat + " " + long);
      var latLng = new google.maps.LatLng(lat,long);
      map.panTo(latLng);
      map.setZoom(6);
    }



  });
