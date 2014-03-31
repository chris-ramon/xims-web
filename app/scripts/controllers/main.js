'use strict';

angular.module('ximsApp')
  .controller('MainCtrl', function ($scope, ModuleService) {
    ModuleService.name = ModuleService.HOME;
  });