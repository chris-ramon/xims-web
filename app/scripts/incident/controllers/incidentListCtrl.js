'use strict';

angular.module('xims.incident')
  .controller('IncidentListCtrl', ['$scope', 'ModuleService', function($scope, ModuleService) {
    ModuleService.name = ModuleService.INCIDENT;
  }])
  .controller('IncidentListHeaderCtrl', ['$scope', function($scope) {

  }]);