'use strict';

describe('ximsCauseRow directive', function() {
  var $compile, $scope, CauseService;

  beforeEach(module('ximsCauseRow'));
  beforeEach(module('xims.cause'));

  beforeEach(inject(function($injector) {
    $compile = $injector.get('$compile');
    $scope = $injector.get('$rootScope');
    CauseService = $injector.get('CauseService');
  }));

  //utility functions
  var prepareInputEl = function (inputTpl) {
    var el = angular.element(inputTpl);
    $compile(el)($scope);
    $scope.$digest();
    return el;
  };


  describe('template', function() {
    it('should render the substandard facts', function() {
      $scope.immediateCauseType = CauseService.subStandardActId;
      var element = prepareInputEl('<xims-cause-row immediate-cause-type="{{ immediateCauseType }}"></xims-cause-row>');
      var facts = element.find('.substandardFactsSelect option');
      var total = CauseService.getActs().length;
      expect(facts.length).toEqual(total + 1); //+1 because of the empty option
    });
  });

});