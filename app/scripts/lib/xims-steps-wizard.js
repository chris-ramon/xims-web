'use strict';


angular.module('ximsStepsWizard', [])
  .controller('ximsStepsWizardController', ['$scope', function($scope) {
    $scope.isActive = function() {
      return true;
    };
  }])
  .directive('ximsStepsWizard', function() {
    return {
      restrict: 'E',
      scope: {steps: '=', activeId: '@'},
      templateUrl: 'template/steps-wizard/steps.html',
      replace: true,
      controller: 'ximsStepsWizardController'
    }
  });

angular.module('ximsStepsWizard').run(function($templateCache) {
  $templateCache.put("template/steps-wizard/steps.html",
    "<div class=\"row\">\n  <div class=\"stepwizard\">\n    <div class=\"stepwizard-row\">\n      <div ng-repeat=\"step in steps\" class=\"stepwizard-step\">\n        <button ng-class=\"{\'btn-primary\': step.id == activeId}\" \n                ng-disabled=\"step.disabled\" \n                type=\"button\" \n                class=\"btn btn-default btn-circle\">{{ $index + 1 }}</button>\n        <p><small><a ng-href=\"{{ step.url }}\" class=\"\">{{ step.name }}</a></small></p>\n      </div>\n    </div>\n  </div>\n</div>");
});

