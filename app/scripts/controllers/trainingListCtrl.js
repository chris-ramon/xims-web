'use strict';

angular.module('ximsApp')
  .controller('TrainingListCtrl', ['$scope', 'ModuleService', function($scope, ModuleService) {
    ModuleService.name = ModuleService.TRAINING;
  }]);