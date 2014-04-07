'use strict';


angular.module('ximsApp')
  .controller('IncidentNewCtrl', ['ModuleService', '$routeParams', '$scope',
    function(ModuleService, $routeParams, $scope) {
      ModuleService.name = ModuleService.INCIDENT;
      $scope.incident = {};
      // datepicker
      $scope.format = 'dd-MMMM-yyyy';
      $scope.minDate = new Date();
      $scope.open = function($event, model) {
        $event.preventDefault();
        $event.stopPropagation();
        model.dateOpened = !model.dateOpened;
      };
    }]);