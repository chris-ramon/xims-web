'use strict';


angular.module('xims.dataImporter')
  .service('DataImporterService', ['$http', 'ApiRoutes',
    function($http, ApiRoutes) {
      var self = this;
      self.getOne = function(upload_id, data) {
        return $http({
          method: 'GET',
          url: self.getOneUrl(upload_id),
          params: data
        })
      };
      self.getOneUrl = function(upload_id) {
        return ApiRoutes.getMainApiUrl() + '/data-importer/:upload_id'
          .replace(':upload_id', upload_id);
      };
      self.create = function(upload_id) {
        return $http({
          method: 'POST',
          url: self.getOneUrl(upload_id)
        });
      };
    }]);