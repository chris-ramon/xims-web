'use strict';


angular.module('ximsApp')
  .service('EmployeeAlertsService', ['$http', 'UserService', 'EmployeeService', 'ApiRoutes',
    function($http, UserService, EmployeeService, ApiRoutes) {
      var self = this;
      self.filterApplied = false;
      self.currentFilter = null;

      self.riskInsuranceExpired = {id: 1};
      self.medicalExamExpired = {id: 2};
      self.noInductionTraining = {id: 3};

      self.filters = [
        self.riskInsuranceExpired, self.medicalExamExpired,
        self.noInductionTraining
      ];

      self.getAll = function(filter, page, filterApplied) {
        self.currentFilter = filter;
        EmployeeService.loadingEmployees = true;
        return $http({
          method: 'GET',
          url: this.getAllUrl(filter.id),
          params: {page: page}
        }).success(function(response) {
            afterGetAll(response, filter, filterApplied);
          });
      };

      self.getAllUrl = function(alertType) {
        var url = ApiRoutes.getMainApiUrl() + '/:organization_id/employees/alerts/:alert_type/';
        return url
          .replace(':organization_id', UserService.currentUser.organization.id)
          .replace(':alert_type', alertType);
      };

      self.search = function(term, page) {
        EmployeeService.loadingEmployees = true;
        var _page = page || 1;
        var url = ApiRoutes.getMainApiUrl() + '/search/employees';
        return $http({
          url: url,
          method: 'GET',
          params: {term: term, page: _page,
            alert_type: self.currentFilter.id}
        }).success(EmployeeService.employeesSuccess);
      };

      function afterGetAll(response, filter, filterApplied) {
        if(filterApplied) {
          self.filterApplied = true;
          EmployeeService.employeesSuccess(response);
        }
        angular.extend(filter, response);
      }
    }]);