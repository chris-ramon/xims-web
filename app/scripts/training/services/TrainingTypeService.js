'use strict';


angular.module('xims.training')
  .service('TrainingTypeService', ['$http', 'UserService', 'ApiRoutes',
    function($http, UserService, ApiRoutes) {
      var self = this;
      self.induction = {id: 1, name: 'Inducción'};
      self.training = {id: 2, name: 'Capacitación'};
      self.coaching = {id: 3, name: 'Entrenamiento'};
      self.emergency_drill = {id: 4, name: 'Simulacro de Emergencia'};
      self.trainingTypes = [self.induction, self.training, self.coaching, self.emergency_drill];
    }]);