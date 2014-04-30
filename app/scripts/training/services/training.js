'use strict';


angular.module('xims.training')
  .service('TrainingService', ['$http', 'UserService', 'ApiRoutes',
    function($http, UserService, ApiRoutes) {
      var self = this;
      self.trainings = [];
      self.trainingsCache = [];
      self.totalItems = 0;
      self.currentPage = 0;
      self.loadingTrainings = false;

      self.getAll = function(page) {
        if(self.loadingTrainings) { return false; }
        self.loadingTrainings = true;
        return $http({
          method: 'GET',
          url: self.getAllUrl(),
          params: {page: page}
        }).success(self.trainingsSuccess);
      };

      self.getAllUrl = function() {
        var url = ApiRoutes.getMainApiUrl() + '/:organization_id/trainings';
        return url.replace(':organization_id',
          UserService.currentUser.organization.id);
      };

      self.trainingsSuccess = function(response) {
        self.trainings = response.data;
        self.trainingsCache = response.data;
        self.totalItems = response.meta.total_items;
        self.currentPage = response.meta.current_page;
        self.loadingTrainings = false;
      };

      self.search = function(term, page) {
        if(self.loadingTrainings) { return false; }
        self.loadingTrainings = true;
        var _page = page || 1;
        var url = ApiRoutes.getMainApiUrl() + '/search/trainings';
        return $http({
          url: url,
          method: 'GET',
          params: {term: term, page: _page}
        }).success(self.trainingsSuccess);
      };

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