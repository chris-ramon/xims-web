'use strict';


angular.module('xims.employee')
  .service('EmployeeService', ['$http', 'UserService', 'ApiRoutes',
    function($http, UserService, ApiRoutes) {
      var self = this;
      self.employees = [];
      self.employeesCache = [];
      self.totalItems = 0;
      self.currentPage = 0;
      self.loadingEmployees = false;

      self.getAll = function(page) {
        if(self.loadingEmployees) { return false; }
        self.loadingEmployees = true;
        return $http({
          method: 'GET',
          url: self.getAllUrl(),
          params: {page: page}
        }).success(self.employeesSuccess);
      };

      self.getAllUrl = function() {
        var url = ApiRoutes.getMainApiUrl() + '/:organization_id/employees';
        return url.replace(':organization_id',
          UserService.currentUser.organization.id);
      };

      self.search = function(term, page) {
        if(self.loadingEmployees) { return false; }
        self.loadingEmployees = true;
        var _page = page || 1;
        var url = ApiRoutes.getMainApiUrl() + '/search/employees';
        return $http({
          url: url,
          method: 'GET',
          params: {term: term, page: _page}
        }).success(self.employeesSuccess);
      };

      self.employeesSuccess = function(response) {
        self.employees = response.data;
        self.employeesCache = response.data;
        self.totalItems = response.meta.total_items;
        self.currentPage = response.meta.current_page;
        self.loadingEmployees = false;
      };

      self.getOne = function(employeeId) {
        return $http({
          method: 'GET',
          url: self.getOneUrl(employeeId)
        });
      };

      self.getOneUrl = function(employeeId) {
        return ApiRoutes.getMainApiUrl() + '/employees/:employee_id'
          .replace(':employee_id', employeeId);
      };

      self.updateOne = function(employeeId, data) {
        return $http({
          url: self.getOneUrl(employeeId),
          method: 'PUT',
          data: {
            employee : {
              risk_insurance: data['risk_insurance'],
              medical_exam: data['medical_exam']
            }
          }
        });
      };
    }]);