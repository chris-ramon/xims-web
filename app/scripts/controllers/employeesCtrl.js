'use strict';


angular.module('ximsApp')
  .controller('EmployeeCtrl', ['ModuleService', '$routeParams', '$scope', 'EmployeeService',
    function(ModuleService, $routeParams, $scope, EmployeeService) {
      ModuleService.name = ModuleService.EMPLOYEE;
      EmployeeService.getOne($routeParams.employeeId)
        .success(function(r) { $scope.employee = r.employee; });
    }])
  .controller('EmployeeUpdateCtrl', ['ModuleService', '$routeParams', '$scope', 'EmployeeService', 'flashMessageService',
    function(ModuleService, $routeParams, $scope, EmployeeService, flashMessageService) {
      ModuleService.name = ModuleService.EMPLOYEE;
      EmployeeService.getOne($routeParams.employeeId)
        .success(function(r) { $scope.employee = r.employee; });
      $scope.flashMessageService = flashMessageService;

      // datepicker
      $scope.format = 'dd-MMMM-yyyy';
      $scope.minDate = new Date();
      $scope.open = function($event, model) {
        $event.preventDefault();
        $event.stopPropagation();
        model.opened = !model.opened;
      };

      $scope.saving = false;
      $scope.save = function() {
        if($scope.employee) {
          $scope.saving = true;
          EmployeeService.updateOne($routeParams.employeeId, $scope.employee)
            .success(function(r) {
              flashMessageService.addFlashMessage({
                id: 'EUPD-001',
                text: 'Información actualizada con éxito!',
                level: 'success'});
              $scope.saving = false;
            })
            .error(function() {
              flashMessageService.addFlashMessage({
                id: 'EUPD-002',
                text: 'Error al guardar la información!',
                level: 'warning'});
              $scope.saving = false;
            });
        }
      };
    }]);