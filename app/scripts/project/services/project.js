'use strict';

angular.module('ximsApp')
  .service('ProjectService', ['$http', 'ApiRoutes', function($http, ApiRoutes) {
    var self = this;
    self.projects = [
      {id: 0, name: 'Agregar Nuevo'},
      {id: 1, name: 'Proyecto AAA'},
      {id: 2, name: 'Proyecto BBB'}
    ];
  }]);

