'use strict';

/**
 * @ngdoc function
 * @name projetApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetApp
 */
angular.module('projetApp')
  .controller('MainCtrl', ['$scope', '$http', function ($scope,$http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.education = '';
    $http.get('assets/educationEn.json').
      success(function (data){
        $scope.education = data;
        }).error(function(error){
      console.log(error);
    });
  }]);
