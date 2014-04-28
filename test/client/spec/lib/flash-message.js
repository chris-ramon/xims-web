'use strict';

describe('Flash Message Spec', function() {
  var _flashMessageService;
  beforeEach(angular.mock.module('flashMessage'));

  it('should be defined', inject(function(flashMessageService) {
    _flashMessageService = flashMessageService;
    expect(flashMessageService).toBeDefined();
  }));

  describe('addFlashMessage', function() {
    it('should add a new flash message', function() {
      _flashMessageService.addFlashMessage({id: 1, text: 'hi there this is chris'});
      expect(_flashMessageService.flashMessages.length).toBe(1);
    });
    it('should remove a flash message', function() {
      var hiAgain = {id: 1, text: 'hi again!'},
        hiOther = {id: 2, text: 'hi other!'};
      _flashMessageService.addFlashMessage(hiAgain);
      _flashMessageService.addFlashMessage(hiOther);
      _flashMessageService.removeFlashMessage(hiOther);
      expect(_flashMessageService.flashMessages.length).toBe(1);
    })
  })
});