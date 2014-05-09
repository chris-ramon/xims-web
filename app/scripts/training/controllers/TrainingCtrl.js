'use strict';


angular.module('xims.training')
  .controller('TrainingCtrl', ['ModuleService', '$routeParams', '$scope', 'TrainingService',
    function(ModuleService, $routeParams, $scope, TrainingService) {
      ModuleService.name = ModuleService.TRAINING;
      TrainingService.getOne($routeParams.trainingId)
        .success(function(r) {
          $scope.training = r.training;
        });
    }]);