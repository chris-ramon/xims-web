'use strict';


angular.module('ximsCauseRow', [])
  .controller('ximsCauseRowCtrl', ['$scope', '$element', 'CauseService',
    function($scope, $element, CauseService) {
      $scope.substandardFactSelected = null;
      $scope.basicCauseSelected = null;
      $scope.subBasicCauseSelected = null;
      $scope.systemNeedSelected = null;
      $scope.subSystemNeedSelected = null;

      $scope.substandardFacts = CauseService.getSubstandardFacts($scope.immediateCauseType);
      $scope.setBasicCauses = function() {
        $scope.basicCauseSelected = null;
        $scope.subBasicCauseSelected = null;
        $scope.systemNeedSelected = null;
        $scope.subSystemNeedSelected = null;

        $scope.basicCauses = CauseService.getBasicCauses($scope.substandardFactSelected);
        $scope.subBasicCauses = [];
        $scope.systemNeeds = [];
        $scope.subSystemNeeds = [];
      };
      $scope.setSubBasicCauses = function() {
        $scope.subBasicCauseSelected = null;
        $scope.systemNeedSelected = null;
        $scope.subSystemNeedSelected = null;

        $scope.subBasicCauses = CauseService.getSubBasicCauses($scope.basicCauseSelected);
        $scope.systemNeeds = [];
        $scope.subSystemNeeds = [];
      };
      $scope.subBasicCauseSelectedChange = function() {
        $scope.systemNeedSelected = null;
        $scope.subSystemNeedSelected = null;

        $scope.systemNeeds = CauseService.getSystemNeeds($scope.basicCauseSelected);
        $scope.subSubBasicCauses = CauseService.getSubSubBasicCauses($scope.subBasicCauseSelected);
        $scope.subSystemNeeds = [];
      };
      $scope.setSubSystemNeeds = function() {
        $scope.subSystemNeedSelected = null;
        $scope.subSystemNeeds = CauseService.getSubSystemNeeds($scope.systemNeedSelected);
      };
    }
  ])
  .directive('ximsCauseRow', function() {
    return {
      restrict: 'EA',
      scope: {immediateCauseType: '@'},
      replace: false,
      templateUrl: 'template/xims-cause-row/tr.html',
      controller: 'ximsCauseRowCtrl'
    }
  });

angular.module('ximsCauseRow').run(function($templateCache) {
  $templateCache.put('template/xims-cause-row/tr.html',
    "<td>\n  <select\n      ng-model=\"substandardFactSelected\"\n      ng-options=\"substandardFact.name for substandardFact in substandardFacts\"\n      ng-change=\"setBasicCauses()\" class=\"form-control substandardFactsSelect\">\n    <option value=\"\"></option>\n  </select>\n</td>\n<td>\n  <select\n      ng-model=\"basicCauseSelected\"\n      ng-options=\"basicCause.name for basicCause in basicCauses\"\n      ng-change=\"setSubBasicCauses()\" class=\"form-control\">\n    <option value=\"\"></option>\n  </select>\n</td>\n<td>\n  <select\n      ng-model=\"subBasicCauseSelected\"\n      ng-options=\"subBasicCause.name for subBasicCause in subBasicCauses\"\n      ng-change=\"subBasicCauseSelectedChange()\" class=\"form-control ximsSubBasicCauseSelect\">\n    <option value=\"\"></option>\n  </select>\n  <select\n      ng-show=\"subSubBasicCauses\"\n      ng-model=\"subSubBasicCauseSelected\"\n      ng-options=\"subSubBasicCause.name for subSubBasicCause in subSubBasicCauses\" \n      class=\"form-control\">\n    <option value=\"\"></option>\n  </select>\n</td>\n<td>\n  <select\n      ng-model=\"systemNeedSelected\"\n      ng-options=\"systemNeed.name for systemNeed in systemNeeds\"\n      ng-change=\"setSubSystemNeeds()\" class=\"form-control\">\n    <option value=\"\"></option>\n  </select>  \n</td>\n<td>\n  <select\n      ng-model=\"subSystemNeedSelected\"\n      ng-options=\"subSystemNeed.name for subSystemNeed in subSystemNeeds\" \n      class=\"form-control\">\n    <option value=\"\"></option>\n  </select>  \n</td>\n<td><a href=\"#\" class=\"\"><i class=\"glyphicon glyphicon-trash\"></i></a></td>\n");
});

