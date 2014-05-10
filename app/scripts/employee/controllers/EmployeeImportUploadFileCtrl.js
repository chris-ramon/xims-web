'use strict';


angular.module('xims.employee')
  .controller('EmployeeImportUploadFileCtrl', ['ModuleService', 'EntityImportService', '$scope', 'ApiRoutes',
    function(ModuleService, EntityImportService, $scope, ApiRoutes) {
      ModuleService.name = ModuleService.EMPLOYEE;
      $scope.EntityImportService = EntityImportService;
      $scope.mainApiUrl = ApiRoutes.getMainApiUrl();
    }])
  .controller('PostUploadFormCtrl', [
    '$scope', '$http', '$location', 'ApiRoutes', 'EmployeeImportService', 'UploadService',
    function ($scope, $http, $location, ApiRoutes, EmployeeImportService, UploadService) {
      // jquery-file-uploader needs this in order to send the cookies to
      // know the current user
      $('#fileupload').fileupload({xhrFields: {withCredentials: true}});
      var url = UploadService.getAllUrl();
      $scope.options = {
        url: url,
        done: function(e, data) {
          var uploadId = data.result.files[0].id;
          EmployeeImportService.setUploadFileId(uploadId);
          $location.path('/trabajadores/importar/revisar-los-datos');
        }
      };
      $scope.loadingFiles = true;
      $http.get(url).then(function(response) {
          $scope.loadingFiles = false;
          $scope.queue = response.files || [];
        }, function() {
          $scope.loadingFiles = false;
        });
    }
  ]);