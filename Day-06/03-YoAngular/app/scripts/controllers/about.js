'use strict';

/**
 * @ngdoc function
 * @name 03YoAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the 03YoAngularApp
 */
angular.module('03YoAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
