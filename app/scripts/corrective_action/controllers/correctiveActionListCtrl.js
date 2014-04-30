'use strict';

angular.module('xims.correctiveAction')
  .controller('CorrectiveActionListCtrl', ['$scope', 'ModuleService', function($scope, ModuleService) {
    ModuleService.name = ModuleService.ACTION;
  }]);