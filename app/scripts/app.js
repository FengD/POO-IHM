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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
       .when('/education', {
	templateUrl: 'views/education.html',
	controller: 'EDCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
