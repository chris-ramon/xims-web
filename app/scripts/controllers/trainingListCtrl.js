'use strict';

angular.module('ximsApp')
  .controller('TrainingListCtrl', ['$scope', '$filter', '$rootScope', 'ModuleService', 'TrainingService', 'UserService', 'AppSettings',
    function($scope, $filter, $rootScope, ModuleService, TrainingService, UserService, AppSettings) {
      ModuleService.name = ModuleService.TRAINING;
      $scope.TrainingService = TrainingService;

      $scope.maxSize = AppSettings.pagination.maxSize;
      $scope.itemsPerPage = AppSettings.pagination.itemsPerPage;

      $scope.searchText = "";

      $scope.setTrainings = function(page) {
        if($scope.searchText)
          TrainingService.search($scope.searchText, page);
        else
          TrainingService.getAll(page);
      };

      $scope.$watch("searchText", filterEmployees);
      function filterEmployees() {
        var result = $filter('filter')($scope.TrainingService.trainingsCache, $scope.searchText);
        if(result.length) { $scope.TrainingService.trainings = result; }
      }

      // when user refresh the page
      $rootScope.$on('userLogged', function() { $scope.setTrainings(); });
      // when user visits the module
      if(UserService.currentUser) { $scope.setTrainings(); }
  }]);