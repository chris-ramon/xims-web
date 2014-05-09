'use strict';

var ximsTypeaheadCreatorController = function($scope, $element) {

};

angular.module('ximsTypeaheadCreator', ['ui.bootstrap.typeahead'])
  .directive('ximsTypeaheadCreator', function($templateCache, $compile) {
    return {
      restrict: 'A',
      require: ['typeahead', 'ngModel'],
      link: function(originalScope, elm, attrs, ctrls) {
        var scope = originalScope.$new();
        var getContent = function(attrs) {
          var html = $templateCache.get(attrs.template);
          var template = angular.element(html);
          var linkFn = $compile(template);
          return linkFn(scope);
        };
        $(elm).popover({
          title: attrs.title, content: function() { return getContent(attrs) },
          placement: 'bottom', trigger: 'manual', html: true
        }).popover('show').data('bs.popover').$tip.addClass('hidden');

        scope.$watch(attrs.ngModel, function(newVal) {
          if(typeof newVal === 'object') { return; }
          scope.model = newVal;
          var matches = ctrls[0].popUpEl.scope().matches;
          if((matches.length == 0) && newVal) {
            $(elm).data('bs.popover').$tip.removeClass('hidden');
          } else {
            $(elm).data('bs.popover').$tip.addClass('hidden');
          }
        });

        scope.close = function(event, newOption) {
          $(elm).data('bs.popover').$tip.addClass('hidden');
          return false;
        };
      },
      controller: ximsTypeaheadCreatorController
    }
  });

