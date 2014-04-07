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
      .when('/ingresar', {
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
      .when('/incidentes', {
        templateUrl: 'partials/incident/list.html',
        controller: 'IncidentListCtrl'
      })
      .when('/incidentes/nuevo', {
        templateUrl: 'partials/incident/new.html',
        controller: 'IncidentNewCtrl'
      })
      .when('/acciones', {
        templateUrl: 'partials/action/list.html',
        controller: 'ActionListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  })
  .run(function($rootScope, $location, UserService) {
    // register listener to watch route changes
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
      if (UserService.currentUser == null) {
        // no logged user, we should be going to #login
        if ( next.templateUrl == "partials/session/sign_in" ) {
          // already going to #login, no redirect needed
        } else {
          // not going to #login, we should redirect now
          $location.path( "/ingresar" );
        }
      }
    });
  });