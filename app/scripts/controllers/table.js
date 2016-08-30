'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:TableCtrl
 * @description
 * # TableCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('TableCtrl', function ($scope, $http) {

    function successCallback(response){
      $scope.names = response.data.records;
    }

    function errorCallback(){
      console.log("$http.get failed");
    }

    $http.get("http://www.w3schools.com/angular/customers.php").then(successCallback, errorCallback);




    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
