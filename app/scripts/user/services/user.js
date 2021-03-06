'use strict';

angular.module('xims.user')
  .service('UserService', ['$http', 'ApiRoutes', function($http, ApiRoutes) {
    var self = this;
    self.currentUser = null;
    self.signIn = function(userForm) {
      return $http({
        url: ApiRoutes.getMainApiUrl() + '/users/sign_in',
        method: 'POST',
        data: {
          user: {
            email: userForm.email,
            password: userForm.password}}
      }).success(updateCurrentUser);
    }
    self.signOut = function() {
      return $http({
        url: ApiRoutes.getMainApiUrl() + '/users/sign_out',
        method: 'DELETE'
      }).success(afterSignOut);
    }
    self.setCurrentUser = function() {
      return $http({
        url: ApiRoutes.getMainApiUrl() + '/users/current_user',
        method: 'GET'
      }).success(updateCurrentUser);
    }
    function updateCurrentUser(r) {
      self.currentUser = r.employee;
    }
    function afterSignOut() {
      self.currentUser = null;
    }
  }]);

