var trainingsDetailPage = function() {
  this.flashMessageList = element.all(by.repeater('flashMessage in flashMessageService.flashMessages'))
  this.trainingId = null;
  this.get = function() {
    browser.get('http://0.0.0.0:9000/capacitaciones/' + this.trainingId);
  }
};

module.exports = new trainingsDetailPage();