'use strict';


angular.module('ximsApp')
  .controller('IncidentNewCtrl', ['ModuleService', 'ProjectService','$routeParams', '$scope',
    function(ModuleService, ProjectService, $routeParams, $scope) {
      ModuleService.name = ModuleService.INCIDENT;
      $scope.incident = {project: null};
      $scope.ProjectService = ProjectService;


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