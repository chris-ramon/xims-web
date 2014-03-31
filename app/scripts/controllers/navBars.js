'use strict';

angular.module('ximsApp')
  .controller('TopNavbarCtrl',
    ['$scope', '$route', '$rootScope', 'UserService',
      function($scope, $route, $rootScope, UserService) {
        UserService.setCurrentUser().success(function() {
          $rootScope.$emit('userLogged');
        });
        $scope.UserService = UserService;
        $scope.signOut = function() {
          UserService.signOut().success(function() { $route.reload(); });
        }
      }])
  .controller('SidebarCtrl', ['$scope', 'ModuleService', function($scope, ModuleService) {
    $scope.currentModule = function(module) {
      return ModuleService.name === module;
    };
  }]);