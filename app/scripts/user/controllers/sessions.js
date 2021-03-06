'use strict';

angular.module('xims.user')
  .controller('SignInCtrl', ['$scope', 'UserService', '$location',
    function($scope, UserService, $location) {
      $scope.userForm = {};
      $scope.singingIn = false;
      $scope.signIn = function() {
        $scope.singingIn = true;
        UserService.signIn($scope.userForm)
          .success(function() {
            afterSignIn();
            $location.path('/');
          })
          .error(function() {
            afterSignIn();
            $scope.flashMessage = 'Email o Password incorrecto.';
          });
      }
      function afterSignIn() { $scope.singingIn = false; }
  }]);