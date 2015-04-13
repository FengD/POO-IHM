'use strict';

/**
 * @ngdoc overview
 * @name projetApp
 * @description
 * # projetApp
 *
 * Main module of the application.
 */
angular
  .module('projetApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
       .when('/education', {
	templateUrl: 'views/education.html',
	controller: 'EDCtrl'
      })
       .when('/educationCH', {
  templateUrl: 'views/educationCH.html',
  controller: 'EDCHCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
