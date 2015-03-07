'use strict';

/**
 * @ngdoc function
 * @name 03YoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 03YoAngularApp
 */
angular.module('03YoAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
