'use strict';

describe('ximsStepsWizard directive', function() {
  var $compile, $scope, IncidentStepsService;

  beforeEach(module('ximsStepsWizard'));
  beforeEach(module('xims.incident'));

  beforeEach(inject(function($injector) {
    $compile = $injector.get('$compile');
    $scope = $injector.get('$rootScope');
    IncidentStepsService = $injector.get('IncidentStepsService');
  }));

  //utility functions
  var prepareInputEl = function (inputTpl) {
    var el = angular.element(inputTpl);
    $compile(el)($scope);
    $scope.$digest();
    return el;
  };

  describe('template', function() {
    it('should render the template', function() {
      var element = prepareInputEl('<xims-steps-wizard></xims-steps-wizard>');
      expect(element).not.toBe('<xims-steps-wizard></xims-steps-wizard>');
    });
  });

  describe('steps', function() {
    it('should render', function() {
      $scope.steps = IncidentStepsService.steps;

      var element = prepareInputEl('<xims-steps-wizard steps="steps"></xims-steps-wizard>');
      var steps = element.find('.stepwizard-step');
      expect(steps.length).toEqual(5);
    });
  });

  describe('active-id attribute', function() {
    it('should set "btn-primary" class to step active', function() {
      $scope.steps = IncidentStepsService.steps;
      $scope.activeId = IncidentStepsService.individualsId;

      var element = prepareInputEl('<xims-steps-wizard steps="steps" active-id="{{ activeId }}"></xims-steps-wizard>');
      expect(element.find('.btn-primary').length).toEqual(1);
    });
  });
});