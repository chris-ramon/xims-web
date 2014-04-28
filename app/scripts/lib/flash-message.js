var flashMessage = angular.module('flashMessage', []);

angular.module('flashMessage')
  .service('flashMessageService', function() {
    var self = this;
    self.flashMessages = [];
    self.removeFlashMessage = function(flashMessageToRemove) {
      var index = self.flashMessages.indexOf(flashMessageToRemove);
      return self.flashMessages.splice(index, 1)[0];
    };
    self.addFlashMessage = function(flashMessageToAdd) {
      self.flashMessages.forEach(function(flashMessage) {
        if(flashMessageToAdd && flashMessageToAdd.id == flashMessage.id ) {
          flashMessageToAdd = null;
        }
      });

      if(flashMessageToAdd) {
        self.flashMessages.push(flashMessageToAdd);
      }
    }
  })
  .controller('FlashMessageServiceCtrl', ['$scope', 'flashMessageService', function($scope, flashMessageService) {
    $scope.flashMessageService = flashMessageService;
  }]);