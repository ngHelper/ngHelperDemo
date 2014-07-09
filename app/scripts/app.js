'use strict';

/**
 * @ngdoc overview
 * @name ngHelperDemoApp
 * @description
 * # ngHelperDemoApp
 *
 * Main module of the application.
 */
angular
  .module('ngHelperDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngHelperBusy'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
