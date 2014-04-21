'use strict';

angular.module('ximsApp', [
  'ui.bootstrap',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ximsPopover',
  'ximsTypeaheadCreator'
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
      .when('/incidentes/:incidentId/trabajadores', {
        templateUrl: 'partials/incident/individuals.html',
        controller: 'IncidentIndividualsNewCtrl'
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
  .run(function($rootScope, $location, UserService, Global) {
    if(Global.env == 0) {return;} // for development purposes
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
      UserService.setCurrentUser()
        .success(function() { $rootScope.$emit('userLogged'); })
        .error(function() { $location.path( "/ingresar" ); });
    });
  });