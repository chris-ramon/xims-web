'use strict';


describe('TrainingNewCtrl', function () {
  var $controller, $rootScope, $scope;

  beforeEach(function() {
    module('ui.bootstrap');
    module('blueimp.fileupload');
    module('ximsApp');
  });
  beforeEach(inject(function($injector) {
    $controller = $injector.get('$controller');
    $rootScope = $injector.get('$rootScope');
    $scope = $rootScope.$new();
    $controller('TrainingNewCtrl', {$scope: $scope});
  }));

  describe('.$watchCollection', function() {
    describe('when updating first element within trainedEmployees', function() {
      it('should NOT add more objects to trainedEmployees', function() {
        var initLength = $scope.trainedEmployees.length;
        $scope.$apply(function() {
          $scope.trainedEmployees[0] = Fixtures.trainedEmployee;
        });
        expect($scope.trainedEmployees.length).toEqual(initLength);
      });
    });
    describe('when updating last element within trainedEmployees', function() {
      it('should add more objects to trainedEmployees', function() {
        var initLength = $scope.trainedEmployees.length;
        $scope.$apply(function() {
          $scope.trainedEmployees[initLength-1] = Fixtures.trainedEmployee;
        });
        expect($scope.trainedEmployees.length).toEqual(initLength + $scope.newQtyTrainedEmployee);
      });
    });
  });
});
