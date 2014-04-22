'use strict';

describe('ximsPopoverSelectController', function() {
  var scope, ctrl;

  beforeEach(module('ximsPopover'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope;
    ctrl = $controller('ximsPopoverSelectController',
      {$scope: scope, $element: null});
  }));

  describe('select', function() {
    it('should extend the property given of model', function() {
      scope.items = [
        {id: 0, name: 'Agregar Nuevo'},
        {id: 1, name: 'Proyecto AAA'},
        {id: 2, name: 'Proyecto BBB'}];
      scope.model = {};
      scope.property = 'project';
      scope.PopoverService.optionSelected = scope.items[1];
      scope.select();
      expect(scope.model).hasOwnProperty(scope.property);
    });
  });
});