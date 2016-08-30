'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('angularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/table', {
        templateUrl: 'views/table.html',
        controller: 'TableCtrl',
        controllerAs: 'table'
      })
      .when('/googleMap', {
        templateUrl: 'views/googlemap.html',
        controller: 'GooglemapCtrl',
        controllerAs: 'googleMap'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
