'use strict';


angular.module('ximsApp')
  .service('EntityImportService', ['$http', function($http) {
    var self = this;
    self.uploadFileId = 1;
    self.reviewDataId = 2;
    self.importSummaryId = 3;
    self.steps = [
      {id: self.uploadFileId, active: true, disabled: true,
        url: '/trabajadores/importar/subir-el-archivo', name: 'Subir el Archivo'},
      {id: self.reviewDataId, active: false, disabled: true,
        url: '/trabajadores/importar/revisar-los-datos', name: 'Revisar los Datos'},
      {id: self.importSummaryId, active: false, disabled: true,
        url: '/trabajadores/importar/resumen', name: 'Resumen'}
    ];
  }]);