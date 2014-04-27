'use strict';


angular.module('xims.incident')
  .controller('IncidentAssessmentNewCtrl', ['$scope', 'IncidentStepsService', 'IncidentService',
    function($scope, IncidentStepsService, IncidentService) {
      $scope.IncidentStepsService = IncidentStepsService;
      $scope.IncidentService = IncidentService;
      $scope.accidentTypeByNorm = IncidentService.getAccidentTypeByNorm();
      $scope.accidentTypeByLaw = IncidentService.getAccidentTypeByLaw();
      $scope.incident = {
        type: 1,
        employees:  [
          {id_number: 45996135, name: 'Chris Ramón'},
          {id_number: 55667788, name: 'Luis Rodriguez'},
          {id_number: 99900113, name: 'Carlos Dominguez'}
        ]
      };
  }]);