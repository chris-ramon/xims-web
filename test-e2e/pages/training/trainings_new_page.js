var trainingNewPage = function() {
  this.responsibleIdInput = element(by.model('responsible'));
  this.trainingTypeSelect = element(by.model('training.training_type'));
  this.trainingDateInput = element(by.model('training.training_date'));
  this.trainingHoursInput = element(by.model('training.training_hours'));
  this.trainingTopicInput = element(by.model('training.topic'));
  this.trainerInput = element(by.model('trainer'));
  this.trainedEmployeesList = element.all(by.repeater('trainedEmployee in trainedEmployees'));
  this.saveButton = element(by.buttonText('Guardar'));
  this.get = function() {
    browser.get('http://0.0.0.0:9000/capacitaciones/nuevo');
  }
};

module.exports = new trainingNewPage();