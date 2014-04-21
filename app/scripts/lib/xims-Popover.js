'use strict';

angular.module('ximsPopover', [])
  .service('PopoverService', function() {
    var self = this;
    self.display = false;
    self.optionSelected = {};
  })
  .controller('ximsPopoverSelectController', ['$scope', '$element', 'PopoverService',
    function($scope, $element, PopoverService) {
      var src = {};
      $scope.PopoverService = PopoverService;
      $scope.select = function() {
      // we need to add new option
      if($scope.PopoverService.optionSelected.id == 0) {
        $scope.PopoverService.display = true;
      } else {
        // selected from the list
        src[$scope.property] = $scope.PopoverService.optionSelected;
        $scope.model = angular.extend($scope.model, src);
      }
    }
  }])
  .controller('ximsPopoverController', ['$scope', '$element', 'PopoverService',
    function($scope, $element, PopoverService) {
      var src = {};
      $scope.PopoverService = PopoverService;
      $scope.$watch('PopoverService.display', displayPopover);
      function displayPopover(newVal) {
        if(newVal) { $($scope.selector).popover('show'); }
      }
      $scope.close = function(event, newOption) {
        if(!newOption) { $scope.PopoverService.optionSelected = null; }
        PopoverService.display = false;
        src[$scope.property] = $scope.PopoverService.optionSelected;
        $scope.model = angular.extend($scope.model, src);
        $($scope.selector).popover('hide');
        return false;
      }
  }])
  .directive('ximsPopoverSelect', function() {
    return {
      restrict: 'E',
      scope: {items: '=', model: '=', property: '@'},
      controller: 'ximsPopoverSelectController',
      template: '<select ng-model="PopoverService.optionSelected"\n        ng-options="item as item.name for item in items"\n        ng-change="select()" \n        class="form-control">\n</select>\n'
    }
  })
  .directive('ximsPopover', ['$templateCache', '$compile', function($templateCache, $compile) {
    var getContent = function(scope, attrs) {
      var html = $templateCache.get(attrs.template);
      var template = angular.element(html);
      var linkFn = $compile(template);
      return linkFn(scope);
    };
    return {
      restrict: 'E',
      scope: {selector: '@', model: '=', property: '@'},
      link: function(scope, elm, attrs) {
        $(scope.selector).popover({
          title: attrs.title, content: function() { return getContent(scope, attrs) },
          placement: 'bottom', trigger: 'manual', html: true
        });
      },
      controller: 'ximsPopoverController'
    }
  }]);
