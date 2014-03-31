'use strict';

angular.module('ximsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
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
      .when('/trabajadores', {
        templateUrl: 'partials/employee/list.html',
        controller: 'EmployeeListCtrl'
      })
      .when('/trabajadores/:employeeId', {
        templateUrl: 'partials/employee/detail.html',
        controller: 'EmployeeCtrl'
      })
      .when('/trabajadores/:employeeId/editar', {
        templateUrl: 'partials/employee/edit.html',
        controller: 'EmployeeUpdateCtrl'
      })
      .when('/capacitaciones', {
        templateUrl: 'partials/training/list.html',
        controller: 'TrainingListCtrl'
      })
      .when('/capacitaciones/nuevo', {
        templateUrl: 'partials/training/new.html',
        controller: 'TrainingNewCtrl'
      })
      .when('/capacitaciones/:trainingId', {
        templateUrl: 'partials/training/detail.html',
        controller: 'TrainingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  });