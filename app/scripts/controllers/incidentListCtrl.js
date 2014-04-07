'use strict';

angular.module('ximsApp')
  .controller('IncidentListCtrl', ['$scope', 'ModuleService', function($scope, ModuleService) {
    ModuleService.name = ModuleService.INCIDENT;
  }]);