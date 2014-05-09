'use strict';


angular.module('xims.employee')
  .controller('EmployeeImportReviewDataCtrl', ['ModuleService', 'EntityImportService', '$scope', 'EmployeeImportService', 'DataImporterService', 'AppSettings', '$location', 'flashMessageService',
    function(ModuleService, EntityImportService, $scope, EmployeeImportService, DataImporterService, AppSettings, $location, flashMessageService) {
      ModuleService.name = ModuleService.EMPLOYEE;
      $scope.EntityImportService = EntityImportService;
      $scope.EmployeeImportService = EmployeeImportService;
      $scope.maxSize = AppSettings.pagination.maxSize;
      $scope.itemsPerPage = AppSettings.pagination.itemsPerPage;
      $scope.totalItems = 0;
      $scope.currentPage = 0;
      $scope.loadingEmployees = false;

      $scope.setEmployees = function(page) {
        $scope.loadingEmployees = true;
        DataImporterService.getOne(
          EmployeeImportService.getUploadFileId(), {page: page}).success(function(r) {
            $scope.employees = r.data;
            $scope.totalItems = r.total_items;
            $scope.currentPage = r.current_page;
            $scope.loadingEmployees = false;
          })
          .error(function() {
            $scope.loadingEmployees = false;
          });
      };

      $scope.importData = function() {
        DataImporterService.create(EmployeeImportService.getUploadFileId())
          .success(function(r) {
            EmployeeImportService.totalImported = r.total;
            $location.path('/trabajadores/importar/resumen');
          })
          .error(function(r) {
            flashMessageService.addFlashMessage({id: 'EIRD001', text: 'Ha ocurrido un error al tratar de importar los datos.'});
          });
      };

      $scope.setEmployees();
    }]);