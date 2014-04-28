'use strict';


angular.module('ximsApp')
  .service('TrainingService', ['$http', 'UserService', 'ApiRoutes',
    function($http, UserService, ApiRoutes) {
      var self = this;

      self.getTrainingsByEmployee = function(employeeId) {
        return $http({
          method: 'GET',
          url: self.getTrainingsByEmployeeUrl(employeeId)
        });
      };

      self.getTrainingsByEmployeeUrl = function(employeeId) {
        return ApiRoutes.getMainApiUrl() + '/trainings/:employee_id/trainings'
          .replace(':employee_id', employeeId);
      };
    }]);