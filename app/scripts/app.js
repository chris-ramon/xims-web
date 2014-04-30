'use strict';

angular.module('ximsApp', [
  'ui.bootstrap',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'xims.incident',
  'xims.cause',
  'xims.correctiveAction',
  'ximsPopover',
  'ximsTypeaheadCreator',
  'ximsStepsWizard',
  'ximsCauseRow',
  'flashMessage'
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
      .when('/incidentes/:incidentId/evaluacion', {
        templateUrl: 'partials/incident/assessment.html',
        controller: 'IncidentAssessmentNewCtrl'
      })
      .when('/incidentes/:incidentId/investigacion', {
        templateUrl: 'partials/incident/investigation.html',
        controller: 'IncidentInvestigationNewCtrl'
      })
      .when('/incidentes/:incidentId/acciones-correctivas', {
        templateUrl: 'partials/incident/corrective_actions.html',
        controller: 'IncidentCorrectiveActionsNewCtrl'
      })
      .when('/acciones', {
        templateUrl: 'partials/corrective_action/list.html',
        controller: 'CorrectiveActionListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
  })
  .run(function($rootScope, $location, UserService, Global) {
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
      UserService.setCurrentUser()
        .success(function() { $rootScope.$emit('userLogged'); })
        .error(function() {
          // if(Global.env == 0) {return;} // for development purposes so it does not redirects, keep this commented.
          $location.path( "/ingresar" );
        });
    });
  });