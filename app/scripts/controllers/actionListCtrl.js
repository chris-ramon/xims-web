'use strict';

angular.module('ximsApp')
  .controller('ActionListCtrl', ['$scope', 'ModuleService', function($scope, ModuleService) {
    ModuleService.name = ModuleService.ACTION;
  }]);