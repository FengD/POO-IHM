'use strict';

/**
 * @ngdoc function
 * @name projetApp.controller:MainCtrl
 * @description
 * # EDCtrl
 * Controller of the projetApp
 */
angular.module('projetApp')
  .controller('EDCtrl', ['$scope', '$http', function($scope,$http){
	$scope.education = '';
	$http.get('assets/educationFr.json').
			success(function (data){
				$scope.education = data;
				}).error(function(error){
			console.log(error);
		});
 }]);

