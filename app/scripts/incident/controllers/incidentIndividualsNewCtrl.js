'use strict';

angular.module('xims.incident')
  .controller('IncidentIndividualsNewCtrl', ['$scope', 'ModuleService', 'IncidentStepsService',
    function($scope, ModuleService, IncidentStepsService) {
      ModuleService.name = ModuleService.INCIDENT;

      $scope.individuals = [
        {id_number: 45996135, name: 'Chris Ramón'},
        {id_number: 55667788, name: 'Luis Rodriguez'},
        {id_number: 99900113, name: 'Carlos Dominguez'}
      ];

      $scope.IncidentStepsService = IncidentStepsService;
  }])
  .controller('newEmployeeCtrl', ['$scope', function($scope) {
    $scope.save = function(event) {
      event.preventDefault();
    }
  }]);
