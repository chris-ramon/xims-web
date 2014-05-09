'use strict';


angular.module('xims.employee')
  .service('EmployeeImportService', [
    function() {
      var self = this;
      self.totalImported = 0;
      self.uploadFileId = null;
      self.setUploadFileId = function(id) {
        self.uploadFileId = id;
      };
      self.getUploadFileId = function() {
        return self.uploadFileId;
      };
    }]);