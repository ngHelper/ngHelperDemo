'use strict';

/**
 * @ngdoc function
 * @name ngHelperDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngHelperDemoApp
 */
angular.module('ngHelperDemoApp').controller('MainCtrl', [ '$scope', '$timeout', '$busy', function ($scope, $timeout, $busy) {

    $scope.showBusyIndicator = function() {

        // set the message
        if ($scope.busyMessage !== undefined)
            $busy.setMessage($scope.busyMessage);

        // wait 5 seconds
        var timeoutPromise = $timeout(function() {
            console.log("The timeout expired...");
        }, 5000);

        // shwo the busy indicator
        $busy.during(timeoutPromise).then(function() {
            console.log("The busy sequences of 5 seconds is over");
        })
    }
}]);
