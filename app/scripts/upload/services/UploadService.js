'use strict';


angular.module('xims.upload')
  .service('UploadService', ['$http', 'ApiRoutes',
    function($http, ApiRoutes) {
      var self = this;
      self.getAllUrl = function() {
        return ApiRoutes.getMainApiUrl() + '/uploads/';
      };
    }]);