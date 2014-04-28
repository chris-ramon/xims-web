var employeesUpdatePage = function() {
  this.riskInsuranceExpirationDateInput = element(by.model('employee.risk_insurance.expiration_date'));
  this.medicalExamExpirationDateInput = element(by.model('employee.medical_exam.expiration_date'));
  this.saveButton = element(by.buttonText('Guardar'));
  this.employeeId = null;
  this.setRiskInsuranceExpirationDateInput = function(riskInsuranceDate) {
    this.riskInsuranceExpirationDateInput.sendKeys(riskInsuranceDate);
  };
  this.setMedicalExamExpirationDateInput = function(medicalExamDate) {
    this.medicalExamExpirationDateInput.sendKeys(medicalExamDate);
  };
  this.get = function() {
    browser.get('http://0.0.0.0:9000/trabajadores/' + this.employeeId + '/editar');
  };
};

module.exports = new employeesUpdatePage();