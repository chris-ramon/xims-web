'use strict';


angular.module('xims.incident')
  .controller('IncidentNewCtrl', ['ModuleService', 'ProjectService', 'IncidentStepsService', '$routeParams', '$scope',
    function(ModuleService, ProjectService, IncidentStepsService, $routeParams, $scope) {
      ModuleService.name = ModuleService.INCIDENT;
      $scope.incident = {project: null};
      $scope.ProjectService = ProjectService;
      $scope.IncidentStepsService = IncidentStepsService;

      // datepicker
      $scope.format = 'dd-MMMM-yyyy';
      $scope.minDate = new Date();
      $scope.open = function($event, model) {
        $event.preventDefault();
        $event.stopPropagation();
        model.dateOpened = !model.dateOpened;
      };
    }])
  .controller('newProjectCtrl', ['$scope', 'ProjectService', 'PopoverService',
    function($scope, ProjectService, PopoverService) {
    $scope.save = function(event) {
      var newProject = {id: 10, name: $scope.projectName};
      ProjectService.projects.push(newProject);
      PopoverService.optionSelected = newProject;
      $scope.$parent.close(null, true);
      event.preventDefault();
    }
  }]);