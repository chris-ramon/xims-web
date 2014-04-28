var trainingsPage = function() {
  this.trainingsList = element.all(by.repeater('training in TrainingService.trainings'));
  this.searchButton = element(by.partialButtonText('Buscar'));
  this.nextPageButton = element(by.linkText('Siguiente'));
  this.get = function() {
    browser.get('http://0.0.0.0:9000/capacitaciones/');
  }
};

module.exports = new trainingsPage();