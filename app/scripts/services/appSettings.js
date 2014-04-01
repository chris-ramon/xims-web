'use strict';

angular.module('ximsApp')
  .value('AppSettings', {
    pagination: {maxSize: 3, itemsPerPage: 10},
    employeeAlertsType: {riskInsuranceExpired: 1,
      medicalExamExpired: 2, noInductionTraining: 3}
  })
  .service('ApiRoutes', ['Global', function(Global) {
    this.getMainApiUrl = function() {
      if(Global.env == 1) {
        return 'http://segguro-api.herokuapp.com';
      } else if(Global.env == 0) {
        return 'http://0.0.0.0:3000';
      } else {
        return '';
      }
    }
  }]);