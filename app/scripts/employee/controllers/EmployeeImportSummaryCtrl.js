'use strict';


angular.module('xims.employee')
  .controller('EmployeeImportSummaryCtrl', ['ModuleService', 'EntityImportService', '$scope', 'EmployeeImportService',
    function(ModuleService, EntityImportService, $scope, EmployeeImportService) {
      ModuleService.name = ModuleService.EMPLOYEE;
      $scope.EntityImportService = EntityImportService;
      $scope.EmployeeImportService = EmployeeImportService;
    }]);