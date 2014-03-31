'use strict';

angular.module('ximsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($httpProvider, $routeProvider, $locationProvider) {
    // so we can send the cookies for auth
    $httpProvider.defaults.withCredentials = true;

    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/sign_in', {
        templateUrl: 'partials/session/sign_in',
        controller: 'SignInCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });