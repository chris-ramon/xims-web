describe('employees page', function() {
  var signInPage = require('../pages/sign_in_page.js'),
    signOutPage = require('../pages/sign_out_page.js'),
    employeesUpdatePage = require('../pages/employees_update_page.js');

  it('beforeAll', function() {
    signInPage.signIn();
    browser.waitForAngular();
  });
  describe('when editing one employee', function() {
    it('should edit risk insurance and medical exam dates', function() {
      employeesUpdatePage.employeeId = 1;
      employeesUpdatePage.get();
      employeesUpdatePage.riskInsuranceExpirationDateInput.clear();
      employeesUpdatePage.medicalExamExpirationDateInput.clear();
      employeesUpdatePage.setRiskInsuranceExpirationDateInput('2019-04-27T21:02:29.360Z');
      employeesUpdatePage.setMedicalExamExpirationDateInput('2019-04-27T21:02:29.360Z');
      employeesUpdatePage.saveButton.click();
      expect(employeesUpdatePage.riskInsuranceExpirationDateInput.getAttribute('value')).toMatch(/2019-04-27/);
      expect(employeesUpdatePage.medicalExamExpirationDateInput.getAttribute('value')).toMatch(/2019-04-27/);
    });
  });
  it('afterAll', function() {
    signOutPage.signOut();
  });
});


