'use strict';


angular.module('xims.incident', [])
  .service('IncidentStepsService', ['$http', function($http) {
    var self = this;
    self.basicInformationId = 0;
    self.individualsId = 1;
    self.steps = [
      {id: 0, active: true, disabled: true,
        url: '/incidentes/1/', name: 'Información Básica'},
      {id: 1, active: false, disabled: true,
        url: '/incidentes/1/trabajadores', name: 'Trabajadores Afectados'},
      {id: 2, active: false, disabled: true,
        url: '/incidentes/1/evaluation', name: 'Evaluación'},
      {id: 3, active: false, disabled: true,
        url: '/incidentes/1/investigation', name: 'Investigación'},
      {id: 4, active: false, disabled: true,
        url: '/incidentes/1/corrective-actions', name: 'Acciones Correctivas'}
    ];
  }]);