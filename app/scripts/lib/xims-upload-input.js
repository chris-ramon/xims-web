'use strict';


angular.module('ximsUploadInput', [])
  .directive('ximsUploadInput', function() {
    return {
      restrict: 'A',
      scope: {uploadButtonId: '@'},
      link: function(scope, elm) {
        elm.bind('change', function() {
          $('#' + scope.uploadButtonId).click();
        });
      }
    }
  });


