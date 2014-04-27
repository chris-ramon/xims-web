'use strict';


describe('CauseService', function() {
  var CauseService;
  beforeEach(function() {
    module('ui.bootstrap');
    module('ximsApp');
  });
  beforeEach(inject(function($injector) {
    CauseService = $injector.get('CauseService');
  }));
  describe('.getBasicCauseById', function() {
    it('should return a basic cause object', function() {
      var basicCause = CauseService.getBasicCauseById(1);
      expect(basicCause instanceof Object).toBeTruthy();
    });
  });
  describe('.getBasicCauses', function() {
    it('should return an array of basic causes', function() {
      var subStandardActs = CauseService.getActs();
      var basicCauses = CauseService
        .getBasicCauses(subStandardActs[0]);
      expect(basicCauses instanceof Array).toBeTruthy();
      expect(basicCauses.length).toEqual(subStandardActs[0].basic_causes.length);
      expect(basicCauses[0] instanceof Object).toBeTruthy();
    });
  });
  describe('.getSubBasicCauses', function() {
    it('should return an array of sub basic causes', function() {
      var subBasicCauses = CauseService
        .getSubBasicCauses(CauseService.basicCauses[0]);
      expect(subBasicCauses instanceof Array).toBeTruthy();
      expect(subBasicCauses.length).toEqual(CauseService.basicCauses[0].sub_basic_causes.length);
    });
  });
  describe('.getSystemNeedById', function() {
    it('should return a system need', function() {
      var systemNeed = CauseService.
        getSystemNeedById(CauseService.systemNeeds[0].id);
      expect(systemNeed instanceof Object).toBeTruthy();
    });
  });
  describe('.getSystemNeeds', function() {
    it('should return an array of system needs', function() {
      var systemNeeds = CauseService.getSystemNeeds(CauseService.basicCauses[0]);
      expect(systemNeeds instanceof Array).toBeTruthy();
      expect(systemNeeds.length).toEqual(CauseService.basicCauses[0].system_needs.length);
    });
  })
});