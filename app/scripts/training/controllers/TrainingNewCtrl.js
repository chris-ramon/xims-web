'use strict';

angular.module('xims.training')
  .controller('TrainingNewCtrl', ['$scope', '$filter', '$rootScope', 'ModuleService', 'TrainingService', 'flashMessageService', '$location', 'EmployeeService', 'TrainingTypeService', 'UserService',
    function($scope, $filter, $rootScope, ModuleService, TrainingService, flashMessageService, $location, EmployeeService, TrainingTypeService, UserService) {
      ModuleService.name = ModuleService.TRAINING;
      $scope.training = {employees: []};
      $scope.employees = [];
      $scope.trainedEmployees = [{}, {}];
      $scope.newQtyTrainedEmployee = 2;

      $scope.format = 'dd-MMMM-yyyy';
      $scope.minDate = new Date();

      $scope.TrainingTypeService = TrainingTypeService;

      $scope.open = function($event, model) {
        $event.preventDefault();
        $event.stopPropagation();
        model.opened = !model.opened;
      };
      $scope.save = function() {
        $scope.training.employees = $scope.formatTrainedEmployees();
        TrainingService.create($scope.training)
          .success(function(r) {
            flashMessageService.addFlashMessage({
              id: 'TNC001', text: 'La capacitación se guardó con éxito.',
              level: 'success'});
            $location.path('/capacitaciones/:trainingId'.replace(':trainingId', r.training.id));
          })
          .error(function(r) {
            flashMessageService.addFlashMessage({
              id: 'TNC002', text: r.message,
              level: 'error'});
          });
      };
      $scope.setEmployees = function() {
        EmployeeService.getEmployees(0, 500)
          .success(function(r) {
            $scope.employees = r.data;
          });
      };
      $scope._init = function() {
        $scope.setEmployees();
      };
      $scope.responsibleSelected = function($item) {
        $scope.training.responsible_id = $item.id;
      };
      $scope.trainerSelected = function($item) {
        $scope.training.trainer_id = $item.id;
      };
      $scope.searchEmployeeById = function(employeeId) {
        var l = $scope.training.employees.length;
        for(var i=0; i<l; i++) {
          if($scope.training.employees[i].id == employeeId)
            return true;
        }
        return false;
      };
      $scope.clearEmployee = function(trainedEmployee, $event) {
        // should remove trainedEmployee from $scope.trainedEmployees: TODO
        $event.preventDefault();
      };
      $scope.formatTrainedEmployees = function() {
        var l = $scope.trainedEmployees.length;
        var trainedEmployees = [];
        for(var i=0; i<l; i++) {
          if(!$scope.trainedEmployees[i].hasOwnProperty('employee')) { continue; }
          trainedEmployees.push(
            {id: $scope.trainedEmployees[i].employee.id,
            observations: $scope.trainedEmployees[i].employee.observations}
          )
        }
        return trainedEmployees;
      };

      // Adds N new empty employee objects, to trainedEmployees array
      // when the last element within trainedEmployee array is set.
      $scope.$watch(function() {
        // I am not sure about this solution
        // to watch the json format
        // would be better watch only a specific property
        // of a elements of the array.
        return angular.toJson($scope.trainedEmployees);
      }, function(newValues) {
        newValues = angular.fromJson(newValues);
        if(newValues === undefined) {return;}
        var l = $scope.trainedEmployees.length;
        var lastElement = newValues[l-1];
        if(!lastElement.hasOwnProperty('employee')) {return;}
        if(lastElement.employee.hasOwnProperty('id')) {
          for(var i=0; i<$scope.newQtyTrainedEmployee; i++) {
            $scope.trainedEmployees.push({});
          }
        }
      });

      $rootScope.$on('userLogged', function() { $scope._init(); });
      //if(UserService.currentUser) { $scope._init(); }
    }]);