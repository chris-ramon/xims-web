'use strict';

angular.module('ximsApp')
  .service('ModuleService', function () {
    var self = this;
    self.HOME = 'home';
    self.TRAINING = 'training';
    self.EMPLOYEE = 'employee';
    self.INCIDENT = 'incident';
    self.ACTION = 'action';
    return self;
  });
