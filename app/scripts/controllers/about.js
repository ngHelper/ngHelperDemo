'use strict';

/**
 * @ngdoc function
 * @name ngHelperDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngHelperDemoApp
 */
angular.module('ngHelperDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
